import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(User)
        private readonly repo: Repository<User>,
    ) { }

    async findByEmail(email: string): Promise<User | null> {
        return this.repo.findOne({ where: { email } });
    }

    async findByPhone(phone: string): Promise<User | null> {
        return this.repo.findOne({ where: { phone } });
    }

    async findByIdentifier(identifier: string): Promise<User | null> {
        return this.repo.findOne({
            where: [
                { email: identifier.toLowerCase() },
                { phone: identifier },
            ],
            select: ['id', 'email', 'phone', 'fullName', 'role', 'passwordHash'],
        });
    }

    async createUser(data: Partial<User>): Promise<User> {
        const entity = this.repo.create(data);
        return this.repo.save(entity);
    }
}
