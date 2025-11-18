import { PostCustomer } from '@/modules/posts/entities/post.entity';
import { User } from '@/modules/users/entities/user.entity';
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { QuoteStatus } from '../enums/quote-status.enum';

@Entity('quotes')
@Index(['postId', 'providerId', 'status'])
@Index(['providerId', 'status', 'createdAt'])
@Index(['postId', 'status', 'createdAt'])
export class Quote {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ name: 'post_id' })
    @Index()
    postId!: string;

    @ManyToOne(() => PostCustomer, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'post_id' })
    post!: PostCustomer;

    @Column({ name: 'provider_id' })
    @Index()
    providerId!: string;

    @ManyToOne(() => User, { eager: true, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'provider_id' })
    provider!: User;

    @Column({
        type: 'decimal',
        precision: 12,
        scale: 2,
    })
    price!: number;

    @Column({ type: 'text' })
    description!: string;

    @Column({ type: 'text', nullable: true })
    terms?: string;

    @Column({
        name: 'estimated_duration',
        type: 'int',
        nullable: true,
        comment: 'Estimated completion time (minutes)'
    })
    estimatedDuration?: number;

    @Column({
        name: 'image_urls',
        type: 'text',
        array: true,
        nullable: true,
        default: '{}',
    })
    imageUrls: string[] = [];

    @Column({
        type: 'enum',
        enum: QuoteStatus,
        default: QuoteStatus.PENDING,
    })
    status: QuoteStatus = QuoteStatus.PENDING;

    @Column({
        name: 'accepted_at',
        type: 'timestamp with time zone',
        nullable: true
    })
    acceptedAt?: Date;

    @Column({
        name: 'rejected_at',
        type: 'timestamp with time zone',
        nullable: true
    })
    rejectedAt?: Date;

    @Column({
        name: 'cancelled_at',
        type: 'timestamp with time zone',
        nullable: true
    })
    cancelledAt?: Date;

    @Column({
        name: 'rejection_reason',
        type: 'text',
        nullable: true
    })
    rejectionReason?: string;

    @Column({
        name: 'cancellation_reason',
        type: 'text',
        nullable: true
    })
    cancellationReason?: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt!: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt?: Date;

    //methods
    isPending(): boolean {
        return this.status === QuoteStatus.PENDING && !this.deletedAt;
    }

    isAccepted(): boolean {
        return this.status === QuoteStatus.ACCEPTED;
    }

    isRejected(): boolean {
        return this.status === QuoteStatus.REJECTED;
    }

    isCancelled(): boolean {
        return this.status === QuoteStatus.CANCELLED;
    }

    canEdit(): boolean {
        return this.status === QuoteStatus.PENDING && !this.deletedAt;
    }

    canCancel(): boolean {
        return this.status === QuoteStatus.PENDING && !this.deletedAt;
    }

    belongsTo(providerId: string): boolean {
        return this.providerId === providerId;
    }
}