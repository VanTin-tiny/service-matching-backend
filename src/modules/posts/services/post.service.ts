// import { JwtPayload } from '@/modules/auth/interfaces/jwt-payload.interface';
// import {
//     Injectable,
//     InternalServerErrorException,
//     Logger,
// } from '@nestjs/common';
// import { UserRepository } from '../../auth/repositories/user.repository';
// import { CreatePostDto } from '../dtos/create-post.dto';
// import { PostCustomer } from '../entities/post.entity';
// import { PostRepository } from '../repositories/post.repository';
// @Injectable()
// export class PostService {
//     private readonly logger = new Logger(PostService.name);

//     constructor(
//         private readonly repo: PostRepository,
//         private readonly userRepo: UserRepository,
//     ) { }

//     async create(dto: CreatePostDto, jwtUser: JwtPayload): Promise<PostCustomer> {
//         try {
//             const customer = await this.userRepo.findById(jwtUser.id);
//             if (!customer) {
//                 throw new NotFoundException({
//                     code: 'USER_NOT_FOUND',
//                     message: 'Customer not found',
//                 });
//             }

//             return await this.repo.createPost(dto, customer);
//         } catch (error) {
//             this.logger.error('Failed to create post', error.stack);
//             throw new InternalServerErrorException('Failed to create post');
//         }
//     }

//     async getFeed(limit = 10, cursor?: string) {
//         const parsedCursor = cursor ? new Date(cursor) : undefined;

//         const posts = await this.repo.findPublicPosts(limit, parsedCursor);
//         const nextCursor =
//             posts.length > 0 ? posts[posts.length - 1].createdAt.toISOString() : null;

//         return {
//             data: posts,
//             nextCursor,
//         };
//     }
// }
