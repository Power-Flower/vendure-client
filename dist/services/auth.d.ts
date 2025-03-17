import { AuthLoginSchema, AuthRegisterSchema } from '../schemas/index.ts';
import { BaseService } from './index.ts';
import { type AResult } from '../types/index.ts';
export declare class Auth extends BaseService {
    login(email: string, password: string): Promise<AResult<typeof AuthLoginSchema>>;
    register(firstName: string, lastName: string, email: string, password: string): Promise<AResult<typeof AuthRegisterSchema>>;
}
