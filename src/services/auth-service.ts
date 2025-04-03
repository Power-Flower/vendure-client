import { AuthLoginSchema, AuthLogoutSchema, AuthRegisterSchema } from '$schemas/auth.schemas';
import { gql } from '$types/astro.types';
import type { AuthLogin, AuthLogout, AuthRegister } from '$types/auth.types';
import type { Result } from '$types/result.types';
import { BaseService } from './base-service';

export class AuthService extends BaseService {
    public async login(
        email: string,
        password: string,
    ): Promise<Result<AuthLogin>> {
        return this.mutate(AuthLoginSchema, {
            mutation: gql`
                mutation($email: String!, $password: String!) {
                    login(username: $email, password: $password, rememberMe: true) {
                        ... on CurrentUser {
                            id
                            identifier
                        }
                        ... on ErrorResult {
                            errorCode
                            message
                        }
                    }
                }
            `,
            variables: {
                email,
                password,
            },
        });
    }

    public async register(
        firstName: string,
        lastName: string,
        email: string,
        password: string,
    ): Promise<Result<AuthRegister>> {
        return this.mutate(AuthRegisterSchema, {
            mutation: gql`
                mutation($input: RegisterCustomerInput!) {
                    registerCustomerAccount(input: $input) {
                        ... on Success {
                            success
                        }
                        ... on ErrorResult {
                            errorCode
                            message
                        }
                    }
                }
            `,
            variables: {
                input: {
                    firstName,
                    lastName,
                    email,
                    password,
                },
            },
        });
    }

    public async logout(): Promise<Result<AuthLogout>> {
        return this.mutate(AuthLogoutSchema, {
            mutation: gql`
                mutation Logout {
                    logout {
                        success
                    }
                }
            `,
        });
    }
}
