
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
        await this.creationService.createNotification({
            userId: customerId,
            type: NotificationType.NEW_QUOTE_RECEIVED,
            title: 'Báo giá mới',
            message: `${data.providerName} đã gửi báo giá ${data.price?.toLocaleString('vi-VN')}đ cho bài đăng "${data.postTitle}"`,
            metadata: {
                postId: data.postId,
                quoteId: data.quoteId,
                providerId: data.providerName,
                price: data.price,
            },
            actionUrl: `/posts/${data.postId}/quotes`,
        });
    }

    async notifyQuoteAccepted(
        providerId: string,
        data: QuoteNotificationData,
    ): Promise<void> {
        await this.creationService.createNotification({
            userId: providerId,
            type: NotificationType.QUOTE_ACCEPTED,
            title: 'Báo giá được chấp nhận',
            message: `Chúc mừng! Báo giá của bạn cho bài "${data.postTitle}" đã được chấp nhận`,
            metadata: {
                postId: data.postId,
                quoteId: data.quoteId,
            },
            actionUrl: `/quotes/${data.quoteId}`,
        });
    }

    async notifyQuoteRejected(
        providerId: string,
        data: QuoteNotificationData,
    ): Promise<void> {
        const reasonText = data.reason ? `. Lý do: ${data.reason}` : '';

        await this.creationService.createNotification({
            userId: providerId,
            type: NotificationType.QUOTE_REJECTED,
            title: 'Báo giá bị từ chối',
            message: `Báo giá của bạn cho bài "${data.postTitle}" đã bị từ chối${reasonText}`,
            metadata: {
                postId: data.postId,
                quoteId: data.quoteId,
                reason: data.reason,
            },
            actionUrl: `/quotes/${data.quoteId}`,
        });
    }

    async notifyPostClosed(
        providerIds: string[],
        postTitle: string,
        postId: string,
    ): Promise<void> {
        await Promise.all(
            providerIds.map(providerId =>
                this.creationService.createNotification({
                    userId: providerId,
                    type: NotificationType.POST_CLOSED,
                    title: 'Bài đăng đã đóng',
                    message: `Bài đăng "${postTitle}" bạn đã báo giá đã được đóng.`,
                    metadata: { postId },
                    actionUrl: `/posts/${postId}`,
                })
            )
        );
    }

    async notifyOrderCreated(
        providerId: string,
        customerId: string,
        orderId: string,
        orderTitle: string,
    ): Promise<void> {
        await this.creationService.createNotification({
            userId: providerId,
            type: NotificationType.ORDER_CREATED,
            title: 'Đơn hàng mới',
            message: `Bạn có đơn hàng mới: "${orderTitle}"`,
            metadata: { orderId },
            actionUrl: `/orders/${orderId}`,
        });

        await this.creationService.createNotification({
            userId: customerId,
            type: NotificationType.ORDER_CREATED,
            title: 'Đơn hàng đã được tạo',
            message: `Đơn hàng "${orderTitle}" đã được tạo thành công`,
            metadata: { orderId },
            actionUrl: `/orders/${orderId}`,
        });
    }

    async notifyOrderInProgress(
        customerId: string,
        orderId: string,
        orderTitle: string,
    ): Promise<void> {
        await this.creationService.createNotification({
            userId: customerId,
            type: NotificationType.ORDER_IN_PROGRESS,
            title: 'Đơn hàng đang thực hiện',
            message: `Thợ đã bắt đầu thực hiện đơn hàng: "${orderTitle}"`,
            metadata: { orderId },
            actionUrl: `/orders/${orderId}`,
        });
    }

    async notifyProviderCompleted(
        customerId: string,
        orderId: string,
        orderTitle: string,
    ): Promise<void> {
        await this.creationService.createNotification({
            userId: customerId,
            type: NotificationType.ORDER_IN_PROGRESS,
            title: 'Thợ đã hoàn thành công việc',
            message: `Thợ đã hoàn thành đơn hàng: "${orderTitle}". Vui lòng xác nhận!`,
            metadata: { orderId },
            actionUrl: `/orders/${orderId}`,
        });
    }

    async notifyOrderCompleted(
        userId: string,
        orderId: string,
        orderTitle: string,
        isProvider: boolean,
    ): Promise<void> {
        const message = isProvider
            ? `Đơn hàng "${orderTitle}" đã hoàn thành. Vui lòng chờ thanh toán.`
            : `Đơn hàng "${orderTitle}" đã hoàn thành. Cảm ơn bạn đã sử dụng dịch vụ!`;

        await this.creationService.createNotification({
            userId,
            type: NotificationType.ORDER_COMPLETED,
            title: 'Đơn hàng hoàn thành',
            message,
            metadata: { orderId, isProvider },
            actionUrl: `/orders/${orderId}`,
        });
    }

    async notifyOrderCancelled(
        userId: string,
        orderId: string,
        orderTitle: string,
        reason: string,
    ): Promise<void> {
        await this.creationService.createNotification({
            userId,
            type: NotificationType.ORDER_CANCELLED,
            title: 'Đơn hàng đã bị hủy',
            message: `Đơn hàng "${orderTitle}" đã bị hủy. Lý do: ${reason}`,
            metadata: { orderId, reason },
            actionUrl: `/orders/${orderId}`,
        });
    }

    async notifyPaymentReceived(
        providerId: string,
        amount: number,
        orderId: string,
    ): Promise<void> {
        await this.creationService.createNotification({
            userId: providerId,
            type: NotificationType.PAYMENT_RECEIVED,
            title: 'Đã nhận thanh toán',
            message: `Bạn đã nhận được thanh toán ${amount.toLocaleString('vi-VN')}đ`,
            metadata: { orderId, amount },
            actionUrl: `/orders/${orderId}`,
        });
    }

    async notifyOrderAwaitingConfirmation(
        providerId: string,
        customerId: string,
        orderId: string,
        orderTitle: string,
    ): Promise<void> {
        await this.creationService.createNotification({
            userId: providerId,
            type: NotificationType.ORDER_AWAITING_CONFIRMATION,
            title: 'Cần xác nhận đơn hàng',
            message: `Khách hàng đã chấp nhận báo giá của bạn cho "${orderTitle}". Vui lòng xác nhận để tiến hành.`,
            metadata: { orderId },
            actionUrl: `/orders/${orderId}`,
        });

        await this.creationService.createNotification({
            userId: customerId,
            type: NotificationType.ORDER_CREATED,
            title: 'Đơn hàng đã tạo – chờ thợ xác nhận',
            message: `Đơn hàng "${orderTitle}" đã được tạo và đang chờ thợ xác nhận.`,
            metadata: { orderId },
            actionUrl: `/orders/${orderId}`,
        });
    }

    async notifyProviderDeclinedOrder(
        customerId: string,
        orderId: string,
        orderTitle: string,
        reason?: string,
    ): Promise<void> {
        const reasonSuffix = reason ? ` Lý do: ${reason}` : '';
        await this.creationService.createNotification({
            userId: customerId,
            type: NotificationType.ORDER_CANCELLED,
            title: 'Thợ đã từ chối đơn hàng',
            message: `Thợ đã từ chối xác nhận đơn hàng "${orderTitle}".${reasonSuffix} Bạn có thể liên hệ thợ khác.`,
            metadata: { orderId, reason },
            actionUrl: `/orders/${orderId}`,
        });
    }

    async notifyNewReview(
        providerId: string,
        reviewId: string,
        rating: number,
        customerName: string,
    ): Promise<void> {
        await this.creationService.createNotification({
            userId: providerId,
            type: NotificationType.NEW_REVIEW_RECEIVED,
            title: 'Đánh giá mới',
            message: `${customerName} đã đánh giá bạn ${rating} sao`,
            metadata: { reviewId, rating },
            actionUrl: `/reviews/${reviewId}`,
        });
    }

    async notifyNewMessage(
        userId: string,
        senderId: string,
        senderName: string,
        messagePreview: string,
        chatId: string,
    ): Promise<void> {
        await this.creationService.createNotification({
            userId,
            type: NotificationType.NEW_MESSAGE,
            title: 'Tin nhắn mới',
            message: `${senderName}: ${messagePreview}`,
            metadata: { senderId, chatId },
            actionUrl: `/chats/${chatId}`,
        });
    }

    async notifySystem(
        userIds: string[],
        title: string,
        message: string,
        metadata?: Record<string, any>,
    ): Promise<void> {
        await Promise.all(
            userIds.map(userId =>
                this.creationService.createNotification({
                    userId,
                    type: NotificationType.SYSTEM_ANNOUNCEMENT,
                    title,
                    message,
                    metadata,
                })
            )
        );
    }
}