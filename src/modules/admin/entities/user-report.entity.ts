import { User } from '@/modules/users/entities/user.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

export enum UserReportReason {
    FRAUD = 'fraud',
    UNRELIABLE = 'unreliable',
    INAPPROPRIATE = 'inappropriate',
    SPAM = 'spam',
    HARASSMENT = 'harassment',
    FAKE_ACCOUNT = 'fake_account',
    OTHER = 'other',
}

export enum UserReportStatus {
    PENDING = 'pending',
    REVIEWED = 'reviewed',
    DISMISSED = 'dismissed',
    ACTION_TAKEN = 'action_taken',
}

@Entity('user_reports')
@Index(['reportedUserId', 'status'])
@Index(['reporterId', 'reportedUserId'], { unique: true })
@Index(['createdAt'])
export class UserReport {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ name: 'reporter_id' })
    reporterId!: string;

    @ManyToOne(() => User, { onDelete: 'CASCADE', eager: false })
    @JoinColumn({ name: 'reporter_id' })
    reporter!: User;

    @Column({ name: 'reported_user_id' })
    reportedUserId!: string;

    @ManyToOne(() => User, { onDelete: 'CASCADE', eager: false })
    @JoinColumn({ name: 'reported_user_id' })
    reportedUser!: User;

    @Column({ type: 'enum', enum: UserReportReason })
    reason!: UserReportReason;

    @Column({ type: 'text', nullable: true })
    description?: string;

    @Column({
        type: 'enum',
        enum: UserReportStatus,
        default: UserReportStatus.PENDING,
    })
    status: UserReportStatus = UserReportStatus.PENDING;

    @Column({ name: 'admin_notes', type: 'text', nullable: true })
    adminNotes?: string;

    @Column({ name: 'reviewed_by_id', nullable: true })
    reviewedById?: string;

    @Column({ name: 'reviewed_at', type: 'timestamp with time zone', nullable: true })
    reviewedAt?: Date;

    @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
    updatedAt!: Date;
}
