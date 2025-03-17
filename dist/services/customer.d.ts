import { type AddressSchema, CreateCustomerAddressSchema, DeleteCustomerAddressSchema, GetActiveCustomerSchema, UpdateCustomerAddressSchema } from '../schemas/index.ts';
import { BaseService } from './index.ts';
import { type AResult } from '../types/index.ts';
import { a } from '@arrirpc/schema';
export declare class Customer extends BaseService {
    getActiveCustomer(): Promise<AResult<typeof GetActiveCustomerSchema>>;
    createCustomerAddress(input: a.infer<typeof AddressSchema>): Promise<AResult<typeof CreateCustomerAddressSchema>>;
    updateCustomerAddress(input: a.infer<typeof AddressSchema>): Promise<AResult<typeof UpdateCustomerAddressSchema>>;
    deleteCustomerAddress(id: string): Promise<AResult<typeof DeleteCustomerAddressSchema>>;
}
