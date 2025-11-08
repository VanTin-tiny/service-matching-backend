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
    id!: string
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

    @Column({ length: 255, nullable: true })
    fullName?: string;

    @Column({ name: 'avatar_url', length: 500, nullable: true })
    avatarUrl?: string;

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
    }

    isAdmin(): boolean {
        return this.role === UserRole.ADMIN;
    }
}