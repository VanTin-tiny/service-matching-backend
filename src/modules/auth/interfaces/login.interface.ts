import { UserRole } from '@/common/enums//user-role.enum';

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
