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
    Res,
    UseGuards,
} from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiQuery,
    ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import { DateRangeQueryDto } from '../dtos/admin.dto';
import { AdminReportsService } from '../services/admin-reports.service';

@ApiTags('Admin — Reports')
@Controller('admin/reports')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.ADMIN)
@ApiBearerAuth()
export class AdminReportsController {
    constructor(private readonly reportsService: AdminReportsService) {}

    @Get('orders')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Download order report as CSV' })
    @ApiQuery({ name: 'from', required: false })
    @ApiQuery({ name: 'to', required: false })
    async downloadOrdersReport(
        @Query() query: DateRangeQueryDto,
        @Res() res: Response,
    ): Promise<void> {
        const csv = await this.reportsService.generateOrdersReport(query);
        const filename = `orders_report_${new Date().toISOString().slice(0, 10)}.csv`;
        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        res.send('﻿' + csv);
    }

    @Get('quotes')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Download quote report as CSV' })
    @ApiQuery({ name: 'from', required: false })
    @ApiQuery({ name: 'to', required: false })
    async downloadQuotesReport(
        @Query() query: DateRangeQueryDto,
        @Res() res: Response,
    ): Promise<void> {
        const csv = await this.reportsService.generateQuotesReport(query);
        const filename = `quotes_report_${new Date().toISOString().slice(0, 10)}.csv`;
        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        res.send('﻿' + csv);
    }

    @Get('users')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Download user report as CSV' })
    @ApiQuery({ name: 'from', required: false })
    @ApiQuery({ name: 'to', required: false })
    async downloadUsersReport(
        @Query() query: DateRangeQueryDto,
        @Res() res: Response,
    ): Promise<void> {
        const csv = await this.reportsService.generateUsersReport(query);
        const filename = `users_report_${new Date().toISOString().slice(0, 10)}.csv`;
        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        res.send('﻿' + csv);
    }

    @Get('revenue')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Download revenue report as CSV (monthly breakdown)' })
    @ApiQuery({ name: 'from', required: false })
    @ApiQuery({ name: 'to', required: false })
    async downloadRevenueReport(
        @Query() query: DateRangeQueryDto,
        @Res() res: Response,
    ): Promise<void> {
        const csv = await this.reportsService.generateRevenueReport(query);
        const filename = `revenue_report_${new Date().toISOString().slice(0, 10)}.csv`;
        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        res.send('﻿' + csv);
    }
}
