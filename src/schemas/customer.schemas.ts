import { a } from '@arrirpc/schema';

export const CountrySchema = a.object({
    id: a.string(),
    code: a.string(),
    name: a.string(),
    enabled: a.boolean(),
});

export const AddressSchema = a.object({
    id: a.string(),
    fullName: a.string(),
    company: a.string(),
    streetLine1: a.string(),
    streetLine2: a.string(),
    city: a.string(),
    province: a.string(),
    postalCode: a.string(),
    country: CountrySchema,
    phoneNumber: a.string(),
    defaultShippingAddress: a.boolean(),
    defaultBillingAddress: a.boolean(),
});

export const CustomerSchema = a.object({
    id: a.string(),
    title: a.string(),
    firstName: a.string(),
    lastName: a.string(),
    phoneNumber: a.string(),
    emailAddress: a.string(),
    addresses: a.array(AddressSchema),
    // orders: OrderListSchema,
    customFields: a.object({
        subscribedUntil: a.nullable(a.timestamp()),
    }),
});

export const GetActiveCustomerSchema = a.object({
    activeCustomer: a.nullable(CustomerSchema),
});

export const CreateCustomerAddressSchema = a.object({
    createCustomerAddress: AddressSchema,
});

export const UpdateCustomerAddressSchema = a.object({
    updateCustomerAddress: AddressSchema,
});

export const DeleteCustomerAddressSchema = a.object({
    deleteCustomerAddress: a.object({
        success: a.boolean(),
    }),
});
