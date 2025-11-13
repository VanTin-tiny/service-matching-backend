import { User } from '@/modules/users/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../dtos/create-post.dto';
import { PostCustomer } from '../entities/post.entity';

@Injectable()
export class PostRepository {
    constructor(
        @InjectRepository(PostCustomer)
        private readonly repo: Repository<PostCustomer>,
    ) { }

    async createPost(dto: CreatePostDto, customer: User): Promise<PostCustomer> {
        const newPost = this.repo.create({
            ...dto,
            desiredTime: dto.desiredTime ? new Date(dto.desiredTime) : undefined,
            customer,
            isClosed: false,
        });

        return await this.repo.save(newPost);
    }

    async findPublicPosts(limit: number, cursor?: Date) {
        const qb = this.repo
            .createQueryBuilder('post')
            .leftJoinAndSelect('post.customer', 'customer')
            .where('post.isClosed = false')
            .orderBy('post.createdAt', 'DESC')
            .take(limit);

        if (cursor) {
            qb.andWhere('post.createdAt < :cursor', { cursor });
        }

        return await qb.getMany();
    }
}
