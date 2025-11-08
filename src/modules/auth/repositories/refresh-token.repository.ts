import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RefreshToken } from '../entities/refresh-token.entity';

@Injectable()
export class RefreshTokenRepository {
    constructor(
        @InjectRepository(RefreshToken)
        private readonly repo: Repository<RefreshToken>,
    ) { }

    async findByUserId(userId: string): Promise<RefreshToken[]> {
        return this.repo.find({
            where: { userId },
            order: { createdAt: 'DESC' },
        });
    }

    async findOldestByUserId(userId: string): Promise<RefreshToken[]> {
        return this.repo.find({
            where: { userId },
            order: { createdAt: 'ASC' },
        });
    }

    async saveToken(userId: string, tokenHash: string, expiresAt: Date): Promise<void> {
        const entity = this.repo.create({ userId, tokenHash, expiresAt });
        await this.repo.save(entity);
    }

    async deleteById(id: string): Promise<void> {
        await this.repo.delete(id);
    }

    async deleteOldest(userId: string): Promise<void> {
        const tokens = await this.findOldestByUserId(userId);
        if (tokens.length >= 5) {
            await this.repo.delete(tokens[0].id);
        }
    }
}
