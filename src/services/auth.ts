import { a } from '@arrirpc/schema';
import { AuthLoginSchema, AuthRegisterSchema } from '../schemas/auth.schemas';
import { type AResult, gql } from '../types';
import { BaseService } from './base-service';

export class Auth extends BaseService {
    public async login(
        email: string,
        password: string,
    ): Promise<AResult<typeof AuthLoginSchema>> {
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
    ): Promise<AResult<typeof AuthRegisterSchema>> {
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
