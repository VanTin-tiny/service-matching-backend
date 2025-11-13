import { UserRole } from '@/common/enums//user-role.enum';

export interface LoginMobileInput {
    identifier: string;
    password: string;
    deviceId: string;
}


export interface LoginWebInput {
    identifier: string;
    password: string;
}

export interface LoginResult {
    accessToken: string;
    refreshToken?: string;
    user?: {
        id: string;
        email?: string;
        phone?: string;
        name?: string;
        role?: UserRole;
    };
}
