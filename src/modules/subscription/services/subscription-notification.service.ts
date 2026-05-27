import { NotificationCreationService } from '@/modules/notifications/services/notification-creation.service';
import { NotificationType } from '@/modules/notifications/enums/notification.enum';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SubscriptionNotificationService {
    private readonly logger = new Logger(SubscriptionNotificationService.name);

    constructor(private readonly notificationCreation: NotificationCreationService) {}

    async notifyTrialStarted(userId: string, trialEndDate: Date): Promise<void> {
        const endDateStr = trialEndDate.toLocaleDateString('vi-VN');
        await this.notificationCreation.createNotification({
            userId,
            type: NotificationType.SUBSCRIPTION_TRIAL_STARTED,
            title: 'Dùng thử miễn phí đã bắt đầu',
            message: `Chào mừng! Bạn có 30 ngày dùng thử miễn phí đến ${endDateStr}. Khám phá tất cả tính năng và đăng ký trước khi hết hạn.`,
            metadata: { trialEndDate: trialEndDate.toISOString() },
            actionUrl: '/subscription/plans',
        });
    }

    async notifyTrialEndingSoon(userId: string, daysLeft: number, trialEndDate: Date): Promise<void> {
        const endDateStr = trialEndDate.toLocaleDateString('vi-VN');
        await this.notificationCreation.createNotification({
            userId,
            type: NotificationType.SUBSCRIPTION_TRIAL_ENDING,
            title: `Dùng thử sắp hết hạn trong ${daysLeft} ngày`,
            message: `Dùng thử miễn phí của bạn sẽ hết hạn vào ${endDateStr}. Đăng ký ngay để tiếp tục sử dụng không gián đoạn.`,
            metadata: { daysLeft, trialEndDate: trialEndDate.toISOString() },
            actionUrl: '/subscription/plans',
        });
    }

    async notifyTrialExpired(userId: string): Promise<void> {
        await this.notificationCreation.createNotification({
            userId,
            type: NotificationType.SUBSCRIPTION_TRIAL_EXPIRED,
            title: 'Dùng thử miễn phí đã hết hạn',
            message: '30 ngày dùng thử miễn phí đã kết thúc. Đăng ký gói để tiếp tục nhận việc và sử dụng nền tảng.',
            metadata: {},
            actionUrl: '/subscription/plans',
        });
    }

    async notifySubscriptionActivated(userId: string, planName: string, periodEnd: Date): Promise<void> {
        const endDateStr = periodEnd.toLocaleDateString('vi-VN');
        await this.notificationCreation.createNotification({
            userId,
            type: NotificationType.SUBSCRIPTION_ACTIVATED,
            title: 'Đăng ký đã được kích hoạt',
            message: `Gói đăng ký "${planName}" của bạn đã được kích hoạt đến ${endDateStr}. Cảm ơn bạn!`,
            metadata: { planName, periodEnd: periodEnd.toISOString() },
            actionUrl: '/subscription',
        });
    }

    async notifyRenewalReminder(userId: string, daysLeft: number, periodEnd: Date, planName: string): Promise<void> {
        const endDateStr = periodEnd.toLocaleDateString('vi-VN');
        await this.notificationCreation.createNotification({
            userId,
            type: NotificationType.SUBSCRIPTION_RENEWAL_REMINDER,
            title: `Gói đăng ký sắp hết hạn trong ${daysLeft} ngày`,
            message: `Gói đăng ký "${planName}" sẽ hết hạn vào ${endDateStr}. Gia hạn ngay để tránh gián đoạn dịch vụ.`,
            metadata: { daysLeft, periodEnd: periodEnd.toISOString(), planName },
            actionUrl: '/subscription/renew',
        });
    }

    async notifySubscriptionExpired(userId: string): Promise<void> {
        await this.notificationCreation.createNotification({
            userId,
            type: NotificationType.SUBSCRIPTION_EXPIRED,
            title: 'Gói đăng ký đã hết hạn',
            message: 'Gói đăng ký của bạn đã hết hạn. Gia hạn ngay để tiếp tục nhận việc và sử dụng đầy đủ tính năng nền tảng.',
            metadata: {},
            actionUrl: '/subscription/plans',
        });
    }

    async notifySubscriptionCancelled(userId: string, planName: string): Promise<void> {
        await this.notificationCreation.createNotification({
            userId,
            type: NotificationType.SUBSCRIPTION_CANCELLED,
            title: 'Gói đăng ký đã bị hủy',
            message: `Gói đăng ký "${planName}" của bạn đã bị hủy. Bạn có thể đăng ký lại bất cứ lúc nào.`,
            metadata: { planName },
            actionUrl: '/subscription/plans',
        });
    }

    async notifyPaymentPending(userId: string, finalAmount: number, planName: string, dueDate: Date): Promise<void> {
        const dueDateStr = dueDate.toLocaleDateString('vi-VN');
        await this.notificationCreation.createNotification({
            userId,
            type: NotificationType.SUBSCRIPTION_PAYMENT_PENDING,
            title: 'Thanh toán đang chờ xác nhận',
            message: `Thanh toán ${finalAmount.toLocaleString('vi-VN')}đ cho gói "${planName}" đang chờ admin phê duyệt. Ngày hết hạn: ${dueDateStr}.`,
            metadata: { finalAmount, planName, dueDate: dueDate.toISOString() },
            actionUrl: '/subscription/payments',
        });
    }

    async notifyPaymentConfirmed(userId: string, finalAmount: number, planName: string): Promise<void> {
        await this.notificationCreation.createNotification({
            userId,
            type: NotificationType.SUBSCRIPTION_PAYMENT_SUCCESS,
            title: 'Thanh toán đã được xác nhận',
            message: `Thanh toán ${finalAmount.toLocaleString('vi-VN')}đ cho gói "${planName}" đã được xác nhận. Gói đăng ký của bạn đã được kích hoạt.`,
            metadata: { finalAmount, planName },
            actionUrl: '/subscription',
        });
    }
}
