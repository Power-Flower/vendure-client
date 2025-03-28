import { AuthLoginSchema, AuthRegisterSchema } from '$schemas/auth.schemas';
import { gql } from '$types/astro.types';
import type { AuthLogin, AuthRegister } from '$types/auth.types';
import { type Result, a } from '@arrirpc/schema';
import { BaseService } from './base-service';

export class AuthService extends BaseService {
    public async login(
        email: string,
        password: string,
    ): Promise<Result<AuthLogin>> {
        const response = await this.client.mutate({
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

        return a.parse(AuthLoginSchema, response.data);
    }

    public async register(
        firstName: string,
        lastName: string,
        email: string,
        password: string,
    ): Promise<Result<AuthRegister>> {
        const response = await this.client.mutate({
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

        return a.parse(AuthRegisterSchema, response.data);
    }
}
