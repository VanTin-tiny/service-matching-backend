import { Injectable } from '@nestjs/common';
import { NotificationType } from '../enums/notification.enum';
import { QuoteNotificationData } from '../interfaces/notification.interface';
import { NotificationCreationService } from './notification-creation.service';

@Injectable()
export class NotificationEventService {
    constructor(
        private readonly creationService: NotificationCreationService,
    ) { }


    async notifyNewQuote(
        customerId: string,
        data: QuoteNotificationData,
    ): Promise<void> {
        await this.creationService.createNotification(
            customerId,
            NotificationType.NEW_QUOTE_RECEIVED,
            'new quote',
            `${data.providerName} sent a quote ${data.price?.toLocaleString('vi-VN')}đ for post "${data.postTitle}"`,
            {
                postId: data.postId,
                quoteId: data.quoteId,
                providerId: data.providerName,
                price: data.price,
            },
            `/posts/${data.postId}/quotes`,
        );
    }


    async notifyQuoteAccepted(
        providerId: string,
        data: QuoteNotificationData,
    ): Promise<void> {
        await this.creationService.createNotification(
            providerId,
            NotificationType.QUOTE_ACCEPTED,
            'Quote accepted',
            `Happy! Your quote for "${data.postTitle}" has been accepted`,
            {
                postId: data.postId,
                quoteId: data.quoteId,
            },
            `/quotes/${data.quoteId}`,
        );
    }


    async notifyQuoteRejected(
        providerId: string,
        data: QuoteNotificationData,
    ): Promise<void> {
        const reasonText = data.reason ? `: ${data.reason}` : '';

        await this.creationService.createNotification(
            providerId,
            NotificationType.QUOTE_REJECTED,
            'Quote was rejected',
            `Your quote for "${data.postTitle}" has been rejected${reasonText}`,
            {
                postId: data.postId,
                quoteId: data.quoteId,
                reason: data.reason,
            },
            `/quotes/${data.quoteId}`,
        );
    }


    async notifyPostClosed(
        providerIds: string[],
        postTitle: string,
        postId: string,
    ): Promise<void> {
        await this.creationService.createBulkNotifications(
            providerIds,
            NotificationType.POST_CLOSED,
            'Post is closed',
            `Post "${postTitle}" you bid on has been closed.`,
            { postId },
            `/posts/${postId}`,
        );
    }


    async notifyOrderCreated(
        providerId: string,
        customerId: string,
        orderId: string,
        orderTitle: string,
    ): Promise<void> {
        await this.creationService.createNotification(
            providerId,
            NotificationType.ORDER_CREATED,
            'new order',
            `you have new order: "${orderTitle}"`,
            { orderId },
            `/orders/${orderId}`,
        );


        await this.creationService.createNotification(
            customerId,
            NotificationType.ORDER_CREATED,
            'Order has been created',
            `Order "${orderTitle}" was created successfully`,
            { orderId },
            `/orders/${orderId}`,
        );
    }


    async notifyOrderCompleted(
        userId: string,
        orderId: string,
        orderTitle: string,
    ): Promise<void> {
        await this.creationService.createNotification(
            userId,
            NotificationType.ORDER_COMPLETED,
            'Order completed',
            `Order "${orderTitle}" completed`,
            { orderId },
            `/orders/${orderId}`,
        );
    }


    async notifyNewReview(
        providerId: string,
        reviewId: string,
        rating: number,
        customerName: string,
    ): Promise<void> {
        await this.creationService.createNotification(
            providerId,
            NotificationType.NEW_REVIEW_RECEIVED,
            'New review',
            `${customerName} rated you ${rating} star`,
            { reviewId, rating },
            `/reviews/${reviewId}`,
        );
    }


    async notifyNewMessage(
        userId: string,
        senderId: string,
        senderName: string,
        messagePreview: string,
        chatId: string,
    ): Promise<void> {
        await this.creationService.createNotification(
            userId,
            NotificationType.NEW_MESSAGE,
            'New message',
            `${senderName}: ${messagePreview}`,
            { senderId, chatId },
            `/chats/${chatId}`,
        );
    }


    async notifySystem(
        userIds: string[],
        title: string,
        message: string,
        metadata?: Record<string, any>,
    ): Promise<void> {
        await this.creationService.createBulkNotifications(
            userIds,
            NotificationType.SYSTEM_ANNOUNCEMENT,
            title,
            message,
            metadata,
        );
    }
}