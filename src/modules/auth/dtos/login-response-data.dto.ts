import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class LoginResponseDataDto {
    @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
    accessToken!: string;

    @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
    refreshToken!: string;

    @ApiProperty({
        example: {
            id: '1a2b3c4d-5678-90ef',
            email: 'user@example.com',
            name: 'Van Tin',
            role: 'CUSTERMOR',
        },
    })
    @IsOptional()
    user?: {
        id: string;
        email: string;
        phone: string;
        name: string;
        role: string;
    };
}
