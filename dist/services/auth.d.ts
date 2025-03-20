import { AuthLoginSchema, AuthRegisterSchema } from '../schemas/auth.schemas';
import { type AResult } from '../types';
import { BaseService } from './base-service';
export declare class Auth extends BaseService {
    login(email: string, password: string): Promise<AResult<typeof AuthLoginSchema>>;
    register(firstName: string, lastName: string, email: string, password: string): Promise<AResult<typeof AuthRegisterSchema>>;
}
