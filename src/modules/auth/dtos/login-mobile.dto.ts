import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginMobileDto {
    @ApiProperty({ description: 'Email or phone' })
    @IsString()
    identifier!: string;

    @ApiProperty()
    @IsString()
    password!: string;
}
