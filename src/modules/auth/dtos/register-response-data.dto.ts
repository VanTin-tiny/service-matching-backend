import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class RegisterResponseDataDto {
    @ApiProperty({ example: '1a2b3c4d-5678-90ef' })
    id!: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsEmail()
    email?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    phone?: string;


    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    fullName?: string;
}



