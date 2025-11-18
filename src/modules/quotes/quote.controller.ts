import { CurrentUser } from '@/common/decorators/@CurrentUser';
import { Roles } from '@/common/decorators/@Roles';
import { BaseResponseDto } from '@/common/dtos/base-response.dto';
import { UserRole } from '@/common/enums/user-role.enum';
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
import { RolesGuard } from '@/common/guards/roles.guard';

import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    Put,
    Query,
    UseGuards,
} from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { CurrentUserId } from '../../common/decorators/@CurrentUserId';
import {
    CreateQuoteDto,
    QuoteResponseDto,
    RejectQuoteDto,
    StatusQuoteDto,
    UpdateQuoteDto
} from './dtos/quote.dto';
import { QuoteService } from './quote.service';

@ApiTags('Quotes - Chào giá')
@Controller('quotes')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class QuoteController {
    constructor(private readonly quoteService: QuoteService) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Roles(UserRole.PROVIDER)
    @ApiOperation({ summary: 'Create new quote (Worker)' })
    @ApiResponse({ status: 201, description: 'Create success' })
    @ApiResponse({ status: 400, description: 'Invalid data' })
    @ApiResponse({ status: 403, description: 'No active' })
    @ApiResponse({ status: 409, description: 'Already quote' })
    async createQuote(
        @CurrentUserId('id') providerId: string,
        @Body() dto: CreateQuoteDto
    ): Promise<QuoteResponseDto> {
        return await this.quoteService.createQuote(providerId, dto);
    }

    @Put(':id')
    @Roles(UserRole.PROVIDER)
    @ApiOperation({ summary: 'Update price quote (Worker)' })
    @ApiResponse({ status: 200, description: 'Update successful' })
    @ApiResponse({ status: 400, description: 'Unable to update' })
    @ApiResponse({ status: 404, description: 'Not found' })
    async updateQuote(
        @Param('id') quoteId: string,
        @CurrentUserId('id') providerId: string,
        @Body() dto: UpdateQuoteDto
    ): Promise<QuoteResponseDto> {
        return await this.quoteService.updateQuote(quoteId, providerId, dto);
    }

    @Post(':id/cancel')
    @Roles(UserRole.PROVIDER)
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Cancel quote (Worker)' })
    @ApiResponse({ status: 200, description: 'Cancellation successful' })
    async cancelQuote(
        @Param('id') quoteId: string,
        @CurrentUser('id') providerId: string,
        @Body('reason') reason?: string
    ): Promise<StatusQuoteDto> {
        return await this.quoteService.cancelQuote(quoteId, providerId, reason);
    }

    @Post(':id/accept')
    @Roles(UserRole.CUSTOMER)
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Accepted quote (Customer)' })
    @ApiResponse({ status: 200, description: 'Accept success' })
    @ApiResponse({ status: 400, description: 'Unacceptable' })
    async acceptQuote(
        @Param('id') quoteId: string,
        @CurrentUser('id') customerId: string
    ): Promise<StatusQuoteDto> {
        return await this.quoteService.acceptQuote(quoteId, customerId);
    }

    @Post(':id/reject')
    @Roles(UserRole.CUSTOMER)
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Refused to bid (Customer)' })
    @ApiResponse({ status: 200, description: 'Rejection successful' })
    async rejectQuote(
        @Param('id') quoteId: string,
        @CurrentUser('id') customerId: string,
        @Body() dto: RejectQuoteDto
    ): Promise<StatusQuoteDto> {
        return await this.quoteService.rejectQuote(
            quoteId,
            customerId,
            dto.reason
        );
    }

    @Get('my-quotes')
    @Roles(UserRole.PROVIDER)
    @ApiOperation({ summary: 'Get my quote list (Worker)' })
    @ApiResponse({ status: 200, description: 'Success' })
    async getMyQuotes(
        @CurrentUser('id') providerId: string,
        @Query() query: StatusQuoteDto
    ): Promise<QuoteResponseDto[]> {
        return await this.quoteService.getProviderQuotes(
            providerId,
            query.status
        );
    }

    @Get('post/:postId')
    @Roles(UserRole.CUSTOMER)
    @ApiOperation({ summary: 'Get post bids (Customer)' })
    @ApiResponse({ status: 200, description: 'Success' })
    async getPostQuotes(
        @Param('postId') postId: string,
        @CurrentUser('id') customerId: string
    ): Promise<QuoteResponseDto[]> {
        return await this.quoteService.getPostQuotes(postId, customerId);
    }

    @Get(':id')
    @ApiOperation({ summary: 'See detailed quote' })
    @ApiResponse({ status: 200, description: 'Success' })
    @ApiResponse({ status: 403, description: 'No active' })
    @ApiResponse({ status: 404, description: 'Not found' })
    async getQuoteById(
        @Param('id') quoteId: string,
        @CurrentUser('id') userId: string
    ): Promise<QuoteResponseDto> {
        return await this.quoteService.getQuoteById(quoteId, userId);
    }

    @Delete(':id')
    @Roles(UserRole.PROVIDER)
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Delete quote (Worker)' })
    @ApiResponse({ status: 204, description: 'Delete successful' })
    async deleteQuote(
        @Param('id') quoteId: string,
        @CurrentUser('id') providerId: string
    ): Promise<BaseResponseDto<void>> {
        await this.quoteService.deleteQuote(quoteId, providerId);
        return { success: true }
    }
}