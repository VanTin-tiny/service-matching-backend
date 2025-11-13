import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class ResetPasswordDto {
    @ApiProperty()
    @IsString()
    identifier!: string; //email or phone

    @ApiProperty()
    @IsString()
    code!: string;

    @ApiProperty()
    @IsString()
    @MinLength(8)
    newPassword!: string;
}
