import { Injectable } from '@nestjs/common';
import { Notification } from './entities/notification.entity';
import { QuoteNotificationData } from './interfaces/notification.interface';
import { NotificationActionService } from './services/notification-action.service';
import { NotificationCreationService } from './services/notification-creation.service';
import { NotificationEventService } from './services/notification-event.service';
import { NotificationQueryService } from './services/notification-query.service';

@Injectable()
export class NotificationService {
    constructor(
        private readonly queryService: NotificationQueryService,
        private readonly creationService: NotificationCreationService,
        private readonly actionService: NotificationActionService,
        private readonly eventService: NotificationEventService,
    ) { }

    
    async notifyNewQuote(
        customerId: string,
        data: QuoteNotificationData,
    ): Promise<void> {
        await this.eventService.notifyNewQuote(customerId, data);
    }

    
    async notifyQuoteAccepted(
        providerId: string,
        data: QuoteNotificationData,
    ): Promise<void> {
        await this.eventService.notifyQuoteAccepted(providerId, data);
    }

   
    async notifyQuoteRejected(
        providerId: string,
        data: QuoteNotificationData,
    ): Promise<void> {
        await this.eventService.notifyQuoteRejected(providerId, data);
    }

   
    async notifyPostClosed(
        providerIds: string[],
        postTitle: string,
        postId: string,
    ): Promise<void> {
        await this.eventService.notifyPostClosed(providerIds, postTitle, postId);
    }

   
    async notifyOrderCreated(
        providerId: string,
        customerId: string,
        orderId: string,
        orderTitle: string,
    ): Promise<void> {
        await this.eventService.notifyOrderCreated(
            providerId,
            customerId,
            orderId,
            orderTitle,
        );
    }

    
    async notifyOrderCompleted(
        userId: string,
        orderId: string,
        orderTitle: string,
    ): Promise<void> {
        await this.eventService.notifyOrderCompleted(userId, orderId, orderTitle);
    }

   
    async notifyNewReview(
        providerId: string,
        reviewId: string,
        rating: number,
        customerName: string,
    ): Promise<void> {
        await this.eventService.notifyNewReview(
            providerId,
            reviewId,
            rating,
            customerName,
        );
    }

    
    async notifyNewMessage(
        userId: string,
        senderId: string,
        senderName: string,
        messagePreview: string,
        chatId: string,
    ): Promise<void> {
        await this.eventService.notifyNewMessage(
            userId,
            senderId,
            senderName,
            messagePreview,
            chatId,
        );
    }

    
    async notifySystem(
        userIds: string[],
        title: string,
        message: string,
        metadata?: Record<string, any>,
    ): Promise<void> {
        await this.eventService.notifySystem(userIds, title, message, metadata);
    }

    
    async getUserNotifications(
        userId: string,
        page: number = 1,
        limit: number = 20,
        unreadOnly: boolean = false,
    ): Promise<{
        notifications: Notification[];
        total: number;
        unreadCount: number;
    }> {
        return await this.queryService.getUserNotifications(
            userId,
            page,
            limit,
            unreadOnly,
        );
    }

    
    async getUnreadCount(userId: string): Promise<number> {
        return await this.queryService.getUnreadCount(userId);
    }

    
    async markAsRead(notificationId: string, userId: string): Promise<void> {
        await this.actionService.markAsRead(notificationId, userId);
    }

    
    async markAllAsRead(userId: string): Promise<void> {
        await this.actionService.markAllAsRead(userId);
    }

    
    async deleteNotification(
        notificationId: string,
        userId: string,
    ): Promise<void> {
        await this.actionService.deleteNotification(notificationId, userId);
    }

    
    async deleteReadNotifications(userId: string): Promise<void> {
        await this.actionService.deleteReadNotifications(userId);
    }
}