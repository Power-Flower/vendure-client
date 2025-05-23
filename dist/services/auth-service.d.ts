import type { AuthLogin, AuthLogout, AuthRegister } from '../types/auth.types';
import type { Result } from '../types/result.types';
import { BaseService } from './base-service';
export declare class AuthService extends BaseService {
    login(email: string, password: string): Promise<Result<AuthLogin>>;
    register(firstName: string, lastName: string, email: string, password: string): Promise<Result<AuthRegister>>;
    logout(): Promise<Result<AuthLogout>>;
}
