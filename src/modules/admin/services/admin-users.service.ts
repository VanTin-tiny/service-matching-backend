import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { User } from '@/modules/users/entities/user.entity';
import { Profile } from '@/modules/profile/entities/profile.entity';
import { AdminUserResponseDto, AdminUsersQueryDto } from '../dtos/admin.dto';

@Injectable()
export class AdminUsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>,
        @InjectRepository(Profile)
        private readonly profileRepo: Repository<Profile>,
    ) {}

    async listUsers(
        query: AdminUsersQueryDto,
    ): Promise<{ users: AdminUserResponseDto[]; total: number; page: number; limit: number }> {
        const page = query.page ?? 1;
        const limit = query.limit ?? 20;
        const skip = (page - 1) * limit;

        const qb = this.userRepo
            .createQueryBuilder('u')
            .leftJoinAndSelect('u.profile', 'p')
            .skip(skip)
            .take(limit)
            .orderBy('u.createdAt', 'DESC');

        if (query.role) {
            qb.andWhere('u.role = :role', { role: query.role });
        }

        if (typeof query.isActive !== 'undefined') {
            qb.andWhere('u.is_active = :isActive', { isActive: query.isActive });
        }

        if (query.search) {
            const search = `%${query.search}%`;
            qb.andWhere(
                '(u.email ILIKE :s OR u.phone ILIKE :s OR p.display_name ILIKE :s OR p.full_name ILIKE :s)',
                { s: search },
            );
        }

        const [users, total] = await qb.getManyAndCount();

        return {
            users: users.map(u => this.mapUser(u)),
            total,
            page,
            limit,
        };
    }

    async getUserById(id: string): Promise<AdminUserResponseDto> {
        const user = await this.userRepo.findOne({
            where: { id },
            relations: ['profile'],
        });
        if (!user) throw new NotFoundException('User not found');
        return this.mapUser(user);
    }

    async blockUser(id: string): Promise<AdminUserResponseDto> {
        const user = await this.userRepo.findOne({ where: { id }, relations: ['profile'] });
        if (!user) throw new NotFoundException('User not found');
        await this.userRepo.update(id, { isActive: false });
        user.isActive = false;
        return this.mapUser(user);
    }

    async unblockUser(id: string): Promise<AdminUserResponseDto> {
        const user = await this.userRepo.findOne({ where: { id }, relations: ['profile'] });
        if (!user) throw new NotFoundException('User not found');
        await this.userRepo.update(id, { isActive: true, failedLoginAttempts: 0, accountLockedUntil: undefined });
        user.isActive = true;
        return this.mapUser(user);
    }

    private mapUser(user: User): AdminUserResponseDto {
        return {
            id: user.id,
            email: user.email,
            phone: user.phone,
            role: user.role,
            isActive: user.isActive,
            isVerified: user.isVerified,
            lastLoginAt: user.lastLoginAt,
            createdAt: user.createdAt,
            displayName: user.profile?.displayName,
            fullName: user.profile?.fullName,
            avatarUrl: user.profile?.avatarUrl,
            averageRating: user.profile?.averageRating ? Number(user.profile.averageRating) : undefined,
            reviewCount: user.profile?.reviewCount,
        };
    }
}
