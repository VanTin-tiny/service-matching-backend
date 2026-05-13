import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserReport, UserReportStatus } from '../entities/user-report.entity';
import { DateRangeQueryDto } from '../dtos/admin.dto';

@Injectable()
export class AdminViolationsService {
    constructor(
        @InjectRepository(UserReport)
        private readonly reportRepo: Repository<UserReport>,
    ) {}

    async listReports(query: DateRangeQueryDto & { status?: string }): Promise<{
        reports: any[];
        total: number;
        page: number;
        limit: number;
    }> {
        const page = query.page ?? 1;
        const limit = query.limit ?? 20;
        const skip = (page - 1) * limit;

        const qb = this.reportRepo
            .createQueryBuilder('r')
            .leftJoinAndSelect('r.reporter', 'reporter')
            .leftJoinAndSelect('reporter.profile', 'reporterProfile')
            .leftJoinAndSelect('r.reportedUser', 'reportedUser')
            .leftJoinAndSelect('reportedUser.profile', 'reportedProfile')
            .skip(skip)
            .take(limit)
            .orderBy('r.createdAt', 'DESC');

        if (query.from) qb.andWhere('r.created_at >= :from', { from: new Date(query.from) });
        if (query.to) qb.andWhere('r.created_at <= :to', { to: new Date(query.to) });
        if (query.status) qb.andWhere('r.status = :status', { status: query.status });

        const [reports, total] = await qb.getManyAndCount();

        return {
            reports: reports.map(r => this.mapReport(r)),
            total,
            page,
            limit,
        };
    }

    async updateReportStatus(
        id: string,
        status: UserReportStatus,
        adminNotes: string | undefined,
        reviewedById: string,
    ): Promise<any> {
        const report = await this.reportRepo.findOne({
            where: { id },
            relations: ['reporter', 'reporter.profile', 'reportedUser', 'reportedUser.profile'],
        });
        if (!report) throw new NotFoundException('Report not found');

        await this.reportRepo.update(id, {
            status,
            adminNotes,
            reviewedById,
            reviewedAt: new Date(),
        });

        return this.mapReport({ ...report, status, adminNotes, reviewedById, reviewedAt: new Date() });
    }

    async generateViolationsReport(query: DateRangeQueryDto): Promise<string> {
        const qb = this.reportRepo
            .createQueryBuilder('r')
            .leftJoinAndSelect('r.reporter', 'reporter')
            .leftJoinAndSelect('reporter.profile', 'reporterProfile')
            .leftJoinAndSelect('r.reportedUser', 'reportedUser')
            .leftJoinAndSelect('reportedUser.profile', 'reportedProfile')
            .orderBy('r.created_at', 'DESC');

        if (query.from) qb.andWhere('r.created_at >= :from', { from: new Date(query.from) });
        if (query.to) qb.andWhere('r.created_at <= :to', { to: new Date(query.to) });

        const reports = await qb.getMany();

        const headers = [
            'Report ID',
            'Reporter Email',
            'Reporter Name',
            'Reported User Email',
            'Reported User Name',
            'Reason',
            'Description',
            'Status',
            'Admin Notes',
            'Created At',
            'Reviewed At',
        ];

        const rows = reports.map(r => [
            r.id,
            r.reporter?.email ?? '',
            r.reporter?.profile?.displayName ?? r.reporter?.profile?.fullName ?? '',
            r.reportedUser?.email ?? '',
            r.reportedUser?.profile?.displayName ?? r.reportedUser?.profile?.fullName ?? '',
            r.reason,
            `"${(r.description ?? '').replace(/"/g, '""')}"`,
            r.status,
            `"${(r.adminNotes ?? '').replace(/"/g, '""')}"`,
            r.createdAt.toISOString(),
            r.reviewedAt?.toISOString() ?? '',
        ]);

        return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    }

    private mapReport(r: UserReport) {
        return {
            id: r.id,
            reason: r.reason,
            description: r.description,
            status: r.status,
            adminNotes: r.adminNotes,
            reviewedAt: r.reviewedAt,
            createdAt: r.createdAt,
            reporter: r.reporter ? {
                id: r.reporter.id,
                email: r.reporter.email,
                displayName: r.reporter.profile?.displayName,
            } : { id: r.reporterId },
            reportedUser: r.reportedUser ? {
                id: r.reportedUser.id,
                email: r.reportedUser.email,
                displayName: r.reportedUser.profile?.displayName,
                isActive: r.reportedUser.isActive,
            } : { id: r.reportedUserId },
        };
    }
}
