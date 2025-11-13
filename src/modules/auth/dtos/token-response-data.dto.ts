import { ApiProperty } from '@nestjs/swagger';

export class TokenResponseDataDto {
    @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6...' })
    accessToken!: string;

    @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6...' })
    refreshToken?: string;
}
