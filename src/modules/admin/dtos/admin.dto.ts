import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
    IsBoolean,
    IsDateString,
    IsEnum,
    IsInt,
    IsOptional,
    IsString,
    IsUUID,
    Max,
    Min,
} from 'class-validator';
import { UserRole } from '@/common/enums/user-role.enum';

// ─── Query DTOs ───────────────────────────────────────────────────────────────

export class PaginationQueryDto {
    @ApiPropertyOptional({ default: 1 })
    @IsOptional()
    @IsInt()
    @Min(1)
    @Type(() => Number)
    page?: number = 1;

    @ApiPropertyOptional({ default: 20 })
    @IsOptional()
    @IsInt()
    @Min(1)
    @Max(100)
    @Type(() => Number)
    limit?: number = 20;
}

export class DateRangeQueryDto extends PaginationQueryDto {
    @ApiPropertyOptional({ description: 'Start date ISO 8601', example: '2025-01-01' })
    @IsOptional()
    @IsDateString()
    from?: string;

    @ApiPropertyOptional({ description: 'End date ISO 8601', example: '2025-12-31' })
    @IsOptional()
    @IsDateString()
    to?: string;
}

export class AdminUsersQueryDto extends PaginationQueryDto {
    @ApiPropertyOptional({ enum: UserRole })
    @IsOptional()
    @IsEnum(UserRole)
    role?: UserRole;

    @ApiPropertyOptional({ description: 'Search by email, phone, or display name' })
    @IsOptional()
    @IsString()
    search?: string;

    @ApiPropertyOptional({ description: 'Filter by active status', type: Boolean })
    @IsOptional()
    @Transform(({ value }) => {
        if (value === 'true' || value === true) return true;
        if (value === 'false' || value === false) return false;
        return undefined;
    })
    @IsBoolean()
    isActive?: boolean;
}

export class AdminOrderStatsQueryDto extends DateRangeQueryDto {
    @ApiPropertyOptional({ description: 'Filter by provider ID' })
    @IsOptional()
    @IsUUID()
    providerId?: string;

    @ApiPropertyOptional({ description: 'Filter by customer ID' })
    @IsOptional()
    @IsUUID()
    customerId?: string;
}

export class AdminQuoteStatsQueryDto extends DateRangeQueryDto {
    @ApiPropertyOptional({ description: 'Filter by provider ID' })
    @IsOptional()
    @IsUUID()
    providerId?: string;
}

// ─── Response DTOs ────────────────────────────────────────────────────────────

export class AdminUserResponseDto {
    @ApiProperty()
    id!: string;

    @ApiPropertyOptional()
    email?: string;

    @ApiPropertyOptional()
    phone?: string;

    @ApiProperty({ enum: UserRole })
    role!: UserRole;

    @ApiProperty()
    isActive!: boolean;

    @ApiProperty()
    isVerified!: boolean;

    @ApiPropertyOptional()
    lastLoginAt?: Date;

    @ApiProperty()
    createdAt!: Date;

    @ApiPropertyOptional()
    displayName?: string;

    @ApiPropertyOptional()
    fullName?: string;

    @ApiPropertyOptional()
    avatarUrl?: string;

    @ApiPropertyOptional()
    averageRating?: number;

    @ApiPropertyOptional()
    reviewCount?: number;
}

export class OverviewStatsDto {
    @ApiProperty()
    totalUsers!: number;

    @ApiProperty()
    totalCustomers!: number;

    @ApiProperty()
    totalProviders!: number;

    @ApiProperty()
    activeProviders!: number;

    @ApiProperty()
    totalOrders!: number;

    @ApiProperty()
    completedOrders!: number;

    @ApiProperty()
    pendingOrders!: number;

    @ApiProperty()
    cancelledOrders!: number;

    @ApiProperty()
    totalQuotes!: number;

    @ApiProperty()
    confirmedQuotes!: number;

    @ApiProperty()
    pendingQuotes!: number;

    @ApiProperty()
    totalRevenue!: number;

    @ApiProperty()
    activeSubscriptions!: number;

    @ApiProperty()
    totalSubscriptionRevenue!: number;

    @ApiProperty({ description: 'New users registered in the last 30 days' })
    newUsersLast30Days!: number;

    @ApiProperty({ description: 'Orders created in the last 30 days' })
    ordersLast30Days!: number;
}

export class OrderStatsByStatusDto {
    @ApiProperty()
    status!: string;

    @ApiProperty()
    count!: number;

    @ApiProperty()
    totalAmount!: number;
}

export class OrderStatsResponseDto {
    @ApiProperty()
    totalOrders!: number;

    @ApiProperty()
    totalRevenue!: number;

    @ApiProperty({ type: [OrderStatsByStatusDto] })
    byStatus!: OrderStatsByStatusDto[];

    @ApiProperty({ description: 'Daily order counts for chart' })
    dailyTrend!: { date: string; count: number; revenue: number }[];
}

export class QuoteStatsByStatusDto {
    @ApiProperty()
    status!: string;

    @ApiProperty()
    count!: number;
}

export class QuoteStatsResponseDto {
    @ApiProperty()
    totalQuotes!: number;

    @ApiProperty({ type: [QuoteStatsByStatusDto] })
    byStatus!: QuoteStatsByStatusDto[];

    @ApiProperty({ description: 'Daily quote counts for chart' })
    dailyTrend!: { date: string; count: number }[];
}
