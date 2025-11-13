import { ErrorResponseDto } from '@/common/dtos/error-response.dto';
import { JwtService } from '@/common/services/jwt.service';
import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    Req,
    Res,
    UnauthorizedException,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import {
    ApiCreatedResponse,
    ApiForbiddenResponse,
    ApiInternalServerErrorResponse,
    ApiOkResponse,
    ApiOperation,
    ApiTags,
    ApiUnauthorizedResponse
} from '@nestjs/swagger';
import { AuthService } from '../services/auth.service';
import { LoginResponseDto } from '../dtos/login-response.dto';
import { LoginDto } from '../dtos/login.dto';
import { RegisterResponseDto } from '../dtos/register-response.dto';
import { RegisterDto } from '../dtos/register.dto';


@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService,
        private readonly jwtService: JwtService
    ) { }

    //REGISTER
    @Post('register')
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({
        summary: 'Register a new student',
        description: 'Register a new account using email and password.',
    })
    @ApiCreatedResponse({
        description: 'Register successful',
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
    @UsePipes(new ValidationPipe({ whitelist: true }))
    async register(@Body() registerDto: RegisterDto) {
        const result = await this.authService.register(registerDto);
        return {
            success: true,
            message: 'Register successful',
            data: result
        };
    }

    //LOGIN
    @Post('login')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: 'Login a student',
        description: 'Authenticate student and return JWT tokens.',
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
    @UsePipes(new ValidationPipe({ whitelist: true }))
    async login(
        @Body() loginDto: LoginDto,
        @Res({ passthrough: true }) res,
    ) {
        const result = await this.authService.login(loginDto);

        //save refreshToken(cookie)
        res.cookie('refreshToken', result.refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
            path: '/',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return {
            success: true,
            message: 'Login successful',
            data: {
                accessToken: result.accessToken,
                user: result.user,
            },
        };
    }


    //REFRESH
    @Post('refresh')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: 'Refresh access token',
        description: 'Generate new access token using refresh token from cookies.',
    })
    @ApiOkResponse({
        description: 'Token refreshed successfully',
        type: LoginResponseDto,
    })
    @ApiUnauthorizedResponse({
        description: 'Invalid or expired refresh token',
        type: ErrorResponseDto,
    })
    async refresh(@Req() req, @Res({ passthrough: true }) res) {
        const refreshToken = req.cookies?.refreshToken;
        if (!refreshToken) throw new UnauthorizedException('Refresh token not found');

        const payload = this.jwtService.verifyRefreshToken(refreshToken);

        const isValidRefreshToken = await this.authService.validateRefreshToken(payload.id, refreshToken);
        if (!isValidRefreshToken) {
            throw new UnauthorizedException('Invalid or expired refresh token');
        }

        const newAccessToken = this.jwtService.generateAccessToken(payload);
        const newRefreshToken = this.jwtService.generateRefreshToken(payload);

        await this.authService.updateRefreshToken(payload.id, refreshToken, newRefreshToken);

        res.cookie('refreshToken', newRefreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
            path: '/',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return {
            success: true,
            message: 'Token refreshed successfully',
            data: {
                accessToken: newAccessToken,
            },

        };
    }

    //LOGOUT
    @Post('logout')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({
        summary: 'Logout a user',
        description: 'Clear refresh token cookie to logout.',
    })
    @ApiUnauthorizedResponse({
        description: 'Invalid or missing token',
        type: ErrorResponseDto,
    })
    async logout(@Req() req, @Res({ passthrough: true }) res) {
        const refreshToken = req.cookies?.refreshToken;
        if (!refreshToken) {
            throw new UnauthorizedException('Refresh token not found');
        }
        const payload = this.jwtService.verifyRefreshToken(refreshToken);
        await this.authService.revokeRefreshToken(payload.id, refreshToken);
        res.clearCookie('refreshToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
            path: '/',
        });

        return {
            success: true,
            message: 'Logout successful',
        };
    }
}


