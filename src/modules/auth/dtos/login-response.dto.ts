import { BaseResponseDto } from '@/common/dtos/base-response.dto';
import { ApiProperty } from '@nestjs/swagger';
import { LoginResponseDataDto } from './login-response-data.dto';

export class LoginResponseDto extends BaseResponseDto<LoginResponseDataDto> {
    @ApiProperty({ example: true })
    success!: boolean;

    @ApiProperty({ example: 'Login successful' })
    message?: string;

    @ApiProperty({ type: LoginResponseDataDto })
    data!: LoginResponseDataDto;
}

