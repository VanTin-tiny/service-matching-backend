import { CurrentUser } from '@/common/decorators/current-user.decorator';
import { Roles } from '@/common/decorators/roles.decorator';
import { UserRole } from '@/common/enums/user-role.enum';
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
import { RolesGuard } from '@/common/guards/roles.guard';
import { JwtPayload } from '@/modules/auth/interfaces/jwt-payload.interface';
import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseUUIDPipe,
    Patch,
    Query,
    Res,
    UseGuards,
} from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiBody,
    ApiOperation,
    ApiParam,
    ApiQuery,
    ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { UserReportStatus } from '../entities/user-report.entity';
import { DateRangeQueryDto } from '../dtos/admin.dto';
import { AdminViolationsService } from '../services/admin-violations.service';

class UpdateReportStatusDto {
    @ApiPropertyOptional({ enum: UserReportStatus })
    @IsEnum(UserReportStatus)
    status!: UserReportStatus;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    adminNotes?: string;
}

class ListReportsQueryDto extends DateRangeQueryDto {
    @ApiPropertyOptional({ enum: UserReportStatus })
    @IsOptional()
    @IsEnum(UserReportStatus)
    status?: UserReportStatus;
}

@ApiTags('Admin — Violations')
@Controller('admin/violations')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.ADMIN)
@ApiBearerAuth()
export class AdminViolationsController {
    constructor(private readonly violationsService: AdminViolationsService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'List all user violation reports' })
    @ApiQuery({ name: 'status', enum: UserReportStatus, required: false })
    @ApiQuery({ name: 'from', required: false })
    @ApiQuery({ name: 'to', required: false })
    async listReports(@Query() query: ListReportsQueryDto) {
        return this.violationsService.listReports(query);
    }

    @Patch(':id/status')
    @HttpCode(HttpStatus.OK)
    @ApiParam({ name: 'id', description: 'Report UUID' })
    @ApiOperation({ summary: 'Update a report status (review, dismiss, or take action)' })
    @ApiBody({ type: UpdateReportStatusDto })
    async updateStatus(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() dto: UpdateReportStatusDto,
        @CurrentUser() user: JwtPayload,
    ) {
        return this.violationsService.updateReportStatus(id, dto.status, dto.adminNotes, user.id);
    }

    @Get('download')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Download violation reports as CSV' })
    @ApiQuery({ name: 'from', required: false })
    @ApiQuery({ name: 'to', required: false })
    async downloadReport(
        @Query() query: DateRangeQueryDto,
        @Res() res: Response,
    ): Promise<void> {
        const csv = await this.violationsService.generateViolationsReport(query);
        const filename = `violations_report_${new Date().toISOString().slice(0, 10)}.csv`;
        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        res.send('﻿' + csv);
    }
}
