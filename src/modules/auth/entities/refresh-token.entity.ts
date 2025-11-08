import { User } from '@/modules/users/entities/user.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    Unique
} from 'typeorm';

@Entity('refresh_tokens')
@Unique(['tokenHash'])
@Index('idx_refresh_expires', ['expiresAt'])
export class RefreshToken {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ name: 'user_id' })
    @Index('idx_refresh_user')
    userId!: string;

    @ManyToOne(() => User, (u) => u.refreshTokens, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user!: User;

    @Column({ name: 'token_hash', length: 500 })
    tokenHash!: string;

    @Column({ type: 'timestamp with time zone', name: 'expires_at' })
    expiresAt!: Date;

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;
}