import { CurrentUser } from '@/common/decorators/current-user.decorator';
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
import { JwtPayload } from '@/modules/auth/interfaces/jwt-payload.interface';
import { UserReport, UserReportReason } from '@/modules/admin/entities/user-report.entity';
import {
    BadRequestException,
    Body,
    ConflictException,
    Controller,
    HttpCode,
    HttpStatus,
    Param,
    ParseUUIDPipe,
    Post,
    UseGuards,
} from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiBody,
    ApiOperation,
    ApiParam,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@/modules/users/entities/user.entity';

class CreateUserReportDto {
    @ApiProperty({ enum: UserReportReason })
    @IsEnum(UserReportReason)
    reason!: UserReportReason;

    @ApiPropertyOptional({ maxLength: 1000 })
    @IsOptional()
    @IsString()
    @MaxLength(1000)
    description?: string;
}

@ApiTags('User Reports')
@Controller('users/:userId/report')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class UserReportController {
    constructor(
        @InjectRepository(UserReport)
        private readonly reportRepo: Repository<UserReport>,
        @InjectRepository(User)
        private readonly userRepo: Repository<User>,
    ) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiParam({ name: 'userId', description: 'ID of the user being reported' })
    @ApiOperation({
        summary: 'Report a violating account',
        description: 'Report another user for fraud, unreliable behavior, or inappropriate conduct.',
    })
    @ApiBody({ type: CreateUserReportDto })
    @ApiResponse({ status: HttpStatus.CREATED, description: 'Report submitted successfully' })
    @ApiResponse({ status: HttpStatus.CONFLICT, description: 'You have already reported this user' })
    async reportUser(
        @Param('userId', ParseUUIDPipe) userId: string,
        @Body() dto: CreateUserReportDto,
        @CurrentUser() currentUser: JwtPayload,
    ): Promise<{ success: boolean; message: string }> {
        const reporterId = currentUser.id;

        if (reporterId === userId) {
            throw new BadRequestException('Bạn không thể tự báo cáo chính mình');
        }

        const reportedUser = await this.userRepo.findOne({ where: { id: userId } });
        if (!reportedUser) {
            throw new BadRequestException('Người dùng không tồn tại');
        }

        const existing = await this.reportRepo.findOne({
            where: { reporterId, reportedUserId: userId },
        });
        if (existing) {
            throw new ConflictException('Bạn đã báo cáo tài khoản này rồi');
        }

        await this.reportRepo.save(
            this.reportRepo.create({
                reporterId,
                reportedUserId: userId,
                reason: dto.reason,
                description: dto.description,
            }),
        );

        return { success: true, message: 'Báo cáo đã được gửi thành công. Chúng tôi sẽ xem xét và xử lý trong thời gian sớm nhất.' };
    }
}
