import { Roles } from '@/common/decorators/roles.decorator';
import { UserRole } from '@/common/enums/user-role.enum';
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
import { RolesGuard } from '@/common/guards/roles.guard';
import {
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseUUIDPipe,
    Patch,
    Query,
    UseGuards,
} from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiParam,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import {
    AdminUserResponseDto,
    AdminUsersQueryDto,
} from '../dtos/admin.dto';
import { AdminUsersService } from '../services/admin-users.service';

@ApiTags('Admin — Users')
@Controller('admin/users')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.ADMIN)
@ApiBearerAuth()
export class AdminUsersController {
    constructor(private readonly usersService: AdminUsersService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'List all users with pagination and filters' })
    async listUsers(
        @Query() query: AdminUsersQueryDto,
    ): Promise<{ users: AdminUserResponseDto[]; total: number; page: number; limit: number }> {
        return this.usersService.listUsers(query);
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    @ApiParam({ name: 'id', description: 'User UUID' })
    @ApiOperation({ summary: 'Get a single user by ID' })
    @ApiResponse({ status: HttpStatus.OK, type: AdminUserResponseDto })
    async getUserById(
        @Param('id', ParseUUIDPipe) id: string,
    ): Promise<AdminUserResponseDto> {
        return this.usersService.getUserById(id);
    }

    @Patch(':id/block')
    @HttpCode(HttpStatus.OK)
    @ApiParam({ name: 'id', description: 'User UUID' })
    @ApiOperation({ summary: 'Block (deactivate) a user account' })
    @ApiResponse({ status: HttpStatus.OK, type: AdminUserResponseDto })
    async blockUser(
        @Param('id', ParseUUIDPipe) id: string,
    ): Promise<AdminUserResponseDto> {
        return this.usersService.blockUser(id);
    }

    @Patch(':id/unblock')
    @HttpCode(HttpStatus.OK)
    @ApiParam({ name: 'id', description: 'User UUID' })
    @ApiOperation({ summary: 'Unblock (re-activate) a user account' })
    @ApiResponse({ status: HttpStatus.OK, type: AdminUserResponseDto })
    async unblockUser(
        @Param('id', ParseUUIDPipe) id: string,
    ): Promise<AdminUserResponseDto> {
        return this.usersService.unblockUser(id);
    }
}
