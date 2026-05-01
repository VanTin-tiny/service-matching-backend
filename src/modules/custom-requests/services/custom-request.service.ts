import { UserRepository } from '@/modules/users/repositories/user.repository';
import {
    BadRequestException,
    ForbiddenException,
    Injectable,
    Logger,
    NotFoundException,
} from '@nestjs/common';
import {
    CreateCustomRequestDto,
    CustomRequestListResponseDto,
    CustomRequestResponseDto,
    GetCustomRequestsQueryDto,
} from '../dtos/custom-request.dto';
import { CustomRequest } from '../entities/custom-request.entity';
import { CustomRequestStatus } from '../enums/custom-request-status.enum';
import { CustomRequestRepository } from '../repositories/custom-request.repository';
import { CustomRequestNotificationService } from './custom-request-notification.service';

@Injectable()
export class CustomRequestService {
    private readonly logger = new Logger(CustomRequestService.name);

    constructor(
        private readonly customRequestRepo: CustomRequestRepository,
        private readonly userRepo: UserRepository,
        private readonly notificationService: CustomRequestNotificationService,
    ) {}

    async createRequest(
        customerId: string,
        dto: CreateCustomRequestDto,
    ): Promise<CustomRequestResponseDto> {
        const customer = await this.userRepo.findById(customerId);
        if (!customer) {
            throw new NotFoundException('Customer not found');
        }

        const provider = await this.userRepo.findByIdProvider(dto.providerId);
        if (!provider) {
            throw new NotFoundException('Provider not found or inactive');
        }

        if (customerId === dto.providerId) {
            throw new BadRequestException('Cannot send request to yourself');
        }

        const request = this.customRequestRepo.create({
            customerId,
            providerId: dto.providerId,
            title: dto.title,
            description: dto.description,
            imageUrls: dto.imageUrls || [],
            location: dto.location,
            desiredTime: dto.desiredTime,
            budget: dto.budget,
            status: CustomRequestStatus.PENDING,
        });

        const saved = await this.customRequestRepo.save(request);

        const customerName = customer.profile?.fullName || customer.profile?.displayName || 'Khách hàng';
        await this.notificationService.notifyRequestReceived(saved, customerName);

        this.logger.log(`Custom request created: ${saved.id} from customer ${customerId} to provider ${dto.providerId}`);
        return this.toResponseDto(saved, customer, provider);
    }

    async acceptRequest(requestId: string, providerId: string): Promise<CustomRequestResponseDto> {
        const request = await this.customRequestRepo.findByIdWithRelations(requestId, [
            'customer',
            'customer.profile',
            'provider',
            'provider.profile',
        ]);

        if (!request) {
            throw new NotFoundException('Custom request not found');
        }

        if (!request.belongsToProvider(providerId)) {
            throw new ForbiddenException('You do not have permission to accept this request');
        }

        if (!request.isPending()) {
            throw new BadRequestException(
                `Cannot accept request with status: ${request.status}`,
            );
        }

        request.status = CustomRequestStatus.ACCEPTED;
        request.acceptedAt = new Date();

        const saved = await this.customRequestRepo.save(request);

        const providerName =
            request.provider?.profile?.fullName ||
            request.provider?.profile?.displayName ||
            'Thợ';

        await this.notificationService.notifyRequestAccepted(saved, providerName);

        this.logger.log(`Custom request accepted: ${requestId} by provider ${providerId}`);
        return this.toResponseDto(saved, saved.customer, saved.provider);
    }

    async rejectRequest(
        requestId: string,
        providerId: string,
        reason?: string,
    ): Promise<CustomRequestResponseDto> {
        const request = await this.customRequestRepo.findByIdWithRelations(requestId, [
            'customer',
            'customer.profile',
            'provider',
            'provider.profile',
        ]);

        if (!request) {
            throw new NotFoundException('Custom request not found');
        }

        if (!request.belongsToProvider(providerId)) {
            throw new ForbiddenException('You do not have permission to reject this request');
        }

        if (!request.isPending()) {
            throw new BadRequestException(
                `Cannot reject request with status: ${request.status}`,
            );
        }

        request.status = CustomRequestStatus.REJECTED;
        request.rejectedAt = new Date();
        request.rejectionReason = reason;

        const saved = await this.customRequestRepo.save(request);

        const providerName =
            request.provider?.profile?.fullName ||
            request.provider?.profile?.displayName ||
            'Thợ';

        await this.notificationService.notifyRequestRejected(saved, providerName, reason);

        this.logger.log(`Custom request rejected: ${requestId} by provider ${providerId}`);
        return this.toResponseDto(saved, saved.customer, saved.provider);
    }

    async getRequestById(requestId: string, userId: string): Promise<CustomRequestResponseDto> {
        const request = await this.customRequestRepo.findByIdWithRelations(requestId, [
            'customer',
            'customer.profile',
            'provider',
            'provider.profile',
        ]);

        if (!request) {
            throw new NotFoundException('Custom request not found');
        }

        if (!request.isParticipant(userId)) {
            throw new ForbiddenException('You do not have access to this request');
        }

        return this.toResponseDto(request, request.customer, request.provider);
    }

    async getCustomerRequests(
        customerId: string,
        query: GetCustomRequestsQueryDto,
    ): Promise<CustomRequestListResponseDto> {
        const page = query.page ?? 1;
        const limit = query.limit ?? 10;

        const { data, total } = await this.customRequestRepo.findByCustomer(
            customerId,
            query.status,
            page,
            limit,
        );

        return {
            data: data.map((r) => this.toResponseDto(r, undefined, r.provider)),
            total,
            page,
            limit,
            hasMore: page * limit < total,
        };
    }

    async getProviderRequests(
        providerId: string,
        query: GetCustomRequestsQueryDto,
    ): Promise<CustomRequestListResponseDto> {
        const page = query.page ?? 1;
        const limit = query.limit ?? 10;

        const { data, total } = await this.customRequestRepo.findByProvider(
            providerId,
            query.status,
            page,
            limit,
        );

        return {
            data: data.map((r) => this.toResponseDto(r, r.customer, undefined)),
            total,
            page,
            limit,
            hasMore: page * limit < total,
        };
    }

    async deleteRequest(requestId: string, customerId: string): Promise<void> {
        const request = await this.customRequestRepo.findById(requestId);

        if (!request) {
            throw new NotFoundException('Custom request not found');
        }

        if (!request.belongsToCustomer(customerId)) {
            throw new ForbiddenException('You do not have permission to delete this request');
        }

        if (!request.isPending()) {
            throw new BadRequestException('Only pending requests can be deleted');
        }

        await this.customRequestRepo.softDelete(requestId);
        this.logger.log(`Custom request deleted: ${requestId} by customer ${customerId}`);
    }

    private toResponseDto(
        request: CustomRequest,
        customer?: any,
        provider?: any,
    ): CustomRequestResponseDto {
        const dto = new CustomRequestResponseDto();
        dto.id = request.id;
        dto.customerId = request.customerId;
        dto.providerId = request.providerId;
        dto.title = request.title;
        dto.description = request.description;
        dto.imageUrls = request.imageUrls;
        dto.location = request.location;
        dto.desiredTime = request.desiredTime;
        dto.budget = request.budget ? parseFloat(request.budget.toString()) : undefined;
        dto.status = request.status;
        dto.rejectionReason = request.rejectionReason;
        dto.acceptedAt = request.acceptedAt;
        dto.rejectedAt = request.rejectedAt;
        dto.createdAt = request.createdAt;
        dto.updatedAt = request.updatedAt;

        if (customer) {
            dto.customer = {
                id: customer.id,
                fullName: customer.profile?.fullName,
                avatarUrl: customer.profile?.avatarUrl,
                displayName: customer.profile?.displayName,
            };
        }

        if (provider) {
            dto.provider = {
                id: provider.id,
                fullName: provider.profile?.fullName,
                avatarUrl: provider.profile?.avatarUrl,
                displayName: provider.profile?.displayName,
            };
        }

        return dto;
    }
}
