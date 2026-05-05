
import { NotificationService } from '@/modules/notifications/notification.service';
import { Quote } from '@/modules/quotes/entities/quote.entity';
import { QuoteStatus } from '@/modules/quotes/enums/quote-status.enum';
import {
    BadRequestException,
    ForbiddenException,
    Injectable,
    Logger,
    NotFoundException,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
    GetMessagesQueryDto,
    SendMessageDto
} from './dtos/chat.dto';
import { Conversation, ConversationType } from './entities/conversation.entity';
import { Message, MessageType } from './entities/message.entity';

@Injectable()
export class ChatService {
    private readonly logger = new Logger(ChatService.name);

    // Sentinel UUID for system-generated messages (not a real user)
    private readonly SYSTEM_USER_ID = '00000000-0000-0000-0000-000000000001';

    constructor(
        @InjectRepository(Conversation)
        private readonly conversationRepo: Repository<Conversation>,
        @InjectRepository(Message)
        private readonly messageRepo: Repository<Message>,
        @InjectRepository(Quote)
        private readonly quoteRepo: Repository<Quote>,
        private readonly notificationService: NotificationService,
        private readonly eventEmitter: EventEmitter2,
    ) { }

    // ============ CONVERSATION CREATION ============

    async createConversationFromQuote(quoteId: string): Promise<Conversation> {
        const quote = await this.quoteRepo.findOne({
            where: { id: quoteId },
            relations: ['post', 'post.customer', 'provider', 'customRequest'],
        });

        if (!quote) {
            throw new NotFoundException('Quote not found');
        }

        if (quote.status !== QuoteStatus.ACCEPTED_FOR_CHAT) {
            throw new BadRequestException(
                'Quote must be accepted for chat first. Current status: ' + quote.status
            );
        }

        const existing = await this.conversationRepo.findOne({
            where: { quoteId },
        });

        if (existing) {
            this.logger.log(`Conversation already exists for quote ${quoteId}`);
            return existing;
        }

        // Determine customerId: from post (public quote) or custom request (direct request quote)
        const customerId = quote.post?.customerId ?? quote.customRequest?.customerId;
        if (!customerId) {
            throw new BadRequestException('Cannot determine customer for this quote');
        }

        const isDirectRequest = !!quote.customRequestId;
        const conversation = this.conversationRepo.create({
            customerId,
            providerId: quote.providerId,
            quoteId,
            type: isDirectRequest ? ConversationType.DIRECT_REQUEST : ConversationType.QUOTE_BASED,
            isActive: true,
        });

        const saved = await this.conversationRepo.save(conversation);

        const contextTitle = isDirectRequest
            ? (quote.customRequest?.title || 'Yêu cầu riêng')
            : (quote.post?.title || 'Bài đăng');

        await this.sendSystemMessage(
            saved.id,
            `Cuộc trò chuyện bắt đầu từ báo giá được chấp nhận.\n` +
            `Yêu cầu: ${contextTitle}\n` +
            `Giá hiện tại: ${parseFloat(quote.price.toString()).toLocaleString('vi-VN')}đ\n` +
            `Thời gian ước tính: ${quote.estimatedDuration || 'Chưa xác định'} phút`
        );

        this.logger.log(`Conversation created from quote: ${saved.id} (type: ${conversation.type})`);
        return saved;
    }

    async createDirectConversation(
        customerId: string,
        providerId: string
    ): Promise<Conversation> {
        if (customerId === providerId) {
            throw new BadRequestException('Cannot create conversation with yourself');
        }

        const existing = await this.conversationRepo.findOne({
            where: {
                customerId,
                providerId,
                type: ConversationType.DIRECT_REQUEST,
            },
        });

        if (existing) {
            this.logger.log(`Direct conversation already exists: ${existing.id}`);
            return existing;
        }

        const conversation = this.conversationRepo.create({
            customerId,
            providerId,
            type: ConversationType.DIRECT_REQUEST,
            isActive: true,
        });

        const saved = await this.conversationRepo.save(conversation);

        // sendSystemMessage handles message creation, lastMessageAt update, and event emission
        await this.sendSystemMessage(
            saved.id,
            'Cuộc trò chuyện đã được tạo. Hãy thảo luận về yêu cầu dịch vụ của bạn.',
        );

        // Notify provider of the new conversation
        await this.notificationService.notifyNewMessage(
            providerId,
            customerId,
            'Khách hàng',
            'Cuộc trò chuyện mới đã được tạo',
            saved.id,
        );

        this.logger.log(`Direct conversation created: ${saved.id}`);
        return saved;
    }

    async createOrderConversation(
        orderId: string,
        customerId: string,
        providerId: string,
        orderTitle: string,
    ): Promise<Conversation> {
        const existing = await this.conversationRepo.findOne({
            where: { orderId },
        });

        if (existing) {
            this.logger.log(`Order conversation already exists for order ${orderId}`);
            return existing;
        }

        const conversation = this.conversationRepo.create({
            customerId,
            providerId,
            orderId,
            type: ConversationType.ORDER_CHAT,
            isActive: true,
        });

        const saved = await this.conversationRepo.save(conversation);

        await this.sendSystemMessage(
            saved.id,
            `Đơn hàng "${orderTitle}" đã hoàn thành!\n` +
            `Bạn có thể dùng cuộc trò chuyện này để liên lạc thêm, trao đổi về bảo hành, hoặc đánh giá dịch vụ.`,
        );

        this.logger.log(`Order conversation created: ${saved.id} for order ${orderId}`);
        return saved;
    }

    // ============ MESSAGING ============

    async sendMessage(
        conversationId: string,
        senderId: string,
        dto: SendMessageDto
    ): Promise<Message> {
        // Load profile relations so sendMessageNotification can read the sender's display name
        const conversation = await this.conversationRepo.findOne({
            where: { id: conversationId },
            relations: ['customer', 'customer.profile', 'provider', 'provider.profile'],
        });

        if (!conversation) {
            throw new NotFoundException('Conversation not found');
        }

        if (!conversation.isParticipant(senderId)) {
            throw new ForbiddenException('You are not a participant in this conversation');
        }

        if (!conversation.isActive) {
            throw new BadRequestException('Conversation is closed');
        }

        this.validateMessageContent(dto);

        const message = this.messageRepo.create({
            conversationId,
            senderId,
            type: dto.type,
            content: dto.content?.trim(),
            fileUrls: dto.fileUrls || [],
            fileNames: dto.fileNames,
            isRead: false,
        });

        const saved = await this.messageRepo.save(message);

        await this.updateConversationAfterMessage(conversation, saved, senderId);

        this.eventEmitter.emit('message.sent', {
            conversationId,
            message: saved,
            receiverId: conversation.getOtherUserId(senderId),
        });

        await this.sendMessageNotification(conversation, saved, senderId);

        return saved;
    }

    async sendSystemMessage(
        conversationId: string,
        content: string
    ): Promise<Message> {
        const message = this.messageRepo.create({
            conversationId,
            senderId: this.SYSTEM_USER_ID,
            type: MessageType.SYSTEM,
            content,
            isRead: true,
        });

        const saved = await this.messageRepo.save(message);

        await this.conversationRepo.update(conversationId, {
            lastMessageAt: new Date(),
            lastMessagePreview: content,
        });

        this.eventEmitter.emit('system.message.sent', {
            conversationId,
            message: saved,
        });

        return saved;
    }

    // ============ QUERIES ============

    /**
     * Lightweight query used by the WebSocket gateway to join conversation rooms on connect.
     * Returns only IDs — no relation loading.
     */
    async getConversationIds(userId: string): Promise<string[]> {
        const rows = await this.conversationRepo.find({
            select: { id: true },
            where: [{ customerId: userId }, { providerId: userId }],
        });
        return rows.map(r => r.id);
    }

    async getUserConversations(
        userId: string,
        page: number = 1,
        limit: number = 20,
    ): Promise<{ conversations: Conversation[]; total: number }> {
        const [conversations, total] = await this.conversationRepo.findAndCount({
            where: [{ customerId: userId }, { providerId: userId }],
            // Omit 'quote' — list view doesn't need the full quote entity; quoteId column is enough
            relations: ['customer', 'customer.profile', 'provider', 'provider.profile'],
            order: { lastMessageAt: 'DESC' },
            skip: (page - 1) * limit,
            take: limit,
        });
        return { conversations, total };
    }

    async getConversationById(
        conversationId: string,
        userId: string
    ): Promise<Conversation> {
        const conversation = await this.conversationRepo.findOne({
            where: { id: conversationId },
            relations: ['customer', 'customer.profile', 'provider', 'provider.profile', 'quote'],
        });

        if (!conversation) {
            throw new NotFoundException('Conversation not found');
        }

        if (!conversation.isParticipant(userId)) {
            throw new ForbiddenException('You are not a participant in this conversation');
        }

        return conversation;
    }

    async getMessages(
        conversationId: string,
        userId: string,
        query: GetMessagesQueryDto
    ): Promise<{ messages: Message[]; hasMore: boolean }> {
        const conversation = await this.conversationRepo.findOne({
            where: { id: conversationId },
        });

        if (!conversation) {
            throw new NotFoundException('Conversation not found');
        }

        if (!conversation.isParticipant(userId)) {
            throw new ForbiddenException('You are not a participant in this conversation');
        }

        const limit = Math.min(query.limit || 50, 100);
        const queryBuilder = this.messageRepo
            .createQueryBuilder('message')
            .where('message.conversation_id = :conversationId', { conversationId })
            .orderBy('message.created_at', 'DESC')
            .limit(limit + 1);

        if (query.before) {
            queryBuilder.andWhere('message.created_at < :before', {
                before: new Date(query.before),
            });
        }

        const messages = await queryBuilder
            .leftJoinAndSelect('message.sender', 'sender')
            .leftJoinAndSelect('sender.profile', 'profile')
            .getMany();

        const hasMore = messages.length > limit;
        if (hasMore) {
            messages.pop();
        }

        return {
            messages: messages.reverse(),
            hasMore,
        };
    }

    async markMessagesAsRead(
        conversationId: string,
        userId: string
    ): Promise<void> {
        const conversation = await this.conversationRepo.findOne({
            where: { id: conversationId },
        });

        if (!conversation) {
            throw new NotFoundException('Conversation not found');
        }

        if (!conversation.isParticipant(userId)) {
            throw new ForbiddenException('You are not a participant in this conversation');
        }

        // Mark messages sent by the OTHER participant as read (exclude system messages)
        await this.messageRepo
            .createQueryBuilder()
            .update(Message)
            .set({ isRead: true, readAt: new Date() })
            .where('conversation_id = :conversationId', { conversationId })
            .andWhere('sender_id != :userId', { userId })
            .andWhere('sender_id != :systemId', { systemId: this.SYSTEM_USER_ID })
            .andWhere('is_read = false')
            .execute();

        const isCustomer = userId === conversation.customerId;
        await this.conversationRepo.update(conversationId, {
            ...(isCustomer
                ? { customerUnreadCount: 0 }
                : { providerUnreadCount: 0 }),
        });

        this.eventEmitter.emit('messages.read', {
            conversationId,
            userId,
        });
    }

    async closeConversation(
        conversationId: string,
        userId: string
    ): Promise<void> {
        const conversation = await this.conversationRepo.findOne({
            where: { id: conversationId },
        });

        if (!conversation) {
            throw new NotFoundException('Conversation not found');
        }

        if (!conversation.isParticipant(userId)) {
            throw new ForbiddenException('You are not a participant in this conversation');
        }

        await this.conversationRepo.update(conversationId, { isActive: false });

        await this.sendSystemMessage(conversationId, 'Cuộc trò chuyện đã đóng.');

        this.logger.log(`Conversation closed: ${conversationId}`);
    }

    async deleteConversation(
        conversationId: string,
        userId: string
    ): Promise<void> {
        const conversation = await this.conversationRepo.findOne({
            where: { id: conversationId },
        });

        if (!conversation) {
            throw new NotFoundException('Conversation not found');
        }

        if (!conversation.isParticipant(userId)) {
            throw new ForbiddenException('You are not a participant in this conversation');
        }

        await this.conversationRepo.delete(conversationId);

        this.logger.log(`Conversation deleted: ${conversationId}`);
    }

    async getTotalUnreadCount(userId: string): Promise<number> {
        const result = await this.conversationRepo
            .createQueryBuilder('conversation')
            .select(
                `SUM(CASE
                    WHEN conversation.customer_id = :userId THEN conversation.customer_unread_count
                    WHEN conversation.provider_id = :userId THEN conversation.provider_unread_count
                    ELSE 0
                END)`,
                'total'
            )
            .where('conversation.customer_id = :userId OR conversation.provider_id = :userId', {
                userId,
            })
            .getRawOne();

        return parseInt(result?.total || '0', 10);
    }

    async searchMessages(
        userId: string,
        keyword: string,
        conversationId?: string
    ): Promise<Message[]> {
        if (!keyword || keyword.trim().length < 2) {
            throw new BadRequestException('Keyword must be at least 2 characters');
        }

        // Escape ILIKE wildcards to prevent a bare '%' from matching everything (performance DoS)
        const escaped = keyword.trim().replace(/[\\%_]/g, '\\$&');

        // Single join on conversation — used for both the WHERE clause and the SELECT
        const queryBuilder = this.messageRepo
            .createQueryBuilder('message')
            .leftJoinAndSelect('message.conversation', 'conversation')
            .leftJoinAndSelect('message.sender', 'sender')
            .where(
                '(conversation.customer_id = :userId OR conversation.provider_id = :userId)',
                { userId }
            )
            .andWhere('message.content ILIKE :keyword', { keyword: `%${escaped}%` })
            .andWhere('message.type = :type', { type: MessageType.TEXT })
            .orderBy('message.created_at', 'DESC')
            .limit(50);

        if (conversationId) {
            queryBuilder.andWhere('message.conversation_id = :conversationId', {
                conversationId,
            });
        }

        return await queryBuilder.getMany();
    }

    // ============ PRIVATE HELPERS ============

    private validateMessageContent(dto: SendMessageDto): void {
        if (dto.type === MessageType.TEXT && !dto.content?.trim()) {
            throw new BadRequestException('Text message cannot be empty');
        }

        if (
            (dto.type === MessageType.IMAGE || dto.type === MessageType.FILE) &&
            (!dto.fileUrls || dto.fileUrls.length === 0)
        ) {
            throw new BadRequestException('File message must have at least one file');
        }

        if (dto.type === MessageType.SYSTEM) {
            throw new BadRequestException('Cannot send system message directly');
        }
    }

    private async updateConversationAfterMessage(
        conversation: Conversation,
        message: Message,
        senderId: string
    ): Promise<void> {
        const isCustomerSender = senderId === conversation.customerId;

        await this.conversationRepo.update(conversation.id, {
            lastMessageAt: new Date(),
            lastMessagePreview: this.getMessagePreview(message),
            ...(isCustomerSender
                ? { providerUnreadCount: () => 'provider_unread_count + 1' }
                : { customerUnreadCount: () => 'customer_unread_count + 1' }),
        });
    }

    private async sendMessageNotification(
        conversation: Conversation,
        message: Message,
        senderId: string
    ): Promise<void> {
        const receiverId = conversation.getOtherUserId(senderId);

        // customer.profile / provider.profile are loaded in sendMessage
        const senderProfile =
            senderId === conversation.customerId
                ? conversation.customer?.profile
                : conversation.provider?.profile;

        const senderName =
            senderProfile?.displayName ||
            senderProfile?.fullName ||
            'Người dùng';

        await this.notificationService.notifyNewMessage(
            receiverId,
            senderId,
            senderName,
            this.getMessagePreview(message),
            conversation.id
        );
    }

    private getMessagePreview(message: Message): string {
        switch (message.type) {
            case MessageType.TEXT:
                return message.content?.substring(0, 100) || '';
            case MessageType.IMAGE:
                return 'Hình ảnh';
            case MessageType.FILE:
                return 'File đính kèm';
            case MessageType.SYSTEM:
                return message.content || '';
            default:
                return 'Tin nhắn';
        }
    }
}
