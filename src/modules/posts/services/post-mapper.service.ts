import { Injectable } from '@nestjs/common';
import { PostResponseDto } from '../dtos/post.dto';
import { PostCustomer } from '../entities/post.entity';


@Injectable()
export class PostMapperService {
    
    toResponseDto(post: PostCustomer): PostResponseDto {
        return {
            id: post.id,
            title: post.title,
            description: post.description,
            imageUrls: post.imageUrls,
            location: post.location,
            desiredTime: post.desiredTime,
            budget: post.budget ? Number(post.budget) : undefined,
            status: post.status,
            customerId: post.customerId,
            customer: {
                id: post.customer.id,
                fullName: post.customer.fullName,
                avatarUrl: post.customer.avatarUrl,
            },
            createdAt: post.createdAt,
            updatedAt: post.updatedAt,
        };
    }

    toResponseDtoArray(posts: PostCustomer[]): PostResponseDto[] {
        return posts.map(post => this.toResponseDto(post));
    }
}