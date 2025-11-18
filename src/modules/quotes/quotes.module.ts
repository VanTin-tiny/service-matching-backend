import { NotificationsModule } from '@/modules/notifications/notifications.module';
import { PostCustomer } from '@/modules/posts/entities/post.entity';
import { PostsModule } from '@/modules/posts/posts.module';
import { User } from '@/modules/users/entities/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quote } from './entities/quote.entity';
import { QuoteController } from './quote.controller';
import { QuoteService } from './quote.service';
import { QuoteRepository } from './repositories/quote.repository';
import { QuoteNotificationService } from './services/quote-notification.service';
import { QuoteQueryService } from './services/quote-query.service';
import { QuoteStatusService } from './services/quote-status.service';
import { QuoteValidationService } from './services/quote-validation.service';
import { UsersModule } from '@/modules/users/users.module';


@Module({
    imports: [
        TypeOrmModule.forFeature([Quote, PostCustomer, User]),
        NotificationsModule,
        PostsModule,
        UsersModule
    ],
    controllers: [QuoteController],
    providers: [
        QuoteRepository,
        QuoteService,
        QuoteValidationService,
        QuoteStatusService,
        QuoteQueryService,
        QuoteNotificationService,
    ],
    exports: [QuoteService],
})
export class QuoteModule { }