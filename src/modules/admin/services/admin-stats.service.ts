import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@/modules/users/entities/user.entity';
import { Order, OrderStatus } from '@/modules/orders/entities/order.entity';
import { Quote } from '@/modules/quotes/entities/quote.entity';
import { Subscription } from '@/modules/subscription/entities/subscription.entity';
import { SubscriptionPayment } from '@/modules/subscription/entities/subscription-payment.entity';
import { UserRole } from '@/common/enums/user-role.enum';
import { SubscriptionStatus } from '@/modules/subscription/enums/subscription-status.enum';
import { SubscriptionPaymentStatus } from '@/modules/subscription/enums/subscription-payment-status.enum';
import {
    AdminOrderStatsQueryDto,
    AdminQuoteStatsQueryDto,
    OrderStatsResponseDto,
    OverviewStatsDto,
    QuoteStatsResponseDto,
} from '../dtos/admin.dto';

@Injectable()
export class AdminStatsService {
    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>,
        @InjectRepository(Order)
        private readonly orderRepo: Repository<Order>,
        @InjectRepository(Quote)
        private readonly quoteRepo: Repository<Quote>,
        @InjectRepository(Subscription)
        private readonly subscriptionRepo: Repository<Subscription>,
        @InjectRepository(SubscriptionPayment)
        private readonly paymentRepo: Repository<SubscriptionPayment>,
    ) {}

    async getOverview(): Promise<OverviewStatsDto> {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const [
            totalUsers,
            totalCustomers,
            totalProviders,
            activeProviders,
            totalOrders,
            completedOrders,
            pendingOrders,
            cancelledOrders,
            totalQuotes,
            confirmedQuotes,
            pendingQuotes,
            newUsers,
            recentOrders,
            activeSubscriptions,
        ] = await Promise.all([
            this.userRepo.count({ where: {} }),
            this.userRepo.count({ where: { role: UserRole.CUSTOMER } }),
            this.userRepo.count({ where: { role: UserRole.PROVIDER } }),
            this.userRepo.count({ where: { role: UserRole.PROVIDER, isActive: true } }),
            this.orderRepo.count(),
            this.orderRepo.count({ where: { status: OrderStatus.COMPLETED } }),
            this.orderRepo.count({ where: { status: OrderStatus.PENDING } }),
            this.orderRepo.count({ where: { status: OrderStatus.CANCELLED } }),
            this.quoteRepo.count({ withDeleted: false }),
            this.quoteRepo.count({ where: { status: 'confirmed' as any }, withDeleted: false }),
            this.quoteRepo.count({ where: { status: 'pending' as any }, withDeleted: false }),
            this.userRepo
                .createQueryBuilder('u')
                .where('u.created_at >= :date', { date: thirtyDaysAgo })
                .getCount(),
            this.orderRepo
                .createQueryBuilder('o')
                .where('o.created_at >= :date', { date: thirtyDaysAgo })
                .getCount(),
            this.subscriptionRepo.count({
                where: [
                    { status: SubscriptionStatus.ACTIVE },
                    { status: SubscriptionStatus.TRIAL },
                ],
            }),
        ]);

        const revenueResult = await this.orderRepo
            .createQueryBuilder('o')
            .select('SUM(o.total_amount)', 'total')
            .where('o.status = :status', { status: OrderStatus.COMPLETED })
            .getRawOne();

        const subscriptionRevenueResult = await this.paymentRepo
            .createQueryBuilder('p')
            .select('SUM(p.amount)', 'total')
            .where('p.status = :status', { status: SubscriptionPaymentStatus.PAID })
            .getRawOne();

        return {
            totalUsers,
            totalCustomers,
            totalProviders,
            activeProviders,
            totalOrders,
            completedOrders,
            pendingOrders,
            cancelledOrders,
            totalQuotes,
            confirmedQuotes,
            pendingQuotes,
            totalRevenue: Number(revenueResult?.total ?? 0),
            activeSubscriptions,
            totalSubscriptionRevenue: Number(subscriptionRevenueResult?.total ?? 0),
            newUsersLast30Days: newUsers,
            ordersLast30Days: recentOrders,
        };
    }

    async getOrderStats(query: AdminOrderStatsQueryDto): Promise<OrderStatsResponseDto> {
        const qb = this.orderRepo.createQueryBuilder('o');

        if (query.from) {
            qb.andWhere('o.created_at >= :from', { from: new Date(query.from) });
        }
        if (query.to) {
            qb.andWhere('o.created_at <= :to', { to: new Date(query.to) });
        }
        if (query.providerId) {
            qb.andWhere('o.provider_id = :pid', { pid: query.providerId });
        }
        if (query.customerId) {
            qb.andWhere('o.customer_id = :cid', { cid: query.customerId });
        }

        const byStatusRaw = await qb
            .clone()
            .select('o.status', 'status')
            .addSelect('COUNT(*)', 'count')
            .addSelect('COALESCE(SUM(o.total_amount), 0)', 'totalAmount')
            .groupBy('o.status')
            .getRawMany();

        const dailyTrendRaw = await qb
            .clone()
            .select("DATE_TRUNC('day', o.created_at)", 'date')
            .addSelect('COUNT(*)', 'count')
            .addSelect('COALESCE(SUM(o.total_amount), 0)', 'revenue')
            .groupBy("DATE_TRUNC('day', o.created_at)")
            .orderBy("DATE_TRUNC('day', o.created_at)", 'ASC')
            .getRawMany();

        const totalOrders = byStatusRaw.reduce((s, r) => s + Number(r.count), 0);
        const totalRevenue = byStatusRaw
            .filter(r => r.status === OrderStatus.COMPLETED)
            .reduce((s, r) => s + Number(r.totalAmount), 0);

        return {
            totalOrders,
            totalRevenue,
            byStatus: byStatusRaw.map(r => ({
                status: r.status,
                count: Number(r.count),
                totalAmount: Number(r.totalAmount),
            })),
            dailyTrend: dailyTrendRaw.map(r => ({
                date: new Date(r.date).toISOString().split('T')[0],
                count: Number(r.count),
                revenue: Number(r.revenue),
            })),
        };
    }

    async getQuoteStats(query: AdminQuoteStatsQueryDto): Promise<QuoteStatsResponseDto> {
        const qb = this.quoteRepo.createQueryBuilder('q').withDeleted();

        if (query.from) {
            qb.andWhere('q.created_at >= :from', { from: new Date(query.from) });
        }
        if (query.to) {
            qb.andWhere('q.created_at <= :to', { to: new Date(query.to) });
        }
        if (query.providerId) {
            qb.andWhere('q.provider_id = :pid', { pid: query.providerId });
        }

        const byStatusRaw = await qb
            .clone()
            .select('q.status', 'status')
            .addSelect('COUNT(*)', 'count')
            .groupBy('q.status')
            .getRawMany();

        const dailyTrendRaw = await qb
            .clone()
            .select("DATE_TRUNC('day', q.created_at)", 'date')
            .addSelect('COUNT(*)', 'count')
            .groupBy("DATE_TRUNC('day', q.created_at)")
            .orderBy("DATE_TRUNC('day', q.created_at)", 'ASC')
            .getRawMany();

        const totalQuotes = byStatusRaw.reduce((s, r) => s + Number(r.count), 0);

        return {
            totalQuotes,
            byStatus: byStatusRaw.map(r => ({
                status: r.status,
                count: Number(r.count),
            })),
            dailyTrend: dailyTrendRaw.map(r => ({
                date: new Date(r.date).toISOString().split('T')[0],
                count: Number(r.count),
            })),
        };
    }
}
