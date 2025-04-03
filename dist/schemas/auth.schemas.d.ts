export declare const AuthLoginSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    login: {
        id: string;
        identifier: string;
    };
}, false>;
export declare const AuthRegisterSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    registerCustomerAccount: {
        success: boolean;
    };
}, false>;
export declare const AuthLogoutSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    logout: {
        success: boolean;
    };
}, false>;
