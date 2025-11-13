import { Injectable } from '@nestjs/common';
import { LoginResponseDto } from '../dtos/login-response.dto';
import { HealthCheckResponse, LoginResult, RegisterResult, SuccessResponse, TokenRefreshResult } from '../interfaces';

@Injectable()
export class AuthResponseBuilder {
    buildRegisterResponse(result: RegisterResult): SuccessResponse<RegisterResult> {
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

    buildRefreshResponse(accessToken: string): SuccessResponse<{ accessToken: string }> {
        return {
            success: true,
            message: 'Token refreshed successfully',
            data: {
                accessToken,
            },
        };
    }

    buildRefreshMobileResponse(tokens: TokenRefreshResult): SuccessResponse<TokenRefreshResult> {
        return {
            success: true,
            message: 'Token refreshed successfully',
            data: {
                accessToken: tokens.accessToken,
                refreshToken: tokens.refreshToken,
            },
        };
    }

    buildLogoutResponse(): SuccessResponse<void> {
        return {
            success: true,
            message: 'Logout successful',
        };
    }

    buildLogoutAllResponse(): SuccessResponse<void> {
        return {
            success: true,
            message: 'Logged out from all devices successfully',
        };
    }

    buildLogoutDeviceResponse(): SuccessResponse<void> {
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