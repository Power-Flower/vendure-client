import { a } from '@arrirpc/schema';

export const AuthLoginSchema = a.object({
    login: a.object({
        id: a.string(),
        identifier: a.string(),
    }),
});

export const AuthRegisterSchema = a.object({
    registerCustomerAccount: a.object({
        success: a.boolean(),
    }),
});

export const AuthLogoutSchema = a.object({
    logout: a.object({
        success: a.boolean(),
    }),
});