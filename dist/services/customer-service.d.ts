import type { Address, CreateCustomerAddress, DeleteCustomerAddress, GetActiveCustomer, UpdateCustomerAddress } from '../types/customer.types';
import type { Result } from '../types/result.types';
import { BaseService } from './base-service';
export declare class CustomerService extends BaseService {
    getActiveCustomer(): Promise<Result<GetActiveCustomer>>;
    createCustomerAddress(input: Address): Promise<Result<CreateCustomerAddress>>;
    updateCustomerAddress(input: Address): Promise<Result<UpdateCustomerAddress>>;
    deleteCustomerAddress(id: string): Promise<Result<DeleteCustomerAddress>>;
}
