import type {
    AddressSchema,
    CreateCustomerAddressSchema,
    CountrySchema,
    CustomerSchema,
    DeleteCustomerAddressSchema,
    GetActiveCustomerSchema,
    UpdateCustomerAddressSchema,
} from '$schemas/customer.schemas';
import type { a } from '@arrirpc/schema';

export type Country = a.infer<typeof CountrySchema>;

export type Address = a.infer<typeof AddressSchema>;

export type Customer = a.infer<typeof CustomerSchema>;

export type GetActiveCustomer = a.infer<typeof GetActiveCustomerSchema>;

export type CreateCustomerAddress = a.infer<typeof CreateCustomerAddressSchema>;

export type UpdateCustomerAddress = a.infer<typeof UpdateCustomerAddressSchema>;

export type DeleteCustomerAddress = a.infer<typeof DeleteCustomerAddressSchema>;
