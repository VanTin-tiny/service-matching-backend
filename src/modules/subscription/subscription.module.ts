import { NotificationsModule } from '@/modules/notifications/notifications.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubscriptionAdminController } from './controllers/subscription-admin.controller';
import { SubscriptionController } from './controllers/subscription.controller';
import { Discount } from './entities/discount.entity';
import { SubscriptionPayment } from './entities/subscription-payment.entity';
import { SubscriptionPlan } from './entities/subscription-plan.entity';
import { Subscription } from './entities/subscription.entity';
import { SubscriptionActiveGuard } from './guards/subscription-active.guard';
import { DiscountRepository } from './repositories/discount.repository';
import { SubscriptionPaymentRepository } from './repositories/subscription-payment.repository';
import { SubscriptionPlanRepository } from './repositories/subscription-plan.repository';
import { SubscriptionRepository } from './repositories/subscription.repository';
import { DiscountService } from './services/discount.service';
import { SubscriptionNotificationService } from './services/subscription-notification.service';
import { SubscriptionPaymentService } from './services/subscription-payment.service';
import { SubscriptionPlanService } from './services/subscription-plan.service';
import { SubscriptionService } from './services/subscription.service';
import { SubscriptionSchedulerTask } from './tasks/subscription-scheduler.task';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Subscription,
            SubscriptionPlan,
            Discount,
            SubscriptionPayment,
        ]),
        NotificationsModule,
    ],
    controllers: [
        SubscriptionController,
        SubscriptionAdminController,
    ],
    providers: [
        // Repositories
        SubscriptionRepository,
        SubscriptionPlanRepository,
        DiscountRepository,
        SubscriptionPaymentRepository,

        // Services
        SubscriptionService,
        SubscriptionPlanService,
        DiscountService,
        SubscriptionPaymentService,
        SubscriptionNotificationService,

        // Guard (exported so other modules can apply it)
        SubscriptionActiveGuard,

        // Scheduled tasks
        SubscriptionSchedulerTask,
    ],
    exports: [
        SubscriptionService,
        SubscriptionRepository,
        SubscriptionActiveGuard,
    ],
})
export class SubscriptionModule {}
