import { NotificationService } from '@/modules/notifications/notification.service';
import { PostCustomer } from '@/modules/posts/entities/post.entity';
import { User } from '@/modules/users/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { Quote } from '../entities/quote.entity';

@Injectable()
export class QuoteNotificationService {
    constructor(
        private readonly notificationService: NotificationService,
    ) { }

    
    async notifyNewQuote(
        customerId: string,
        quote: Quote,
        provider: User,
        post: PostCustomer,
    ): Promise<void> {
        await this.notificationService.notifyNewQuote(customerId, {
            postId: post.id,
            quoteId: quote.id,
            providerName: provider.displayName || provider.fullName || 'Thợ',
            price: quote.price,
            postTitle: post.title,
        });
    }

    
    async notifyQuoteAccepted(
        quote: Quote,
        customerId: string,
    ): Promise<void> {
        await this.notificationService.notifyQuoteAccepted(quote.providerId, {
            quoteId: quote.id,
            postId: quote.postId,
            postTitle: quote.post.title,
            customerName: customerId, 
        });
    }

   
    async notifyQuoteRejected(quote: Quote, reason?: string): Promise<void> {
        await this.notificationService.notifyQuoteRejected(quote.providerId, {
            quoteId: quote.id,
            postId: quote.postId,
            postTitle: quote.post.title,
            reason,
        });
    }
}