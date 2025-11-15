import { UserRepository } from '@/modules/users/repositorys/user.repository';
import {
    BadRequestException,
    ForbiddenException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { UpdatePostDto } from '../dtos/post.dto';
import { PostCustomer } from '../entities/post.entity';
import { PostRepository } from '../repositories/post.repository';

@Injectable()
export class PostValidationService {
    constructor(
        private readonly postRepository: PostRepository,
        private readonly userRepository: UserRepository,
    ) { }

    async validateUserExists(userId: string): Promise<void> {
        const user = await this.userRepository.findById(userId);
        if (!user) {
            throw new NotFoundException({
                code: 'USER_NOT_FOUND',
                message: 'Customer not found',
            });
        }
    }

    async validatePostExists(postId: string): Promise<PostCustomer> {
        const post = await this.postRepository.findById(postId);
        if (!post) {
            throw new NotFoundException({
                code: 'POST_NOT_FOUND',
                message: 'Post not found',
            });
        }
        return post;
    }

    async validatePostOwnership(
        postId: string,
        userId: string,
    ): Promise<PostCustomer> {
        const post = await this.postRepository.findByIdAndCustomer(postId, userId);
        if (!post) {
            throw new NotFoundException({
                code: 'POST_NOT_FOUND',
                message: 'Post not found or you do not have permission to access it',
            });
        }
        return post;
    }

    validateAndParseCursor(cursor?: string): Date | undefined {
        if (!cursor) {
            return undefined;
        }

        const parsedCursor = new Date(cursor);
        if (isNaN(parsedCursor.getTime())) {
            throw new BadRequestException({
                code: 'INVALID_CURSOR',
                message: 'Invalid cursor format. Expected ISO date string',
            });
        }

        return parsedCursor;
    }

    validatePostNotClosed(post: PostCustomer): void {
        if (post.isClosed()) {
            throw new ForbiddenException({
                code: 'POST_ALREADY_CLOSED',
                message: 'Post is already closed',
            });
        }
    }

    validatePostUpdateRules(post: PostCustomer, dto: UpdatePostDto): void {
        
        if (post.isClosed() && dto.title) {
            throw new ForbiddenException({
                code: 'POST_CLOSED',
                message: 'Cannot update content of a closed post',
            });
        }
    }
}