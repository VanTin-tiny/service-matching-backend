import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Notification } from '../entities/notification.entity';
import { NotificationType } from '../enums/notification.enum';
import { NotificationRepository } from '../repositories/notification.repository';

@Injectable()
export class NotificationCreationService {
    constructor(
        private readonly notificationRepo: NotificationRepository,
        private readonly eventEmitter: EventEmitter2,
    ) { }

    
    async createNotification(
        userId: string,
        type: NotificationType,
        title: string,
        message: string,
        metadata?: Record<string, any>,
        actionUrl?: string,
    ): Promise<Notification> {
        const notification = this.notificationRepo.create({
            userId,
            type,
            title,
            message,
            metadata,
            actionUrl,
            isRead: false,
        });

        const saved = await this.notificationRepo.save(notification);

        //event for realtime(WebSocket)
        this.eventEmitter.emit('notification.created', {
            userId,
            notification: saved,
        });

        return saved;
    }

    
    async createBulkNotifications(
        userIds: string[],
        type: NotificationType,
        title: string,
        message: string,
        metadata?: Record<string, any>,
        actionUrl?: string,
    ): Promise<void> {
        const notifications = userIds.map((userId) =>
            this.createNotification(userId, type, title, message, metadata, actionUrl),
        );

        await Promise.all(notifications);
    }
}