import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class RegisterDto {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsEmail()
    email?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    phone?: string;

    @ApiProperty()
    @IsString()
    @MinLength(8)
    password?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    fullName?: string;
}

