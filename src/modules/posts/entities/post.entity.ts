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

@Entity('post-customer')
@Index(['createdAt'])
export class PostCustomer {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ length: 255 })
    title!: string;

    @Column({ type: 'text' })
    description!: string;

    @Column({
        name: 'image_urls',
        type: 'text',
        array: true,
        nullable: true,
    })
    imageUrls?: string[];

    @Column({ length: 255, nullable: true })
    location?: string;

    @Column({ type: 'timestamp with time zone', name: 'desired_time', nullable: true })
    desiredTime?: Date;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    budget?: number;

    @Column({ name: 'is_closed', default: false })
    isClosed!: boolean;

    @ManyToOne(() => User, { eager: true, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'customer_id' })
    customer!: User;

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt!: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt?: Date;
}
