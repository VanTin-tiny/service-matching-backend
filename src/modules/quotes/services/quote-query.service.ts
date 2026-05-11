import { Injectable, NotFoundException } from '@nestjs/common';
import { Brackets, IsNull } from 'typeorm';
import { Quote } from '../entities/quote.entity';
import { QuoteStatus } from '../enums/quote-status.enum';
import { QuoteRepository } from '../repositories/quote.repository';

@Injectable()
export class QuoteQueryService {
    constructor(private readonly quoteRepo: QuoteRepository) { }

    
    async findQuoteById(quoteId: string): Promise<Quote> {
        const quote = await this.quoteRepo.findOne({
            where: { id: quoteId },
        });

        if (!quote) {
            throw new NotFoundException('Not found quote');
        }

        return quote;
    }

    
    async findQuoteWithRelations(
        quoteId: string,
        relations: string[],
    ): Promise<Quote> {
        const quote = await this.quoteRepo.findOne({
            where: { id: quoteId },
            relations,
        });

        if (!quote) {
            throw new NotFoundException('Not found quote');
        }

        return quote;
    }

   
    async findProviderQuotes(
        providerId: string,
        status?: QuoteStatus,
    ): Promise<Quote[]> {
        const where: any = { providerId, deletedAt: IsNull() };
        if (status) where.status = status;

        return await this.quoteRepo.find({
            where,
            relations: ['post', 'post.customer', 'customRequest'],
            order: { createdAt: 'DESC' },
        });
    }


    async findPostQuotes(postId: string): Promise<Quote[]> {
        return await this.quoteRepo.find({
            where: { postId, deletedAt: IsNull() },
            relations: ['provider'],
            order: { createdAt: 'DESC' },
        });
    }

    /**
     * Fetch all quotes by this provider that belong to posts/requests owned by this customer.
     * Returns one quote per post/request, with revisions eagerly loaded (oldest revision first).
     * Results are sorted by the originating post/request creation date (oldest post first).
     */
    async findQuotesBetweenUsers(
        customerId: string,
        providerId: string,
    ): Promise<Quote[]> {
        const quotes = await this.quoteRepo
            .createQueryBuilder('q')
            .leftJoinAndSelect('q.post', 'post')
            .leftJoinAndSelect('q.customRequest', 'customRequest')
            .leftJoinAndSelect('q.revisions', 'revisions')
            .where('q.providerId = :providerId', { providerId })
            .andWhere('q.deletedAt IS NULL')
            .andWhere(
                new Brackets((qb) =>
                    qb
                        .where('post.customerId = :customerId', { customerId })
                        .orWhere('customRequest.customerId = :customerId', { customerId }),
                ),
            )
            .addOrderBy('revisions.revisionNumber', 'ASC')
            .getMany();

        // Sort by the post/custom-request creation time (oldest first)
        quotes.sort((a, b) => {
            const dateA = (a.post?.createdAt ?? a.customRequest?.createdAt ?? a.createdAt).getTime();
            const dateB = (b.post?.createdAt ?? b.customRequest?.createdAt ?? b.createdAt).getTime();
            return dateA - dateB;
        });

        return quotes;
    }
}