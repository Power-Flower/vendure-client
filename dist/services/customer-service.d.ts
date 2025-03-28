import { AddressSchema } from '../schemas/customer.schemas';
import type { CreateCustomerAddress, DeleteCustomerAddress, GetActiveCustomer, UpdateCustomerAddress } from '../types/customer.types';
import { type Result, a } from '@arrirpc/schema';
import { BaseService } from './base-service';
export declare class CustomerService extends BaseService {
    getActiveCustomer(): Promise<Result<GetActiveCustomer>>;
    createCustomerAddress(input: a.infer<typeof AddressSchema>): Promise<Result<CreateCustomerAddress>>;
    updateCustomerAddress(input: a.infer<typeof AddressSchema>): Promise<Result<UpdateCustomerAddress>>;
    deleteCustomerAddress(id: string): Promise<Result<DeleteCustomerAddress>>;
}
