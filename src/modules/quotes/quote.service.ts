import { PostRepository } from '@/modules/posts/repositories/post.repository';
import { UserRepository } from '@/modules/users/repositorys/user.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuoteDto, UpdateQuoteDto } from './dtos/quote.dto';
import { Quote } from './entities/quote.entity';
import { QuoteStatus } from './enums/quote-status.enum';
import { QuoteRepository } from './repositories/quote.repository';
import { QuoteNotificationService } from './services/quote-notification.service';
import { QuoteQueryService } from './services/quote-query.service';
import { QuoteStatusService } from './services/quote-status.service';
import { QuoteValidationService } from './services/quote-validation.service';

@Injectable()
export class QuoteService {
    constructor(


        private readonly postRepository: PostRepository,
        private readonly userRepository: UserRepository,
        private readonly quoteRepo: QuoteRepository,
        private readonly validationService: QuoteValidationService,
        private readonly statusService: QuoteStatusService,
        private readonly queryService: QuoteQueryService,
        private readonly notificationService: QuoteNotificationService,
    ) { }

    
    async createQuote(providerId: string, dto: CreateQuoteDto): Promise<Quote> {
        const provider = await this.validationService.validateProvider(providerId);

        const post = await this.validationService.validatePostForQuote(dto.postId, providerId);

        this.validationService.validatePrice(dto.price, post.budget);

        const quote = this.quoteRepo.create({
            postId: dto.postId,
            providerId,
            price: dto.price,
            description: dto.description,
            terms: dto.terms,
            estimatedDuration: dto.estimatedDuration,
            imageUrls: dto.imageUrls || [],
            status: QuoteStatus.PENDING,
        });

        const savedQuote = await this.quoteRepo.save(quote);

        await this.notificationService.notifyNewQuote(
            post.customerId,
            savedQuote,
            provider,
            post,
        );

        return savedQuote;
    }

    async updateQuote(
        quoteId: string,
        providerId: string,
        dto: UpdateQuoteDto,
    ): Promise<Quote> {
        const quote = await this.queryService.findQuoteWithRelations(quoteId, [
            'post',
            'provider',
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
        const quote = await this.queryService.findQuoteWithRelations(quoteId, ['post']);

        this.validationService.validateQuoteOwnership(quote, providerId);
        this.validationService.validateQuoteCanCancel(quote);

        return await this.statusService.cancelQuote(quote, reason);
    }

    async acceptQuote(quoteId: string, customerId: string): Promise<Quote> {
        const quote = await this.queryService.findQuoteWithRelations(quoteId, [
            'post',
            'provider',
        ]);

        this.validationService.validatePostOwnership(quote.post, customerId);
        this.validationService.validateQuoteIsPending(quote);
        this.validationService.validatePostIsOpen(quote.post);

        return await this.statusService.acceptQuote(quote, customerId);
    }

    async rejectQuote(
        quoteId: string,
        customerId: string,
        reason?: string,
    ): Promise<Quote> {
        const quote = await this.queryService.findQuoteWithRelations(quoteId, ['post']);

        this.validationService.validatePostOwnership(quote.post, customerId);
        this.validationService.validateQuoteIsPending(quote);

        return await this.statusService.rejectQuote(quote, reason);
    }

   
    async getProviderQuotes(
        providerId: string,
        status?: QuoteStatus,
    ): Promise<Quote[]> {
        return await this.queryService.findProviderQuotes(providerId, status);
    }

    
    async getPostQuotes(postId: string, customerId: string): Promise<Quote[]> {
        const post = await this.postRepository.findById(postId);

        if (!post) {
            throw new NotFoundException('Not found post');
        }

        this.validationService.validatePostOwnership(post, customerId);

        return await this.queryService.findPostQuotes(postId);
    }

   
    async getQuoteById(quoteId: string, userId: string): Promise<Quote> {
        const quote = await this.queryService.findQuoteWithRelations(quoteId, [
            'post',
            'post.customer',
            'provider',
        ]);

        this.validationService.validateQuoteAccess(quote, userId);

        return quote;
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