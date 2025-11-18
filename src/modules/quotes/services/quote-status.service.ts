import { PostRepository } from '@/modules/posts/repositories/post.repository';
import { Injectable } from '@nestjs/common';
import { IsNull, Not } from 'typeorm';
import { Quote } from '../entities/quote.entity';
import { QuoteStatus } from '../enums/quote-status.enum';
import { QuoteRepository } from '../repositories/quote.repository';
import { QuoteNotificationService } from './quote-notification.service';
@Injectable()
export class QuoteStatusService {
    constructor(
        private readonly quoteRepo: QuoteRepository,
        private readonly postRepo: PostRepository,
        private readonly notificationService: QuoteNotificationService,
    ) { }


    async cancelQuote(quote: Quote, reason?: string): Promise<Quote> {
        quote.status = QuoteStatus.CANCELLED;
        quote.cancelledAt = new Date();
        quote.cancellationReason = reason;

        return await this.quoteRepo.save(quote);
    }


    async acceptQuote(quote: Quote, customerId: string): Promise<Quote> {

        quote.status = QuoteStatus.ACCEPTED;
        quote.acceptedAt = new Date();

        const savedQuote = await this.quoteRepo.save(quote);


        await this.postRepo.closePost(quote.post);


        await this.rejectOtherQuotes(quote.postId, quote.id);


        await this.notificationService.notifyQuoteAccepted(
            savedQuote,
            customerId,
        );

        // TODO
        return savedQuote;
    }


    async rejectQuote(quote: Quote, reason?: string): Promise<Quote> {
        quote.status = QuoteStatus.REJECTED;
        quote.rejectedAt = new Date();
        quote.rejectionReason = reason;

        const savedQuote = await this.quoteRepo.save(quote);

        await this.notificationService.notifyQuoteRejected(savedQuote, reason);

        return savedQuote;
    }


    private async rejectOtherQuotes(
        postId: string,
        acceptedQuoteId: string,
    ): Promise<void> {
        const otherQuotes = await this.quoteRepo.find({
            where: {
                postId,
                id: Not(acceptedQuoteId),
                status: QuoteStatus.PENDING,
                deletedAt: IsNull(),
            },
            relations: ['post'],
        });

        const rejectionReason = 'The customer has selected a different offer';

        for (const quote of otherQuotes) {
            quote.status = QuoteStatus.REJECTED;
            quote.rejectedAt = new Date();
            quote.rejectionReason = rejectionReason;
            await this.quoteRepo.save(quote);


            await this.notificationService.notifyQuoteRejected(
                quote,
                rejectionReason,
            );
        }
    }
}