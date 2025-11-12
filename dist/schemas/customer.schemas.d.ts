export declare const CountrySchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    name: string;
    enabled: boolean;
    code: string;
}, false>;
export declare const AddressSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    fullName: string;
    company: string;
    streetLine1: string;
    streetLine2: string;
    city: string;
    province: string;
    postalCode: string;
    country: {
        id: string;
        name: string;
        enabled: boolean;
        code: string;
    };
    phoneNumber: string;
    defaultShippingAddress: boolean;
    defaultBillingAddress: boolean;
}, false>;
export declare const CustomerSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    customFields: {
        subscribedUntil: Date | null;
    };
    phoneNumber: string;
    title: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    addresses: {
        id: string;
        fullName: string;
        company: string;
        streetLine1: string;
        streetLine2: string;
        city: string;
        province: string;
        postalCode: string;
        country: {
            id: string;
            name: string;
            enabled: boolean;
            code: string;
        };
        phoneNumber: string;
        defaultShippingAddress: boolean;
        defaultBillingAddress: boolean;
    }[];
}, false>;
export declare const GetActiveCustomerSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    activeCustomer: {
        id: string;
        customFields: {
            subscribedUntil: Date | null;
        };
        phoneNumber: string;
        title: string;
        firstName: string;
        lastName: string;
        emailAddress: string;
        addresses: {
            id: string;
            fullName: string;
            company: string;
            streetLine1: string;
            streetLine2: string;
            city: string;
            province: string;
            postalCode: string;
            country: {
                id: string;
                name: string;
                enabled: boolean;
                code: string;
            };
            phoneNumber: string;
            defaultShippingAddress: boolean;
            defaultBillingAddress: boolean;
        }[];
    } | null;
}, false>;
export declare const CreateCustomerAddressSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    createCustomerAddress: {
        id: string;
        fullName: string;
        company: string;
        streetLine1: string;
        streetLine2: string;
        city: string;
        province: string;
        postalCode: string;
        country: {
            id: string;
            name: string;
            enabled: boolean;
            code: string;
        };
        phoneNumber: string;
        defaultShippingAddress: boolean;
        defaultBillingAddress: boolean;
    };
}, false>;
export declare const UpdateCustomerAddressSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    updateCustomerAddress: {
        id: string;
        fullName: string;
        company: string;
        streetLine1: string;
        streetLine2: string;
        city: string;
        province: string;
        postalCode: string;
        country: {
            id: string;
            name: string;
            enabled: boolean;
            code: string;
        };
        phoneNumber: string;
        defaultShippingAddress: boolean;
        defaultBillingAddress: boolean;
    };
}, false>;
export declare const DeleteCustomerAddressSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    deleteCustomerAddress: {
        success: boolean;
    };
}, false>;
