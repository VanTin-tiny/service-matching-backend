import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from '../auth/services/auth.service';
import { User } from '../users/entities/user.entity';
import { AuthController } from './controllers/auth.controller';
import { RefreshToken } from './entities/refresh-token.entity';
import { RefreshTokenRepository } from './repositories/refresh-token.repository';
import { UserRepository } from './repositories/user.repository';
@Module({
    imports: [TypeOrmModule.forFeature([User, RefreshToken])],
    controllers: [AuthController],
    providers: [AuthService, UserRepository, RefreshTokenRepository],
    exports: [AuthService],
})
export class AuthModule { }
