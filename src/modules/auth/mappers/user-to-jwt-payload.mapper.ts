import { JwtPayload } from '@/modules/auth/interfaces/jwt-payload.interface';
import { User } from '@/modules/users/entities/user.entity';

export function toJwtPayload(user: User): JwtPayload {
    return {
        id: user.id,
        email: user.email!,
        role: user.role,
    };
}
