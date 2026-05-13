import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@/modules/users/entities/user.entity';
import { Order, OrderStatus } from '@/modules/orders/entities/order.entity';
import { Quote } from '@/modules/quotes/entities/quote.entity';
import { Subscription } from '@/modules/subscription/entities/subscription.entity';
import { SubscriptionPayment } from '@/modules/subscription/entities/subscription-payment.entity';
import { SubscriptionPaymentStatus } from '@/modules/subscription/enums/subscription-payment-status.enum';
import { DateRangeQueryDto } from '../dtos/admin.dto';

@Injectable()
export class AdminReportsService {
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

    async generateOrdersReport(query: DateRangeQueryDto): Promise<string> {
        const qb = this.orderRepo
            .createQueryBuilder('o')
            .leftJoinAndSelect('o.customer', 'customer')
            .leftJoinAndSelect('customer.profile', 'customerProfile')
            .leftJoinAndSelect('o.provider', 'provider')
            .leftJoinAndSelect('provider.profile', 'providerProfile')
            .orderBy('o.created_at', 'DESC');

        if (query.from) qb.andWhere('o.created_at >= :from', { from: new Date(query.from) });
        if (query.to) qb.andWhere('o.created_at <= :to', { to: new Date(query.to) });

        const orders = await qb.getMany();

        const headers = [
            'Order Number',
            'Title',
            'Status',
            'Customer',
            'Provider',
            'Price',
            'Service Fee',
            'Total Amount',
            'Payment Status',
            'Created At',
            'Completed At',
        ];

        const rows = orders.map(o => [
            o.orderNumber,
            `"${o.title.replace(/"/g, '""')}"`,
            o.status,
            o.customer?.profile?.displayName ?? o.customer?.email ?? o.customerId,
            o.provider?.profile?.displayName ?? o.provider?.email ?? o.providerId,
            o.price,
            o.serviceFee,
            o.totalAmount,
            o.paymentStatus,
            o.createdAt.toISOString(),
            o.completedAt?.toISOString() ?? '',
        ]);

        return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    }

    async generateQuotesReport(query: DateRangeQueryDto): Promise<string> {
        const qb = this.quoteRepo
            .createQueryBuilder('q')
            .leftJoinAndSelect('q.provider', 'provider')
            .leftJoinAndSelect('provider.profile', 'providerProfile')
            .withDeleted()
            .orderBy('q.created_at', 'DESC');

        if (query.from) qb.andWhere('q.created_at >= :from', { from: new Date(query.from) });
        if (query.to) qb.andWhere('q.created_at <= :to', { to: new Date(query.to) });

        const quotes = await qb.getMany();

        const headers = ['ID', 'Provider', 'Price', 'Status', 'Revision Count', 'Created At', 'Accepted At', 'Confirmed At'];

        const rows = quotes.map(q => [
            q.id,
            q.provider?.profile?.displayName ?? q.provider?.email ?? q.providerId,
            q.price,
            q.status,
            q.revisionCount,
            q.createdAt.toISOString(),
            q.acceptedAt?.toISOString() ?? '',
            q.confirmedAt?.toISOString() ?? '',
        ]);

        return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    }

    async generateUsersReport(query: DateRangeQueryDto): Promise<string> {
        const qb = this.userRepo
            .createQueryBuilder('u')
            .leftJoinAndSelect('u.profile', 'p')
            .orderBy('u.created_at', 'DESC');

        if (query.from) qb.andWhere('u.created_at >= :from', { from: new Date(query.from) });
        if (query.to) qb.andWhere('u.created_at <= :to', { to: new Date(query.to) });

        const users = await qb.getMany();

        const headers = ['ID', 'Email', 'Phone', 'Role', 'Display Name', 'Full Name', 'Is Active', 'Is Verified', 'Rating', 'Review Count', 'Created At', 'Last Login'];

        const rows = users.map(u => [
            u.id,
            u.email ?? '',
            u.phone ?? '',
            u.role,
            u.profile?.displayName ?? '',
            u.profile?.fullName ?? '',
            u.isActive,
            u.isVerified,
            u.profile?.averageRating ?? '',
            u.profile?.reviewCount ?? 0,
            u.createdAt.toISOString(),
            u.lastLoginAt?.toISOString() ?? '',
        ]);

        return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    }

    async generateRevenueReport(query: DateRangeQueryDto): Promise<string> {
        const orderQb = this.orderRepo
            .createQueryBuilder('o')
            .select("DATE_TRUNC('month', o.created_at)", 'month')
            .addSelect('COUNT(*)', 'orderCount')
            .addSelect('COALESCE(SUM(CASE WHEN o.status = :completed THEN o.total_amount ELSE 0 END), 0)', 'orderRevenue')
            .setParameter('completed', OrderStatus.COMPLETED)
            .groupBy("DATE_TRUNC('month', o.created_at)")
            .orderBy("DATE_TRUNC('month', o.created_at)", 'ASC');

        if (query.from) orderQb.andWhere('o.created_at >= :from', { from: new Date(query.from) });
        if (query.to) orderQb.andWhere('o.created_at <= :to', { to: new Date(query.to) });

        const paymentQb = this.paymentRepo
            .createQueryBuilder('p')
            .select("DATE_TRUNC('month', p.created_at)", 'month')
            .addSelect('COALESCE(SUM(CASE WHEN p.status = :paid THEN p.amount ELSE 0 END), 0)', 'subscriptionRevenue')
            .setParameter('paid', SubscriptionPaymentStatus.PAID)
            .groupBy("DATE_TRUNC('month', p.created_at)")
            .orderBy("DATE_TRUNC('month', p.created_at)", 'ASC');

        if (query.from) paymentQb.andWhere('p.created_at >= :from', { from: new Date(query.from) });
        if (query.to) paymentQb.andWhere('p.created_at <= :to', { to: new Date(query.to) });

        const [orderRows, paymentRows] = await Promise.all([
            orderQb.getRawMany(),
            paymentQb.getRawMany(),
        ]);

        const paymentMap = new Map(
            paymentRows.map(r => [
                new Date(r.month).toISOString().slice(0, 7),
                Number(r.subscriptionRevenue),
            ]),
        );

        const headers = ['Month', 'Order Count', 'Order Revenue (VND)', 'Subscription Revenue (VND)', 'Total Revenue (VND)'];

        const rows = orderRows.map(r => {
            const month = new Date(r.month).toISOString().slice(0, 7);
            const orderRevenue = Number(r.orderRevenue);
            const subRevenue = paymentMap.get(month) ?? 0;
            return [month, r.orderCount, orderRevenue, subRevenue, orderRevenue + subRevenue];
        });

        return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    }
}
