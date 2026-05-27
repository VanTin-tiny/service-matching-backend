import { Injectable, Logger } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { DataSource, EntityManager } from 'typeorm';
import {
    AdminUpdateSubscriptionDto,
    CancelSubscriptionDto,
    GetSubscriptionsQueryDto,
    SubscribeDto,
    SubscriptionStatusSummaryDto,
} from '../dtos/subscription.dto';
import { Subscription } from '../entities/subscription.entity';
import { SubscriptionStatus } from '../enums/subscription-status.enum';
import {
    PendingPaymentExistsException,
    SubscriptionAlreadyActiveException,
    SubscriptionNotFoundException,
    SubscriptionPlanNotFoundException,
} from '../exceptions/subscription.exception';
import { InitTrialInput, PaymentCreationResult } from '../interfaces/subscription.interface';
import { DiscountRepository } from '../repositories/discount.repository';
import { SubscriptionPaymentRepository } from '../repositories/subscription-payment.repository';
import { SubscriptionPlanRepository } from '../repositories/subscription-plan.repository';
import { SubscriptionRepository } from '../repositories/subscription.repository';
import { SUBSCRIPTION_CONSTANTS } from '../constants/subscription.constants';
import { SubscriptionNotificationService } from './subscription-notification.service';
import { SubscriptionPaymentStatus } from '../enums/subscription-payment-status.enum';
import { StripeService } from '../stripe/stripe.service';

@Injectable()
export class SubscriptionService {
    private readonly logger = new Logger(SubscriptionService.name);

    constructor(
        private readonly subscriptionRepo: SubscriptionRepository,
        private readonly planRepo: SubscriptionPlanRepository,
        private readonly discountRepo: DiscountRepository,
        private readonly paymentRepo: SubscriptionPaymentRepository,
        private readonly notificationService: SubscriptionNotificationService,
        private readonly stripeService: StripeService,
        private readonly dataSource: DataSource,
    ) {}

    async initTrial(input: InitTrialInput, manager?: EntityManager): Promise<Subscription> {
        const trialStartDate = new Date();
        const trialEndDate = new Date(
            trialStartDate.getTime() +
                SUBSCRIPTION_CONSTANTS.TRIAL_DURATION_DAYS * 24 * 60 * 60 * 1000,
        );

        const sub = await this.subscriptionRepo.create(
            {
                userId: input.userId,
                status: SubscriptionStatus.TRIAL,
                trialStartDate,
                trialEndDate,
                autoRenew: true,
            },
            manager,
        );

        this.logger.log(
            `Trial initialized for user ${input.userId}, expires ${trialEndDate.toISOString()}`,
        );

        this.notificationService
            .notifyTrialStarted(input.userId, trialEndDate)
            .catch(err => this.logger.error('Failed to send trial started notification', err));

        return sub;
    }

    async getMySubscription(userId: string): Promise<Subscription> {
        const sub = await this.subscriptionRepo.findByUserId(userId);
        if (!sub) throw new SubscriptionNotFoundException();
        return sub;
    }

    async getMySubscriptionStatus(userId: string): Promise<SubscriptionStatusSummaryDto> {
        const sub = await this.subscriptionRepo.findByUserId(userId);

        if (!sub) {
            return {
                isAccessAllowed: false,
                status: SubscriptionStatus.EXPIRED,
                statusMessage: 'No subscription found. Please contact support.',
            };
        }

        const isAccessAllowed = sub.isAccessAllowed();
        const daysUntilExpiry = sub.daysUntilExpiry();
        const statusMessage = this.buildStatusMessage(sub, daysUntilExpiry);

        return {
            isAccessAllowed,
            status: sub.status,
            daysUntilExpiry,
            trialEndDate: sub.trialEndDate,
            currentPeriodEnd: sub.currentPeriodEnd,
            statusMessage,
        };
    }

    async subscribe(userId: string, dto: SubscribeDto): Promise<PaymentCreationResult> {
        const subscription = await this.subscriptionRepo.findByUserId(userId);
        if (!subscription) throw new SubscriptionNotFoundException();

        if (subscription.status === SubscriptionStatus.ACTIVE) {
            throw new SubscriptionAlreadyActiveException();
        }

        // If a PENDING payment already exists, resume it rather than creating a
        // duplicate. This handles page-refresh and double-click scenarios gracefully.
        const existingPending = await this.paymentRepo.findPendingBySubscriptionId(subscription.id);
        if (existingPending) {
            if (existingPending.stripePaymentIntentId) {
                try {
                    const pi = await this.stripeService.retrievePaymentIntent(
                        existingPending.stripePaymentIntentId,
                    );
                    // PI is still actionable — hand the client_secret back so the frontend
                    // can complete the existing payment without creating a new one.
                    if (pi.status !== 'succeeded' && pi.status !== 'canceled') {
                        this.logger.log(
                            `Resuming pending payment ${existingPending.id} for user ${userId} (PI status: ${pi.status})`,
                        );
                        return {
                            paymentId: existingPending.id,
                            subscriptionId: subscription.id,
                            amount: Number(existingPending.amount),
                            discountAmount: Number(existingPending.discountAmount),
                            finalAmount: Number(existingPending.finalAmount),
                            status: existingPending.status,
                            dueDate: existingPending.dueDate!,
                            stripePaymentIntentId: pi.id,
                            clientSecret: pi.client_secret!,
                        };
                    }
                    // PI already reached a terminal state but the webhook hasn't updated
                    // the DB record yet (rare but possible). Auto-resolve it so a fresh
                    // payment can proceed immediately.
                    await this.paymentRepo.update(existingPending.id, {
                        status: SubscriptionPaymentStatus.FAILED,
                        notes: `Auto-resolved: Stripe PI status was '${pi.status}' while DB record was still PENDING`,
                    });
                    this.logger.warn(
                        `Auto-resolved stale pending payment ${existingPending.id} (Stripe PI: ${pi.status})`,
                    );
                } catch (err) {
                    this.logger.error(
                        `Failed to retrieve Stripe PI ${existingPending.stripePaymentIntentId}`,
                        err,
                    );
                    throw new PendingPaymentExistsException();
                }
            } else {
                throw new PendingPaymentExistsException();
            }
        }

        const plan = await this.planRepo.findActiveById(dto.planId);
        if (!plan) throw new SubscriptionPlanNotFoundException(dto.planId);

        let discountId: string | undefined;
        let discountAmount = 0;

        if (dto.discountCode) {
            const discount = await this.discountRepo.findByCode(dto.discountCode);
            if (discount && discount.isValid()) {
                const applicable =
                    !discount.applicableBillingCycle ||
                    discount.applicableBillingCycle === plan.billingCycle;
                if (applicable) {
                    discountAmount = discount.computeDiscountAmount(Number(plan.price));
                    discountId = discount.id;
                }
            }
        }

        const finalAmount = Number(plan.price) - discountAmount;

        // Per-attempt idempotency key: Stripe deduplicates concurrent double-clicks
        // within its short window, while allowing fresh retries after a failure.
        // A day-scoped key was previously used but caused duplicate-PI errors when
        // the same PI was reused after the prior payment record had been marked FAILED.
        const idempotencyKey = `sub-${userId}-${plan.id}-${randomUUID()}`;

        let stripePaymentIntentId: string;
        let clientSecret: string;

        try {
            const paymentIntent = await this.stripeService.createPaymentIntent(
                finalAmount,
                {
                    userId,
                    subscriptionId: subscription.id,
                    planId: plan.id,
                    planName: plan.name,
                },
                idempotencyKey,
            );
            stripePaymentIntentId = paymentIntent.id;
            clientSecret = paymentIntent.client_secret!;
        } catch (err: any) {
            this.logger.error('Failed to create Stripe PaymentIntent', err);
            throw err;
        }

        return this.dataSource.transaction(async (manager: EntityManager) => {
            // Re-check inside the transaction to guard against concurrent requests.
            const lockedSub = await this.subscriptionRepo.findByUserIdWithLock(userId, manager);
            if (!lockedSub) throw new SubscriptionNotFoundException();
            if (lockedSub.status === SubscriptionStatus.ACTIVE) {
                this.stripeService.cancelPaymentIntent(stripePaymentIntentId).catch(() => {});
                throw new SubscriptionAlreadyActiveException();
            }
            const raceCheck = await this.paymentRepo.findPendingBySubscriptionId(
                lockedSub.id,
                manager,
            );
            if (raceCheck) {
                this.stripeService.cancelPaymentIntent(stripePaymentIntentId).catch(() => {});
                throw new PendingPaymentExistsException();
            }

            if (discountId) {
                await this.discountRepo.incrementUsage(discountId, manager);
            }

            const dueDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

            const payment = await this.paymentRepo.create(
                {
                    subscriptionId: lockedSub.id,
                    userId,
                    planId: plan.id,
                    amount: Number(plan.price),
                    discountId,
                    discountAmount,
                    finalAmount,
                    status: SubscriptionPaymentStatus.PENDING,
                    dueDate,
                    stripePaymentIntentId,
                },
                manager,
            );

            this.logger.log(
                `Subscription payment created: ${payment.id} for user ${userId}, plan ${plan.id}`,
            );

            this.notificationService
                .notifyPaymentPending(userId, finalAmount, plan.name, dueDate)
                .catch(err =>
                    this.logger.error('Failed to send payment pending notification', err),
                );

            return {
                paymentId: payment.id,
                subscriptionId: lockedSub.id,
                amount: Number(plan.price),
                discountAmount,
                finalAmount,
                status: payment.status,
                dueDate,
                stripePaymentIntentId,
                clientSecret,
            };
        });
    }

    async cancelSubscription(userId: string, dto: CancelSubscriptionDto): Promise<void> {
        const sub = await this.subscriptionRepo.findByUserId(userId);
        if (!sub) throw new SubscriptionNotFoundException();

        const planName = sub.plan?.name ?? 'your plan';

        await this.subscriptionRepo.update(sub.id, {
            status: SubscriptionStatus.CANCELLED,
            cancelledAt: new Date(),
            cancellationReason: dto.reason,
        });

        this.logger.log(`Subscription cancelled for user ${userId}`);

        this.notificationService
            .notifySubscriptionCancelled(userId, planName)
            .catch(err => this.logger.error('Failed to send cancellation notification', err));
    }

    async getAllSubscriptions(query: GetSubscriptionsQueryDto): Promise<{
        subscriptions: Subscription[];
        total: number;
    }> {
        const [subscriptions, total] = await this.subscriptionRepo.findAll(
            query.status,
            query.page,
            query.limit,
        );
        return { subscriptions, total };
    }

    async adminUpdateSubscription(
        subscriptionId: string,
        dto: AdminUpdateSubscriptionDto,
    ): Promise<Subscription> {
        const sub = await this.subscriptionRepo.findById(subscriptionId);
        if (!sub) throw new SubscriptionNotFoundException();

        await this.subscriptionRepo.update(subscriptionId, dto);
        const updated = await this.subscriptionRepo.findById(subscriptionId);
        this.logger.log(`Admin updated subscription ${subscriptionId}`);
        return updated!;
    }

    private buildStatusMessage(sub: Subscription, daysLeft: number): string {
        switch (sub.status) {
            case SubscriptionStatus.TRIAL:
                if (daysLeft > 0) {
                    return `Free trial active — ${daysLeft} day${daysLeft > 1 ? 's' : ''} remaining`;
                }
                return 'Your free trial has expired. Please subscribe to continue.';

            case SubscriptionStatus.ACTIVE:
                return daysLeft <= 7
                    ? `Subscription active — renews in ${daysLeft} day${daysLeft > 1 ? 's' : ''}`
                    : 'Subscription active';

            case SubscriptionStatus.PAST_DUE:
                return `Payment overdue — ${daysLeft} day${daysLeft > 1 ? 's' : ''} left in grace period`;

            case SubscriptionStatus.CANCELLED:
                return 'Subscription cancelled. Subscribe again to continue.';

            case SubscriptionStatus.EXPIRED:
                return 'Subscription expired. Please subscribe to regain access.';

            default:
                return 'Unknown subscription status';
        }
    }
}
