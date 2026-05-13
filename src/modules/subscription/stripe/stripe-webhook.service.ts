import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { DataSource, EntityManager } from 'typeorm';
import { SubscriptionPaymentRepository } from '../repositories/subscription-payment.repository';
import { SubscriptionRepository } from '../repositories/subscription.repository';
import { SubscriptionPaymentStatus } from '../enums/subscription-payment-status.enum';
import { SubscriptionStatus } from '../enums/subscription-status.enum';
import { SubscriptionNotificationService } from '../services/subscription-notification.service';
import { StripeService } from './stripe.service';

interface StripePaymentIntent {
    id: string;
    last_payment_error?: { message?: string } | null;
    cancellation_reason?: string | null;
}

interface StripeCharge {
    id: string;
    payment_intent: string | null;
    amount_refunded: number;
    refunded: boolean;
    dispute?: string | null;
}

// Stripe events we explicitly handle
const HANDLED_EVENTS = new Set([
    'payment_intent.succeeded',
    'payment_intent.payment_failed',
    'payment_intent.canceled',
    'charge.refunded',
    'charge.dispute.created',
]);

@Injectable()
export class StripeWebhookService {
    private readonly logger = new Logger(StripeWebhookService.name);

    constructor(
        private readonly stripeService: StripeService,
        private readonly paymentRepo: SubscriptionPaymentRepository,
        private readonly subscriptionRepo: SubscriptionRepository,
        private readonly notificationService: SubscriptionNotificationService,
        private readonly dataSource: DataSource,
    ) {}

    /**
     * Entry point for all incoming Stripe webhook events.
     * Throws BadRequestException ONLY for signature failures so Stripe stops retrying
     * bad events. All processing errors are caught and logged; we always return 200.
     */
    async handleEvent(payload: Buffer, signature: string): Promise<void> {
        let event: any;
        try {
            event = this.stripeService.constructWebhookEvent(payload, signature);
        } catch (err) {
            this.logger.error('Stripe webhook signature verification failed', err);
            // 400 → Stripe will not retry — correct behaviour for tampered payloads
            throw new BadRequestException('Invalid Stripe webhook signature');
        }

        const eventId = event.id as string;
        const eventType = event.type as string;

        this.logger.log(`Stripe webhook received: ${eventType} (id=${eventId})`);

        if (!HANDLED_EVENTS.has(eventType)) {
            // Acknowledge events we don't act on. Stripe expects 200, not 422.
            this.logger.debug(`Stripe event ignored (no handler): ${eventType}`);
            return;
        }

        try {
            switch (eventType) {
                case 'payment_intent.succeeded':
                    await this.handlePaymentSucceeded(event.data.object as StripePaymentIntent);
                    break;
                case 'payment_intent.payment_failed':
                    await this.handlePaymentFailed(event.data.object as StripePaymentIntent);
                    break;
                case 'payment_intent.canceled':
                    await this.handlePaymentCanceled(event.data.object as StripePaymentIntent);
                    break;
                case 'charge.refunded':
                    await this.handleChargeRefunded(event.data.object as StripeCharge);
                    break;
                case 'charge.dispute.created':
                    await this.handleDisputeCreated(event.data.object);
                    break;
            }
        } catch (err) {
            // Log the error but return 200 so Stripe does not retry endlessly.
            // Retries would cause duplicate processing (double-activation, etc.).
            // Alerts/monitoring should catch these log entries.
            this.logger.error(
                `Error processing Stripe event ${eventType} (id=${eventId}): ${(err as Error).message}`,
                (err as Error).stack,
            );
        }
    }

    // ── payment_intent.succeeded ─────────────────────────────────────────────

    private async handlePaymentSucceeded(paymentIntent: StripePaymentIntent): Promise<void> {
        const payment = await this.paymentRepo.findByStripePaymentIntentId(paymentIntent.id);
        if (!payment) {
            this.logger.warn(`No payment found for Stripe PaymentIntent: ${paymentIntent.id}`);
            return;
        }

        // Idempotency: skip if already processed
        if (payment.status === SubscriptionPaymentStatus.PAID) {
            this.logger.log(`Payment ${payment.id} already PAID — idempotent skip`);
            return;
        }

        let periodEnd!: Date;

        await this.dataSource.transaction(async (manager: EntityManager) => {
            const now = new Date();
            const durationDays = payment.plan?.getDurationDays?.() ?? 30;
            const periodStart = now;
            periodEnd = new Date(now.getTime() + durationDays * 24 * 60 * 60 * 1000);

            await this.paymentRepo.update(
                payment.id,
                {
                    status: SubscriptionPaymentStatus.PAID,
                    paidAt: now,
                    notes: `Paid via Stripe. PaymentIntent: ${paymentIntent.id}`,
                },
                manager,
            );

            const subscription = await this.subscriptionRepo.findByUserIdWithLock(
                payment.userId,
                manager,
            );
            if (!subscription) {
                this.logger.error(`No subscription found for user ${payment.userId}`);
                return;
            }

            await this.subscriptionRepo.update(
                subscription.id,
                {
                    status: SubscriptionStatus.ACTIVE,
                    planId: payment.planId,
                    currentPeriodStart: periodStart,
                    currentPeriodEnd: periodEnd,
                    discountId: payment.discountId,
                },
                manager,
            );

            this.logger.log(
                `Subscription activated via Stripe webhook: user=${payment.userId}, until=${periodEnd.toISOString()}`,
            );
        });

        const planName = payment.plan?.name ?? 'Subscription plan';
        this.notificationService
            .notifyPaymentConfirmed(payment.userId, Number(payment.finalAmount), planName)
            .catch(err => this.logger.error('Failed to send payment confirmed notification', err));

        this.notificationService
            .notifySubscriptionActivated(payment.userId, planName, periodEnd)
            .catch(err =>
                this.logger.error('Failed to send subscription activated notification', err),
            );
    }

    // ── payment_intent.payment_failed ────────────────────────────────────────

    private async handlePaymentFailed(paymentIntent: StripePaymentIntent): Promise<void> {
        const payment = await this.paymentRepo.findByStripePaymentIntentId(paymentIntent.id);
        if (!payment) {
            this.logger.warn(`No payment found for PI ${paymentIntent.id} (payment_failed)`);
            return;
        }
        if (payment.status !== SubscriptionPaymentStatus.PENDING) {
            this.logger.log(`Payment ${payment.id} not PENDING (status: ${payment.status}) — skip`);
            return;
        }

        const errorMessage = paymentIntent.last_payment_error?.message ?? 'Payment failed';

        await this.paymentRepo.update(payment.id, {
            status: SubscriptionPaymentStatus.FAILED,
            notes: `Payment failed via Stripe: ${errorMessage}`,
        });

        this.logger.log(`Payment marked FAILED via Stripe webhook: ${payment.id}`);
    }

    // ── payment_intent.canceled ──────────────────────────────────────────────

    private async handlePaymentCanceled(paymentIntent: StripePaymentIntent): Promise<void> {
        const payment = await this.paymentRepo.findByStripePaymentIntentId(paymentIntent.id);
        if (!payment) {
            this.logger.warn(`No payment found for PI ${paymentIntent.id} (canceled)`);
            return;
        }
        if (payment.status !== SubscriptionPaymentStatus.PENDING) {
            this.logger.log(`Payment ${payment.id} not PENDING (status: ${payment.status}) — skip`);
            return;
        }

        const reason = paymentIntent.cancellation_reason ?? 'Stripe PaymentIntent was cancelled';

        await this.paymentRepo.update(payment.id, {
            status: SubscriptionPaymentStatus.FAILED,
            notes: reason,
        });

        this.logger.log(`Payment marked FAILED due to PI cancellation: ${payment.id}`);
    }

    // ── charge.refunded ──────────────────────────────────────────────────────

    private async handleChargeRefunded(charge: StripeCharge): Promise<void> {
        if (!charge.payment_intent) return;

        const payment = await this.paymentRepo.findByStripePaymentIntentId(charge.payment_intent);
        if (!payment) {
            this.logger.warn(`No payment found for PI ${charge.payment_intent} (charge.refunded)`);
            return;
        }

        // Idempotency: skip if already refunded
        if (payment.status === SubscriptionPaymentStatus.REFUNDED) {
            this.logger.log(`Payment ${payment.id} already REFUNDED — idempotent skip`);
            return;
        }

        await this.dataSource.transaction(async (manager: EntityManager) => {
            await this.paymentRepo.update(
                payment.id,
                {
                    status: SubscriptionPaymentStatus.REFUNDED,
                    notes: `Refunded via Stripe. Charge: ${charge.id}`,
                },
                manager,
            );

            const subscription = await this.subscriptionRepo.findByUserIdWithLock(
                payment.userId,
                manager,
            );
            if (subscription && subscription.status === SubscriptionStatus.ACTIVE) {
                await this.subscriptionRepo.update(
                    subscription.id,
                    { status: SubscriptionStatus.CANCELLED },
                    manager,
                );
                this.logger.log(
                    `Subscription ${subscription.id} cancelled due to refund (charge: ${charge.id})`,
                );
            }
        });

        this.logger.log(`Payment ${payment.id} marked REFUNDED via Stripe webhook`);
    }

    // ── charge.dispute.created ───────────────────────────────────────────────

    private async handleDisputeCreated(dispute: any): Promise<void> {
        // Log disputes for ops visibility. Dispute resolution is manual.
        this.logger.warn(
            `Stripe dispute created: id=${dispute.id}, amount=${dispute.amount}, reason=${dispute.reason}, PI=${dispute.payment_intent}`,
        );
    }
}
