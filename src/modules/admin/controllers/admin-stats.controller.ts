import { Roles } from '@/common/decorators/roles.decorator';
import { UserRole } from '@/common/enums/user-role.enum';
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
import { RolesGuard } from '@/common/guards/roles.guard';
import {
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Query,
    UseGuards,
} from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import {
    AdminOrderStatsQueryDto,
    AdminQuoteStatsQueryDto,
    OrderStatsResponseDto,
    OverviewStatsDto,
    QuoteStatsResponseDto,
} from '../dtos/admin.dto';
import { AdminStatsService } from '../services/admin-stats.service';

@ApiTags('Admin — Statistics')
@Controller('admin/stats')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.ADMIN)
@ApiBearerAuth()
export class AdminStatsController {
    constructor(private readonly statsService: AdminStatsService) {}

    @Get('overview')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Get system-wide overview statistics' })
    @ApiResponse({ status: HttpStatus.OK, type: OverviewStatsDto })
    async getOverview(): Promise<OverviewStatsDto> {
        return this.statsService.getOverview();
    }

    @Get('orders')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Get order statistics with optional date/account filters' })
    @ApiResponse({ status: HttpStatus.OK, type: OrderStatsResponseDto })
    async getOrderStats(
        @Query() query: AdminOrderStatsQueryDto,
    ): Promise<OrderStatsResponseDto> {
        return this.statsService.getOrderStats(query);
    }

    @Get('quotes')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Get quote statistics with optional date/account filters' })
    @ApiResponse({ status: HttpStatus.OK, type: QuoteStatsResponseDto })
    async getQuoteStats(
        @Query() query: AdminQuoteStatsQueryDto,
    ): Promise<QuoteStatsResponseDto> {
        return this.statsService.getQuoteStats(query);
    }
}
