import { CurrentUser } from '@/common/decorators/current-user.decorator';
import { CurrentUserId } from '@/common/decorators/current-user-id.decorator';
import { Roles } from '@/common/decorators/roles.decorator';
import { UserRole } from '@/common/enums/user-role.enum';
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
import { RolesGuard } from '@/common/guards/roles.guard';
import { JwtPayload } from '@/modules/auth/interfaces/jwt-payload.interface';
import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseUUIDPipe,
    Post,
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
    CreateCustomRequestDto,
    CustomRequestListResponseDto,
    CustomRequestResponseDto,
    GetCustomRequestsQueryDto,
    RejectCustomRequestDto,
} from './dtos/custom-request.dto';
import { CustomRequestService } from './services/custom-request.service';

@ApiTags('Custom Requests')
@Controller('custom-requests')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class CustomRequestController {
    constructor(private readonly customRequestService: CustomRequestService) {}

    @Post()
    @Roles(UserRole.CUSTOMER)
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({
        summary: '[Customer] Gửi yêu cầu riêng tới thợ',
        description:
            'Khách hàng gửi yêu cầu dịch vụ trực tiếp tới một thợ cụ thể. Nội dung tương tự như tạo post công khai.',
    })
    @ApiResponse({ status: 201, description: 'Request sent successfully', type: CustomRequestResponseDto })
    @ApiResponse({ status: 400, description: 'Validation failed' })
    @ApiResponse({ status: 404, description: 'Provider not found' })
    async createRequest(
        @CurrentUserId('id') customerId: string,
        @Body() dto: CreateCustomRequestDto,
    ): Promise<CustomRequestResponseDto> {
        return await this.customRequestService.createRequest(customerId, dto);
    }

    @Post(':id/accept')
    @Roles(UserRole.PROVIDER)
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: '[Provider] Chấp nhận yêu cầu riêng',
        description:
            'Thợ chấp nhận yêu cầu của khách. Sau khi chấp nhận, thợ có thể gửi báo giá dựa trên yêu cầu này.',
    })
    @ApiResponse({ status: 200, description: 'Request accepted', type: CustomRequestResponseDto })
    @ApiResponse({ status: 400, description: 'Request is not in pending state' })
    @ApiResponse({ status: 403, description: 'Not authorized' })
    @ApiResponse({ status: 404, description: 'Request not found' })
    async acceptRequest(
        @Param('id', ParseUUIDPipe) requestId: string,
        @CurrentUserId('id') providerId: string,
    ): Promise<CustomRequestResponseDto> {
        return await this.customRequestService.acceptRequest(requestId, providerId);
    }

    @Post(':id/reject')
    @Roles(UserRole.PROVIDER)
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: '[Provider] Từ chối yêu cầu riêng',
        description: 'Thợ từ chối yêu cầu của khách hàng, có thể kèm lý do.',
    })
    @ApiResponse({ status: 200, description: 'Request rejected', type: CustomRequestResponseDto })
    @ApiResponse({ status: 400, description: 'Request is not in pending state' })
    @ApiResponse({ status: 403, description: 'Not authorized' })
    @ApiResponse({ status: 404, description: 'Request not found' })
    async rejectRequest(
        @Param('id', ParseUUIDPipe) requestId: string,
        @CurrentUserId('id') providerId: string,
        @Body() dto: RejectCustomRequestDto,
    ): Promise<CustomRequestResponseDto> {
        return await this.customRequestService.rejectRequest(requestId, providerId, dto.reason);
    }

    @Get('my/sent')
    @Roles(UserRole.CUSTOMER)
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: '[Customer] Danh sách yêu cầu riêng đã gửi',
        description: 'Khách hàng xem các yêu cầu riêng mà mình đã gửi cho thợ.',
    })
    @ApiResponse({ status: 200, description: 'Success', type: CustomRequestListResponseDto })
    async getMySentRequests(
        @CurrentUserId('id') customerId: string,
        @Query() query: GetCustomRequestsQueryDto,
    ): Promise<CustomRequestListResponseDto> {
        return await this.customRequestService.getCustomerRequests(customerId, query);
    }

    @Get('my/received')
    @Roles(UserRole.PROVIDER)
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: '[Provider] Danh sách yêu cầu riêng nhận được',
        description: 'Thợ xem các yêu cầu riêng mà khách hàng đã gửi tới mình.',
    })
    @ApiResponse({ status: 200, description: 'Success', type: CustomRequestListResponseDto })
    async getMyReceivedRequests(
        @CurrentUserId('id') providerId: string,
        @Query() query: GetCustomRequestsQueryDto,
    ): Promise<CustomRequestListResponseDto> {
        return await this.customRequestService.getProviderRequests(providerId, query);
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: 'Xem chi tiết yêu cầu riêng',
        description: 'Cả khách hàng và thợ đều có thể xem chi tiết yêu cầu mà họ tham gia.',
    })
    @ApiResponse({ status: 200, description: 'Success', type: CustomRequestResponseDto })
    @ApiResponse({ status: 403, description: 'No access' })
    @ApiResponse({ status: 404, description: 'Not found' })
    async getRequestById(
        @Param('id', ParseUUIDPipe) requestId: string,
        @CurrentUser() user: JwtPayload,
    ): Promise<CustomRequestResponseDto> {
        return await this.customRequestService.getRequestById(requestId, user.id);
    }

    @Delete(':id')
    @Roles(UserRole.CUSTOMER)
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: '[Customer] Xóa yêu cầu riêng',
        description: 'Khách hàng xóa yêu cầu khi còn ở trạng thái PENDING.',
    })
    @ApiResponse({ status: 200, description: 'Deleted successfully' })
    @ApiResponse({ status: 400, description: 'Cannot delete non-pending request' })
    @ApiResponse({ status: 403, description: 'Not authorized' })
    async deleteRequest(
        @Param('id', ParseUUIDPipe) requestId: string,
        @CurrentUserId('id') customerId: string,
    ): Promise<{ success: boolean; message: string }> {
        await this.customRequestService.deleteRequest(requestId, customerId);
        return { success: true, message: 'Custom request deleted successfully' };
    }
}
