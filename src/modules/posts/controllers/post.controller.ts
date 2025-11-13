// import { Roles } from '@/common/decorators/@Roles';
// import { UserRole } from '@/common/enums/user-role.enum';
// import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
// import { RolesGuard } from '@/common/guards/roles.guard';
// import { AuthenticatedRequest } from '@/modules/posts/interfaces/authenticated-request.interface';
// import { Body, Controller, Get, Post, Query, Req, UseGuards } from '@nestjs/common';

// import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
// import { CreatePostDto } from '../dtos/create-post.dto';
// import { PostCustomer } from '../entities/post.entity';
// import { PostService } from '../services/post.service';


// @ApiTags('Post')
// @Controller('post')
// export class PostController {
//     constructor(private readonly postService: PostService) { }

//     @Get('feed')
//     async getFeed(
//         @Query('limit') limit?: string,
//         @Query('cursor') cursor?: string,
//     ) {
//         const result = await this.postService.getFeed(Number(limit) || 10, cursor);
//         return result;
//     }

//     @UseGuards(JwtAuthGuard, RolesGuard)
//     @Roles(UserRole.CUSTOMER)
//     @ApiBearerAuth()
//     @Post()
//     async createPost(
//         @Body() dto: CreatePostDto,
//         @Req() req: AuthenticatedRequest,
//     ): Promise<PostCustomer> {
//         return this.postService.create(dto, req.user);
//     }
// }
