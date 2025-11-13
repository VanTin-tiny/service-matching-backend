import { JwtService } from '@/common/services/jwt.service';
import { toJwtPayload } from '@/modules/auth/mappers/user-to-jwt-payload.mapper';
import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { LoginResponseDataDto } from '../dtos/login-response-data.dto';
import { LoginDto } from '../dtos/login.dto';
import { RegisterResponseDataDto } from '../dtos/register-response-data.dto';
import { RegisterDto } from '../dtos/register.dto';
import { RefreshTokenRepository } from '../repositories/refresh-token.repository';
import { UserRepository } from '../repositories/user.repository';
@Injectable()
export class AuthService {
    constructor(
        private readonly userRepo: UserRepository,
        private readonly jwtService: JwtService,
        private readonly refreshTokenRepo: RefreshTokenRepository,

    ) { }

    async register(data: RegisterDto): Promise<RegisterResponseDataDto> {
        const existingEmailUser = await this.userRepo.findByEmail(data.email!.toLowerCase());

        if (existingEmailUser) {
            throw new ConflictException({
                code: 'EMAIL_ALREADY_REGISTERED',
                message: 'Email already registered',
            });
        }

        const existingPhoneUser = await this.userRepo.findByPhone(data.phone!);
        if (existingPhoneUser) {
            throw new ConflictException({
                code: 'PHONE_ALREADY_REGISTERED',
                message: 'Phone already registered',
            });
        }

        const passwordHash = await bcrypt.hash(data.password!, 12);
        const user = await this.userRepo.createUser({
            email: data.email?.toLowerCase(),
            phone: data.phone,
            fullName: data.fullName,
            passwordHash,
        });


        const responseRegisterData: RegisterResponseDataDto = {
            id: user.id,
            email: user.email,
            phone: user.phone,
            fullName: user.fullName,
        }

        return responseRegisterData
    }


    async login(data: LoginDto): Promise<LoginResponseDataDto> {
        const user = await this.userRepo.findByIdentifier(data.identifier);

        if (!user) throw new UnauthorizedException({
            code: 'INVALID_CREDENTIALS',
            message: 'Invalid email or phone',
        });

        const isMatch = await bcrypt.compare(data.password, user.passwordHash);
        if (!isMatch) throw new UnauthorizedException({
            code: 'INVALID_CREDENTIALS',
            message: 'Invalid password',
        });


        const payload = toJwtPayload(user);

        const accessToken = this.jwtService.generateAccessToken(payload);
        const refreshToken = this.jwtService.generateRefreshToken(payload);

        const tokenHash = await bcrypt.hash(refreshToken, 10)
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

        await this.refreshTokenRepo.deleteOldest(user.id); //delete token old
        await this.refreshTokenRepo.saveToken(user.id, tokenHash, expiresAt);


        const responseLoginData: LoginResponseDataDto = {
            accessToken,
            refreshToken,
            user: {
                id: user.id,
                email: user.email!,
                phone: user.phone!,
                name: user.fullName!,
                role: user.role
            }
        }

        return responseLoginData
    }

    async validateRefreshToken(userId: string, token: string): Promise<boolean> {
        const tokens = await this.refreshTokenRepo.findByUserId(userId);
        if (tokens.length === 0) return false;
        // escape reuse 
        for (const rt of tokens) {
            const match = await bcrypt.compare(token, rt.tokenHash);
            const notExpired = rt.expiresAt > new Date();
            if (match && notExpired) return true;
        }
        return false;
    }

    async updateRefreshToken(userId: string, oldToken: string, newToken: string): Promise<void> {
        const tokens = await this.refreshTokenRepo.findByUserId(userId);
        for (const rt of tokens) {
            const match = await bcrypt.compare(oldToken, rt.tokenHash);
            if (match) {
                await this.refreshTokenRepo.deleteById(rt.id);
                break;
            }
        }

        const tokenHash = await bcrypt.hash(newToken, 10);
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        await this.refreshTokenRepo.saveToken(userId, tokenHash, expiresAt);

    }


    async revokeRefreshToken(userId: string, refreshToken: string): Promise<void> {
        const tokens = await this.refreshTokenRepo.findByUserId(userId);
        for (const rt of tokens) {
            const isMatch = await bcrypt.compare(refreshToken, rt.tokenHash);
            if (isMatch) {
                await this.refreshTokenRepo.deleteById(rt.id);
                break;
            }
        }
    }

}
