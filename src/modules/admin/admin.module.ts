import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/modules/users/entities/user.entity';
import { Order } from '@/modules/orders/entities/order.entity';
import { Quote } from '@/modules/quotes/entities/quote.entity';
import { Profile } from '@/modules/profile/entities/profile.entity';
import { Subscription } from '@/modules/subscription/entities/subscription.entity';
import { SubscriptionPayment } from '@/modules/subscription/entities/subscription-payment.entity';
import { UserReport } from './entities/user-report.entity';
import { AdminStatsController } from './controllers/admin-stats.controller';
import { AdminUsersController } from './controllers/admin-users.controller';
import { AdminReportsController } from './controllers/admin-reports.controller';
import { AdminViolationsController } from './controllers/admin-violations.controller';
import { AdminStatsService } from './services/admin-stats.service';
import { AdminUsersService } from './services/admin-users.service';
import { AdminReportsService } from './services/admin-reports.service';
import { AdminViolationsService } from './services/admin-violations.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            User,
            Order,
            Quote,
            Profile,
            Subscription,
            SubscriptionPayment,
            UserReport,
        ]),
    ],
    controllers: [
        AdminStatsController,
        AdminUsersController,
        AdminReportsController,
        AdminViolationsController,
    ],
    providers: [
        AdminStatsService,
        AdminUsersService,
        AdminReportsService,
        AdminViolationsService,
    ],
})
export class AdminModule {}
