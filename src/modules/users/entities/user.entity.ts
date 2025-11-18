import { UserRole } from '@/common/enums/user-role.enum';
import { RefreshToken } from '@/modules/auth/entities/refresh-token.entity';
import {
    BeforeInsert,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    Index,
    OneToMany,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn
} from 'typeorm';

@Entity('users')
@Unique(['email'])
@Index(['role', 'deletedAt'])
@Index(['createdAt'])
export class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ length: 255, nullable: true })
    @Index()
    email?: string;

    @Column({ length: 20, nullable: true })
    @Index()
    phone?: string;

    @Column({ name: 'password_hash', length: 255, nullable: true, select: false })
    passwordHash!: string;

    @Column({ type: 'enum', enum: UserRole, default: UserRole.CUSTOMER })
    role: UserRole = UserRole.CUSTOMER;

    @Column({ name: 'full_name', length: 255, nullable: true })
    fullName?: string;

    @Column({ name: 'display_name', length: 100, nullable: true })
    displayName?: string;

    @Column({ name: 'avatar_url', length: 500, nullable: true })
    avatarUrl?: string;

    @Column({ type: 'text', nullable: true })
    bio?: string;

    @Column({ length: 255, nullable: true })
    address?: string;

    @Column({ type: 'date', nullable: true })
    birthday?: Date;

    @Column({ length: 10, nullable: true })
    gender?: string;

    // Tracking cho thay đổi tên hiển thị
    @Column({
        name: 'last_display_name_change',
        type: 'timestamp with time zone',
        nullable: true
    })
    lastDisplayNameChange?: Date;

    @Column({
        name: 'display_name_change_count',
        type: 'int',
        default: 0
    })
    displayNameChangeCount: number = 0;

    // Account status
    @Column({ name: 'is_verified', default: false })
    isVerified: boolean = false;

    @Column({ name: 'is_active', default: true })
    isActive: boolean = true;

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt!: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt?: Date;

    @OneToMany(() => RefreshToken, (rt) => rt.user, { cascade: true })
    refreshTokens?: RefreshToken[];

    @BeforeInsert()
    setDefaults() {
        if (!this.role) this.role = UserRole.CUSTOMER;
        if (!this.displayName && this.fullName) {
            this.displayName = this.fullName;
        }
    }

    // Helper methods
    isAdmin(): boolean {
        return this.role === UserRole.ADMIN;
    }

    isCustomer(): boolean {
        return this.role === UserRole.CUSTOMER;
    }

    isWorker(): boolean {
        return this.role === UserRole.PROVIDER;
    }

    canChangeDisplayName(): boolean {
        if (!this.lastDisplayNameChange) return true;

        const daysSinceLastChange = this.getDaysSinceLastDisplayNameChange();
        return daysSinceLastChange >= 30;
    }

    getDaysSinceLastDisplayNameChange(): number {
        if (!this.lastDisplayNameChange) return Infinity;

        const now = new Date();
        const lastChange = new Date(this.lastDisplayNameChange);
        const diffTime = Math.abs(now.getTime() - lastChange.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        return diffDays;
    }

    getDaysUntilCanChangeDisplayName(): number {
        if (!this.lastDisplayNameChange) return 0;

        const daysSinceLastChange = this.getDaysSinceLastDisplayNameChange();
        return Math.max(0, 30 - daysSinceLastChange);
    }
}