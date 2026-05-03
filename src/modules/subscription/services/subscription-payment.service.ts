import { Injectable, Logger } from '@nestjs/common';
import { DataSource, EntityManager } from 'typeorm';
import { GetPaymentsQueryDto } from '../dtos/subscription-payment.dto';
import { SubscriptionPayment } from '../entities/subscription-payment.entity';
import { SubscriptionPaymentStatus } from '../enums/subscription-payment-status.enum';
import { SubscriptionStatus } from '../enums/subscription-status.enum';
import {
    PaymentNotFoundException,
    SubscriptionNotFoundException,
} from '../exceptions/subscription.exception';
import { SubscriptionPaymentRepository } from '../repositories/subscription-payment.repository';
import { SubscriptionRepository } from '../repositories/subscription.repository';
import { SubscriptionNotificationService } from './subscription-notification.service';

@Injectable()
export class SubscriptionPaymentService {
    private readonly logger = new Logger(SubscriptionPaymentService.name);

    constructor(
        private readonly paymentRepo: SubscriptionPaymentRepository,
        private readonly subscriptionRepo: SubscriptionRepository,
        private readonly notificationService: SubscriptionNotificationService,
        private readonly dataSource: DataSource,
    ) {}

    async getMyPayments(
        userId: string,
        query: GetPaymentsQueryDto,
    ): Promise<{ payments: SubscriptionPayment[]; total: number }> {
        const [payments, total] = await this.paymentRepo.findByUserId(
            userId,
            query.status,
            query.page,
            query.limit,
        );
        return { payments, total };
    }

    async getAllPayments(
        query: GetPaymentsQueryDto,
    ): Promise<{ payments: SubscriptionPayment[]; total: number }> {
        const [payments, total] = await this.paymentRepo.findAll(
            query.status,
            query.page,
            query.limit,
        );
        return { payments, total };
    }

    async confirmPayment(paymentId: string, adminNotes?: string): Promise<SubscriptionPayment> {
        return this.dataSource.transaction(async (manager: EntityManager) => {
            const payment = await this.paymentRepo.findById(paymentId, manager);
            if (!payment) throw new PaymentNotFoundException();

            if (payment.status !== SubscriptionPaymentStatus.PENDING) {
                throw new PaymentNotFoundException();
            }

            const subscription = await this.subscriptionRepo.findByUserIdWithLock(
                payment.userId,
                manager,
            );
            if (!subscription) throw new SubscriptionNotFoundException();

            const now = new Date();
            const plan = payment.plan;
            const durationDays = plan
                ? (plan.getDurationDays ? plan.getDurationDays() : 30)
                : 30;

            const periodStart = now;
            const periodEnd = new Date(now.getTime() + durationDays * 24 * 60 * 60 * 1000);

            await this.paymentRepo.update(
                paymentId,
                {
                    status: SubscriptionPaymentStatus.PAID,
                    paidAt: now,
                    notes: adminNotes,
                },
                manager,
            );

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
                `Payment confirmed: ${paymentId} → subscription ${subscription.id} active until ${periodEnd.toISOString()}`,
            );

            const planName = plan?.name ?? 'Subscription plan';
            this.notificationService
                .notifyPaymentConfirmed(payment.userId, Number(payment.finalAmount), planName)
                .catch(err => this.logger.error('Failed to send payment confirmed notification', err));

            this.notificationService
                .notifySubscriptionActivated(payment.userId, planName, periodEnd)
                .catch(err => this.logger.error('Failed to send subscription activated notification', err));

            return (await this.paymentRepo.findById(paymentId))!;
        });
    }

    async refundPayment(paymentId: string, adminNotes?: string): Promise<SubscriptionPayment> {
        return this.dataSource.transaction(async (manager: EntityManager) => {
            const payment = await this.paymentRepo.findById(paymentId, manager);
            if (!payment) throw new PaymentNotFoundException();

            if (payment.status !== SubscriptionPaymentStatus.PAID) {
                throw new PaymentNotFoundException();
            }

            await this.paymentRepo.update(
                paymentId,
                {
                    status: SubscriptionPaymentStatus.REFUNDED,
                    notes: adminNotes,
                },
                manager,
            );

            await this.subscriptionRepo.update(
                payment.subscriptionId,
                { status: SubscriptionStatus.CANCELLED },
                manager,
            );

            this.logger.log(`Payment refunded: ${paymentId}`);
            return (await this.paymentRepo.findById(paymentId))!;
        });
    }
}
