import { JwtPayload } from '@/modules/auth/interfaces/jwt-payload.interface';
import { Request } from 'express';

export interface AuthenticatedRequest extends Request {
    user: JwtPayload;
}
