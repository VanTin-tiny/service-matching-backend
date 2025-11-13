import { BaseResponseDto } from '@/common/dtos/base-response.dto';
import { ErrorResponseDto } from '@/common/dtos/error-response.dto';
import { HealthCheckResponse } from '@/common/tests//health-check-response.interface';
import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Req,
    Res,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import {
    ApiCreatedResponse,
    ApiExcludeEndpoint,
    ApiForbiddenResponse,
    ApiHeader,
    ApiInternalServerErrorResponse,
    ApiOkResponse,
    ApiOperation,
    ApiTags,
    ApiUnauthorizedResponse
} from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { DeviceId } from './decorators/device-id.decorator';
import { LoginMobileDto } from './dtos/login-mobile.dto';
import { LoginResponseDto } from './dtos/login-response.dto';
import { LoginDto } from './dtos/login.dto';
import { RegisterResponseDto } from './dtos/register-response.dto';
import { RegisterDto } from './dtos/register.dto';
import { TokenResponseDto } from './dtos/token-response.dto';
import { DeviceIdValidationPipe } from './pipes/device-id-validation.pipe';
import { AuthResponseBuilder } from './services/auth-response-builder.service';
import { CookieService } from './services/cookie.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly cookieService: CookieService,
        private readonly responseBuilder: AuthResponseBuilder,
    ) { }

    @Get('health')
    @ApiExcludeEndpoint()
    @ApiTags('Auth - Common')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: 'Health check auth',
        description: 'Check if the authentication service is healthy',
    })
    @ApiOkResponse({
        description: 'Service is healthy',
    })
    healthCheck(): HealthCheckResponse {
        return this.responseBuilder.buildHealthCheckResponse();
    }



    // REGISTER
    @Post('register')
    @ApiTags('Auth - Common')
    @HttpCode(HttpStatus.CREATED)
    @Throttle({ default: { limit: 5, ttl: 60000 } })
    @ApiOperation({
        summary: 'Register a new user',
        description: 'Create a new account using email, phone, and password.',
    })
    @ApiCreatedResponse({
        description: 'Registration successful',
        type: RegisterResponseDto,
    })
    @ApiUnauthorizedResponse({
        description: 'Invalid registration data',
        type: ErrorResponseDto,
    })
    @ApiInternalServerErrorResponse({
        description: 'Internal server error',
        type: ErrorResponseDto,
    })
    @UsePipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }),
    )
    async register(
        @Body() registerDto: RegisterDto,
    ): Promise<RegisterResponseDto> {
        const result = await this.authService.register(registerDto);
        return this.responseBuilder.buildRegisterResponse(result);
    }


    // LOGOUT ALL DEVICES
    @Post('logout-all')
    @ApiTags('Auth - Common')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: 'Logout from all devices',
        description: 'Revoke all refresh tokens for the current user.',
    })
    @ApiOkResponse({
        description: 'Logged out from all devices successfully',
    })
    @ApiUnauthorizedResponse({
        description: 'Invalid or missing token',
        type: ErrorResponseDto,
    })
    async logoutAll(
        @Req() req: Request,
        @Body('refreshToken') bodyRefreshToken: string,
        @Res({ passthrough: true }) res: Response,
    ): Promise<BaseResponseDto<void>> {
        const refreshToken = this.cookieService.extractRefreshTokenFromCookie(req) ?? bodyRefreshToken;

        await this.authService.revokeAllUserTokens(refreshToken);

        this.cookieService.clearRefreshTokenCookie(res);

        return this.responseBuilder.buildLogoutAllResponse();
    }

    // LOGIN WEB
    @Post('login')
    @ApiTags('Auth - Web')
    @HttpCode(HttpStatus.OK)
    @Throttle({ default: { limit: 10, ttl: 60000 } })
    @ApiOperation({
        summary: 'Login (Web)',
        description: 'Authenticate user via web browser. Refresh token stored in httpOnly cookie.',
    })
    @ApiOkResponse({
        description: 'Login successful',
        type: LoginResponseDto,
    })
    @ApiUnauthorizedResponse({
        description: 'Invalid credentials',
        type: ErrorResponseDto,
    })
    @ApiForbiddenResponse({
        description: 'Account not activated',
        type: ErrorResponseDto,
    })
    @ApiInternalServerErrorResponse({
        description: 'Internal server error',
        type: ErrorResponseDto,
    })
    @UsePipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }),
    )
    async login(
        @Body() loginDto: LoginDto,
        @Res({ passthrough: true }) res: Response,
    ): Promise<LoginResponseDto> {
        const result = await this.authService.login(loginDto);

        this.cookieService.setRefreshTokenCookie(res, result.refreshToken);

        return this.responseBuilder.buildLoginResponse(result);
    }


    // REFRESH TOKEN (WEB)
    @Post('refresh')
    @ApiTags('Auth - Web')
    @HttpCode(HttpStatus.OK)
    @Throttle({ default: { limit: 20, ttl: 60000 } })
    @ApiOperation({
        summary: 'Refresh access token (Web)',
        description: 'Generate new tokens using refresh token from cookie.',
    })
    @ApiOkResponse({
        description: 'Token refreshed successfully',
    })
    @ApiUnauthorizedResponse({
        description: 'Invalid or expired refresh token',
        type: ErrorResponseDto,
    })
    async refresh(
        @Req() req: Request,
        @Res({ passthrough: true }) res: Response,
    ): Promise<BaseResponseDto<{ accessToken: string }>> {
        const refreshToken = this.cookieService.extractRefreshTokenFromCookie(req);

        const tokens = await this.authService.refreshAccessToken(
            { refreshToken, deviceId: undefined },
        );

        this.cookieService.setRefreshTokenCookie(res, tokens.refreshToken);

        return this.responseBuilder.buildRefreshResponse(tokens.accessToken);
    }
    // LOGOUT (WEB)
    @Post('logout')
    @ApiTags('Auth - Web')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: 'Logout (Web)',
        description: 'Revoke refresh token and clear cookie.',
    })
    @ApiOkResponse({
        description: 'Logout successful',
    })
    @ApiUnauthorizedResponse({
        description: 'Invalid or missing token',
        type: ErrorResponseDto,
    })
    async logout(
        @Req() req: Request,
        @Res({ passthrough: true }) res: Response,
    ): Promise<BaseResponseDto<void>> {
        const refreshToken = this.cookieService.extractRefreshTokenFromCookie(req);

        await this.authService.revokeRefreshToken({
            refreshToken,
            deviceId: undefined,
        });

        this.cookieService.clearRefreshTokenCookie(res);

        return this.responseBuilder.buildLogoutResponse();
    }


    // LOGIN MOBILE
    @Post('login-mobile')
    @ApiTags('Auth - Mobile')
    @HttpCode(HttpStatus.OK)
    @Throttle({ default: { limit: 10, ttl: 60000 } })
    @ApiOperation({
        summary: 'Login (Mobile)',
        description: 'Authenticate user via mobile app. Requires X-Device-ID header.',
    })
    @ApiHeader({
        name: 'X-Device-ID',
        description: 'Unique device identifier (UUID recommended)',
        required: true,
    })
    @ApiOkResponse({
        description: 'Login successful',
        type: LoginResponseDto,
    })
    @ApiUnauthorizedResponse({
        description: 'Invalid credentials',
        type: ErrorResponseDto,
    })
    @ApiInternalServerErrorResponse({
        description: 'Internal server error',
        type: ErrorResponseDto,
    })
    @UsePipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }),
    )
    async loginMobile(
        @Body() loginDto: LoginMobileDto,
        @DeviceId(DeviceIdValidationPipe) deviceId: string,
    ): Promise<LoginResponseDto> {
        const result = await this.authService.loginMobile({
            ...loginDto,
            deviceId,
        });

        return this.responseBuilder.buildLoginMobileResponse(result);
    }



    // REFRESH TOKEN (MOBILE)
    @Post('refresh-mobile')
    @ApiTags('Auth - Mobile')
    @HttpCode(HttpStatus.OK)
    @Throttle({ default: { limit: 20, ttl: 60000 } })
    @ApiOperation({
        summary: 'Refresh access token (Mobile)',
        description: 'Generate new tokens using refresh token from request body.',
    })
    @ApiHeader({
        name: 'X-Device-ID',
        description: 'Unique device identifier',
        required: true,
    })
    @ApiOkResponse({
        description: 'Token refreshed successfully',
    })
    @ApiUnauthorizedResponse({
        description: 'Invalid or expired refresh token',
        type: ErrorResponseDto,
    })
    async refreshMobile(
        @Body('refreshToken') refreshToken: string,
        @DeviceId(DeviceIdValidationPipe) deviceId: string,
    ): Promise<TokenResponseDto> {
        const tokens = await this.authService.refreshAccessToken({
            refreshToken,
            deviceId,
        });

        return this.responseBuilder.buildRefreshMobileResponse(tokens);
    }


    // LOGOUT (MOBILE)
    @Post('logout-mobile')
    @ApiTags('Auth - Mobile')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: 'Logout (Mobile)',
        description: 'Revoke refresh token for specific device.',
    })
    @ApiHeader({
        name: 'X-Device-ID',
        description: 'Unique device identifier',
        required: true,
    })
    @ApiOkResponse({
        description: 'Logout successful',
    })
    @ApiUnauthorizedResponse({
        description: 'Invalid or missing token',
        type: ErrorResponseDto,
    })
    async logoutMobile(
        @Body('refreshToken') refreshToken: string,
        @DeviceId(DeviceIdValidationPipe) deviceId: string,
    ): Promise<BaseResponseDto<void>> {
        await this.authService.revokeRefreshToken({ refreshToken, deviceId });

        return this.responseBuilder.buildLogoutResponse();
    }


    // LOGOUT DEVICE (MOBILE)
    @Post('logout-device')
    @ApiTags('Auth - Mobile')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: 'Logout specific device (Mobile)',
        description: 'Revoke all tokens for a specific device.',
    })
    @ApiHeader({
        name: 'X-Device-ID',
        description: 'Device identifier to logout',
        required: true,
    })
    @ApiOkResponse({
        description: 'Device logged out successfully',
    })
    @ApiUnauthorizedResponse({
        description: 'Invalid or missing token',
        type: ErrorResponseDto,
    })
    async logoutDevice(
        @Body('refreshToken') refreshToken: string,
        @DeviceId(DeviceIdValidationPipe) deviceId: string,
    ): Promise<BaseResponseDto<void>> {
        await this.authService.revokeAllDeviceTokens(refreshToken, deviceId);

        return this.responseBuilder.buildLogoutDeviceResponse();
    }
}