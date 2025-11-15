import { UsersModule } from '@/modules/users/users.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostCustomer } from './entities/post.entity';
import { PostService } from './post.service';
import { PostController } from './posts.controller';
import { PostRepository } from './repositories/post.repository';
import { PostBusinessService } from './services/post-business.service';
import { PostMapperService } from './services/post-mapper.service';
import { PostValidationService } from './services/post-validation.service';


@Module({
    imports: [
        TypeOrmModule.forFeature([PostCustomer]),
        UsersModule,
    ],
    controllers: [PostController],
    providers: [
        PostService,
        PostValidationService,
        PostBusinessService,
        PostMapperService,
        PostRepository,
    ],
    exports: [
        PostService,
        PostRepository,
        PostValidationService,
        PostBusinessService,
        PostMapperService,
    ],
})
export class PostsModule { }