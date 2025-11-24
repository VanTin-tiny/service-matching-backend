import { CorrelationIdInterceptor } from '@/common/interceptors/correlation-id.interceptor';
import { LoggingInterceptor } from '@/common/interceptors/logging.interceptor';
import { TransactionInterceptor } from '@/common/interceptors/transaction.interceptor';
import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { RefreshToken } from './entities/refresh-token.entity';
import { RefreshTokenRepository } from './repositories/refresh-token.repository';
import { AuthConfigService } from './services/auth-config.service';
import { AuthResponseBuilder } from './services/auth-response-builder.service';
import { AuthenticationFactory } from './services/authentication-factory.service';
import { CookieService } from './services/cookie.service';
import { TokenManagementService } from './services/token-management.service';
import { UserValidationService } from './services/user-validation.service';
import { ProfileModule } from '@/modules/profile/profile.module';

@Module({
    imports: [
        UsersModule,
        ProfileModule,
        TypeOrmModule.forFeature([RefreshToken]),
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        TokenManagementService,
        UserValidationService,
        AuthenticationFactory,
        AuthConfigService,
        CookieService,
        AuthResponseBuilder,
        RefreshTokenRepository,
        {
            provide: APP_INTERCEPTOR,
            useClass: CorrelationIdInterceptor,
        },
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggingInterceptor,
        },
        {
            provide: APP_INTERCEPTOR,
            useClass: TransactionInterceptor,
        },
    ],
    exports: [AuthService, TokenManagementService,
        UserValidationService,],
})
export class AuthModule { }