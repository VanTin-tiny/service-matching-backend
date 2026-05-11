import { CustomRequest } from '@/modules/custom-requests/entities/custom-request.entity';
import { CustomRequestStatus } from '@/modules/custom-requests/enums/custom-request-status.enum';
import { PostRepository } from '@/modules/posts/repositories/post.repository';
import { UserRepository } from '@/modules/users/repositories/user.repository';
import { BadRequestException, ForbiddenException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
    CreateQuoteDto,
    PostQuoteGroupResponseDto,
    QuoteRevisionItemDto,
    QuoteWithRevisionsResponseDto,
    ReviseQuoteDto,
    UpdateQuoteDto
} from './dtos/quote.dto';
import { Quote } from './entities/quote.entity';
import { QuoteRepository } from './repositories/quote.repository';
import { QuoteNotificationService } from './services/quote-notification.service';
import { QuoteQueryService } from './services/quote-query.service';
import { QuoteRevisionService } from './services/quote-revision.service';
import { QuoteStatusService } from './services/quote-status.service';
import { QuoteValidationService } from './services/quote-validation.service';

@Injectable()
export class QuoteService {
    private readonly logger = new Logger(QuoteService.name);

    constructor(
        private readonly postRepository: PostRepository,
        private readonly userRepository: UserRepository,
        private readonly quoteRepo: QuoteRepository,
        private readonly validationService: QuoteValidationService,
        private readonly statusService: QuoteStatusService,
        private readonly queryService: QuoteQueryService,
        private readonly revisionService: QuoteRevisionService,
        private readonly notificationService: QuoteNotificationService,
        @InjectRepository(CustomRequest)
        private readonly customRequestRepo: Repository<CustomRequest>,
    ) { }


    async createQuote(providerId: string, dto: CreateQuoteDto): Promise<Quote> {
        if (!dto.postId && !dto.customRequestId) {
            throw new BadRequestException('Either postId or customRequestId must be provided');
        }

        if (dto.postId && dto.customRequestId) {
            throw new BadRequestException('Provide either postId or customRequestId, not both');
        }

        const provider = await this.validationService.validateProvider(providerId);

        if (dto.postId) {
            return await this.createQuoteFromPost(providerId, provider, dto);
        }

        return await this.createQuoteFromCustomRequest(providerId, provider, dto);
    }

    private async createQuoteFromPost(
        providerId: string,
        provider: any,
        dto: CreateQuoteDto,
    ): Promise<Quote> {
        const post = await this.validationService.validatePostForQuote(dto.postId!, providerId);

        this.validationService.validatePrice(dto.price, post.budget);

        const quote = this.quoteRepo.create({
            postId: dto.postId,
            providerId,
            price: dto.price,
            description: dto.description,
            terms: dto.terms,
            estimatedDuration: dto.estimatedDuration,
            imageUrls: dto.imageUrls || [],
        });

        const savedQuote = await this.quoteRepo.save(quote);

        await this.notificationService.notifyNewQuote(
            post.customerId,
            savedQuote,
            provider,
            post,
        );

        this.logger.log(`Quote created: ${savedQuote.id} for post ${post.id}`);
        return savedQuote;
    }

    private async createQuoteFromCustomRequest(
        providerId: string,
        provider: any,
        dto: CreateQuoteDto,
    ): Promise<Quote> {
        const customRequest = await this.validationService.validateCustomRequestForQuote(
            dto.customRequestId!,
            providerId,
        );

        if (customRequest.status === CustomRequestStatus.PENDING) {
            await this.customRequestRepo.update(customRequest.id, {
                status: CustomRequestStatus.ACCEPTED,
                acceptedAt: new Date(),
            });
            customRequest.status = CustomRequestStatus.ACCEPTED;
            customRequest.acceptedAt = new Date();
        }

        this.validationService.validatePrice(dto.price, customRequest.budget);

        const quote = this.quoteRepo.create({
            customRequestId: dto.customRequestId,
            providerId,
            price: dto.price,
            description: dto.description,
            terms: dto.terms,
            estimatedDuration: dto.estimatedDuration,
            imageUrls: dto.imageUrls || [],
        });

        const savedQuote = await this.quoteRepo.save(quote);

        // Notify the customer that a quote has been submitted on their custom request
        const postLike = {
            id: customRequest.id,
            title: customRequest.title,
            customerId: customRequest.customerId,
            budget: customRequest.budget,
        } as any;

        await this.notificationService.notifyNewQuote(
            customRequest.customerId,
            savedQuote,
            provider,
            postLike,
        );

        this.logger.log(`Quote created: ${savedQuote.id} for custom request ${customRequest.id}`);
        return savedQuote;
    }


    async acceptQuoteForChat(quoteId: string, customerId: string): Promise<Quote> {
        const quote = await this.queryService.findQuoteWithRelations(quoteId, [
            'post',
            'post.customer',
            'provider',
            'customRequest',
        ]);

        this.validationService.validateCustomerAccessToQuote(quote, customerId);
        this.validationService.validateQuoteIsPending(quote);

        if (quote.post) {
            this.validationService.validatePostIsOpen(quote.post);
        }

        return await this.statusService.acceptForChat(quote, customerId);
    }


    private static readonly MAX_REVISIONS_AFTER_CHAT = 3;

    async reviseQuote(
        quoteId: string,
        providerId: string,
        dto: ReviseQuoteDto,
    ): Promise<Quote> {
        const quote = await this.queryService.findQuoteWithRelations(quoteId, [
            'post',
            'customRequest',
        ]);

        this.validationService.validateQuoteOwnership(quote, providerId);

        if (!quote.canRevise()) {
            throw new BadRequestException('Quote cannot be revised at this stage');
        }

        if (quote.revisionCount > QuoteService.MAX_REVISIONS_AFTER_CHAT) {
            throw new BadRequestException(
                `Maximum ${QuoteService.MAX_REVISIONS_AFTER_CHAT} re-quotes are allowed after chat is opened`,
            );
        }

        const budget = quote.post?.budget ?? quote.customRequest?.budget;
        this.validationService.validatePrice(dto.price, budget);

        return await this.statusService.reviseQuote(
            quote,
            dto.price,
            dto.description,
            dto.terms,
            dto.estimatedDuration,
            dto.changeReason,
        );
    }


    async requestOrder(quoteId: string, customerId: string): Promise<Quote> {
        const quote = await this.queryService.findQuoteWithRelations(quoteId, [
            'post',
            'customRequest',
        ]);

        this.validationService.validateCustomerAccessToQuote(quote, customerId);

        if (!quote.canRequestOrder()) {
            throw new BadRequestException('Cannot request order for this quote');
        }

        return await this.statusService.requestOrder(quote, customerId);
    }


    async updateQuote(
        quoteId: string,
        providerId: string,
        dto: UpdateQuoteDto,
    ): Promise<Quote> {
        const quote = await this.queryService.findQuoteWithRelations(quoteId, [
            'post',
            'provider',
            'customRequest',
        ]);

        this.validationService.validateQuoteOwnership(quote, providerId);
        this.validationService.validateQuoteCanEdit(quote);

        if (dto.price !== undefined) {
            this.validationService.validatePrice(dto.price);
            quote.price = dto.price;
        }

        this.updateQuoteFields(quote, dto);

        return await this.quoteRepo.save(quote);
    }


    async cancelQuote(
        quoteId: string,
        providerId: string,
        reason?: string,
    ): Promise<Quote> {
        const quote = await this.queryService.findQuoteWithRelations(quoteId, [
            'post',
            'customRequest',
        ]);

        this.validationService.validateQuoteOwnership(quote, providerId);
        this.validationService.validateQuoteCanCancel(quote);

        return await this.statusService.cancelQuote(quote, reason);
    }


    async rejectQuote(
        quoteId: string,
        customerId: string,
        reason?: string,
    ): Promise<Quote> {
        const quote = await this.queryService.findQuoteWithRelations(quoteId, [
            'post',
            'customRequest',
        ]);

        this.validationService.validateCustomerAccessToQuote(quote, customerId);
        this.validationService.validateQuoteIsPending(quote);

        return await this.statusService.rejectQuote(quote, reason);
    }


    async getProviderQuotes(
        providerId: string,
        status?: string,
    ): Promise<Quote[]> {
        return await this.queryService.findProviderQuotes(providerId, status as any);
    }


    async getPostQuotes(postId: string, customerId: string): Promise<Quote[]> {
        const post = await this.postRepository.findById(postId);

        if (!post) {
            throw new NotFoundException('Post not found');
        }

        this.validationService.validatePostOwnership(post, customerId);

        return await this.queryService.findPostQuotes(postId);
    }

    async getCustomRequestQuotes(customRequestId: string, customerId: string): Promise<Quote[]> {
        await this.validationService.checkCustomRequestOwnership(customRequestId, customerId);

        return await this.quoteRepo.find({
            where: { customRequestId },
            relations: ['provider', 'provider.profile'],
            order: { createdAt: 'DESC' },
        });
    }


    async getQuoteById(quoteId: string, userId: string): Promise<Quote> {
        const quote = await this.queryService.findQuoteWithRelations(quoteId, [
            'post',
            'post.customer',
            'provider',
            'customRequest',
        ]);

        this.validationService.validateQuoteAccess(quote, userId);

        return quote;
    }


    async getQuoteRevisionHistory(quoteId: string, userId: string): Promise<QuoteWithRevisionsResponseDto> {
        const quote = await this.queryService.findQuoteWithRelations(quoteId, [
            'post',
            'customRequest',
        ]);
        this.validationService.validateQuoteAccess(quote, userId);

        const revisions = await this.revisionService.getRevisionHistoryWithPriceChanges(quoteId);

        return {
            id: quote.id,
            status: quote.status,
            currentPrice: parseFloat(quote.price.toString()),
            revisionCount: quote.revisionCount,
            postId: quote.postId,
            customRequestId: quote.customRequestId,
            providerId: quote.providerId,
            chatOpenedAt: quote.chatOpenedAt,
            orderRequestedAt: quote.orderRequestedAt,
            revisions,
            createdAt: quote.createdAt,
            updatedAt: quote.updatedAt,
        };
    }


    async getQuotesBetweenUsers(
        requesterId: string,
        customerId: string,
        providerId: string,
    ): Promise<PostQuoteGroupResponseDto[]> {
        if (requesterId !== customerId && requesterId !== providerId) {
            throw new ForbiddenException('Access denied');
        }

        const quotes = await this.queryService.findQuotesBetweenUsers(customerId, providerId);

        return quotes.map((quote) => {
            const sortedRevisions = (quote.revisions ?? []).slice().sort(
                (a, b) => a.revisionNumber - b.revisionNumber,
            );

            const revisions: QuoteRevisionItemDto[] = sortedRevisions.map((rev, index) => {
                const currentPrice = parseFloat(rev.price.toString());
                let priceChange: number | undefined;
                let percentChange: number | undefined;
                if (index > 0) {
                    const previousPrice = parseFloat(sortedRevisions[index - 1].price.toString());
                    priceChange = currentPrice - previousPrice;
                    percentChange = ((currentPrice - previousPrice) / previousPrice) * 100;
                }
                return {
                    id: rev.id,
                    revisionNumber: rev.revisionNumber,
                    price: currentPrice,
                    description: rev.description,
                    terms: rev.terms,
                    estimatedDuration: rev.estimatedDuration,
                    imageUrls: rev.imageUrls ?? [],
                    changeReason: rev.changeReason,
                    priceChange,
                    percentChange,
                    usedForOrderId: rev.usedForOrderId,
                    createdAt: rev.createdAt,
                };
            });

            return {
                postId: quote.postId ?? quote.customRequestId ?? '',
                postTitle: quote.post?.title ?? quote.customRequest?.title ?? 'Báo giá',
                quoteId: quote.id,
                quote: {
                    id: quote.id,
                    status: quote.status,
                    currentPrice: parseFloat(quote.price.toString()),
                    revisionCount: quote.revisionCount,
                    postId: quote.postId,
                    customRequestId: quote.customRequestId,
                    providerId: quote.providerId,
                    chatOpenedAt: quote.chatOpenedAt,
                    orderRequestedAt: quote.orderRequestedAt,
                    revisions,
                    createdAt: quote.createdAt,
                    updatedAt: quote.updatedAt,
                },
            };
        });
    }


    async deleteQuote(quoteId: string, providerId: string): Promise<void> {
        const quote = await this.queryService.findQuoteById(quoteId);

        this.validationService.validateQuoteOwnership(quote, providerId);
        this.validationService.validateQuoteCanCancel(quote);

        await this.quoteRepo.softDelete(quoteId);
    }

    private updateQuoteFields(quote: Quote, dto: UpdateQuoteDto): void {
        if (dto.description !== undefined) {
            quote.description = dto.description;
        }
        if (dto.terms !== undefined) {
            quote.terms = dto.terms;
        }
        if (dto.estimatedDuration !== undefined) {
            quote.estimatedDuration = dto.estimatedDuration;
        }
        if (dto.imageUrls !== undefined) {
            quote.imageUrls = dto.imageUrls;
        }
    }
}
