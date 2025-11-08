import { BaseResponseDto } from '@/common/dtos/base-response.dto';
import { RegisterResponseDataDto } from '@/modules/auth/dtos/register-response-data.dto';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterResponseDto extends BaseResponseDto<RegisterResponseDataDto> {
  @ApiProperty({ example: true })
  success!: boolean;

  @ApiProperty({ example: 'Register successful' })
  message?: string;

  @ApiProperty({ type: RegisterResponseDataDto })
  data?: RegisterResponseDataDto;
}
