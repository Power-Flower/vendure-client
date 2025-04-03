import type { AuthLoginSchema, AuthLogoutSchema, AuthRegisterSchema } from '../schemas/auth.schemas';
import type { a } from '@arrirpc/schema';
export type AuthLogin = a.infer<typeof AuthLoginSchema>;
export type AuthRegister = a.infer<typeof AuthRegisterSchema>;
export type AuthLogout = a.infer<typeof AuthLogoutSchema>;
