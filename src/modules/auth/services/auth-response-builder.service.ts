import { Injectable } from '@nestjs/common';
import { LoginResponseDto } from '../dtos/login-response.dto';
import { RegisterResponseDto } from '../dtos/register-response.dto';
import { LoginResult } from '../interfaces/login.interface';
import { RegisterResult } from '../interfaces/register.interface';

interface SuccessResponse {
    success: boolean;
    message: string;
}

interface TokenResponse {
    accessToken: string;
    refreshToken?: string;
}

interface HealthCheckResponse {
    status: string;
    timestamp: string;
    uptime: number;
}

@Injectable()
export class AuthResponseBuilder {
    buildRegisterResponse(result: RegisterResult): RegisterResponseDto {
        return {
            success: true,
            message: 'Registration successful',
            data: result,
        };
    }

    buildLoginResponse(result: LoginResult): LoginResponseDto {
        return {
            success: true,
            message: 'Login successful',
            data: {
                accessToken: result.accessToken,
                user: result.user,
            },
        };
    }

    buildLoginMobileResponse(result: LoginResult): LoginResponseDto {
        return {
            success: true,
            message: 'Login successful',
            data: {
                accessToken: result.accessToken,
                refreshToken: result.refreshToken,
                user: result.user,
            },
        };
    }

    buildRefreshResponse(accessToken: string): SuccessResponse & { data: { accessToken: string } } {
        return {
            success: true,
            message: 'Token refreshed successfully',
            data: {
                accessToken,
            },
        };
    }

    buildRefreshMobileResponse(tokens: TokenResponse): SuccessResponse & { data: TokenResponse } {
        return {
            success: true,
            message: 'Token refreshed successfully',
            data: {
                accessToken: tokens.accessToken,
                refreshToken: tokens.refreshToken,
            },
        };
    }

    buildLogoutResponse(): SuccessResponse {
        return {
            success: true,
            message: 'Logout successful',
        };
    }

    buildLogoutAllResponse(): SuccessResponse {
        return {
            success: true,
            message: 'Logged out from all devices successfully',
        };
    }

    buildLogoutDeviceResponse(): SuccessResponse {
        return {
            success: true,
            message: 'Device logged out successfully',
        };
    }

    buildHealthCheckResponse(): HealthCheckResponse {
        return {
            status: 'ok',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
        };
    }
}