import { a } from '@arrirpc/schema';
import { type AddressSchema, CreateCustomerAddressSchema, DeleteCustomerAddressSchema, GetActiveCustomerSchema, UpdateCustomerAddressSchema } from '../schemas/customer.schemas';
import { type AResult } from '../types';
import { BaseService } from './base-service';
export declare class Customer extends BaseService {
    getActiveCustomer(): Promise<AResult<typeof GetActiveCustomerSchema>>;
    createCustomerAddress(input: a.infer<typeof AddressSchema>): Promise<AResult<typeof CreateCustomerAddressSchema>>;
    updateCustomerAddress(input: a.infer<typeof AddressSchema>): Promise<AResult<typeof UpdateCustomerAddressSchema>>;
    deleteCustomerAddress(id: string): Promise<AResult<typeof DeleteCustomerAddressSchema>>;
}
