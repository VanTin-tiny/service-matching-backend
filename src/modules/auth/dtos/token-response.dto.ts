import { BaseResponseDto } from '@/common/dtos/base-response.dto';
import { TokenResponseDataDto } from '@/modules/auth/dtos/token-response-data.dto';
import { ApiProperty } from '@nestjs/swagger';

export class TokenResponseDto extends BaseResponseDto<TokenResponseDataDto> {
  @ApiProperty({ example: true })
  success!: boolean;

  @ApiProperty({ example: 'Register successful' })
  message?: string; 

  @ApiProperty({ type: TokenResponseDataDto })
  data?: TokenResponseDataDto;
}
