import {
    AddressSchema,
    CreateCustomerAddressSchema,
    DeleteCustomerAddressSchema,
    GetActiveCustomerSchema,
    UpdateCustomerAddressSchema,
} from '$schemas/customer.schemas';
import { gql } from '$types/astro.types';
import type {
    Address,
    CreateCustomerAddress,
    DeleteCustomerAddress,
    GetActiveCustomer,
    UpdateCustomerAddress,
} from '$types/customer.types';
import type { Result } from '$types/result.types';
import { convertToGql } from '$utils/index';
import { BaseService } from './base-service';

export class CustomerService extends BaseService {
    public async getActiveCustomer(): Promise<Result<GetActiveCustomer>> {
        return this.query(GetActiveCustomerSchema, {
            query: gql`
                query GetActiveCustomer {
                    ${convertToGql(GetActiveCustomerSchema)}
                }
            `,
        });
    }

    public async createCustomerAddress(
        input: Address,
    ): Promise<Result<CreateCustomerAddress>> {
        return this.mutate(CreateCustomerAddressSchema, {
            mutation: gql`
                mutation CreateCustomerAddress($input: CreateAddressInput!) {
                    createCustomerAddress(input: $input) {
                        ${convertToGql(AddressSchema)}
                   }
                }
            `,
            variables: {
                input: {
                    fullName: input.fullName,
                    company: input.company,
                    streetLine1: input.streetLine1,
                    streetLine2: input.streetLine2,
                    city: input.city,
                    province: input.province,
                    postalCode: input.postalCode,
                    countryCode: input.country.code,
                    phoneNumber: input.phoneNumber,
                    defaultShippingAddress: input.defaultShippingAddress,
                    defaultBillingAddress: input.defaultBillingAddress,
                },
            },
        });
    }

    public async updateCustomerAddress(
        input: Address,
    ): Promise<Result<UpdateCustomerAddress>> {
        return this.mutate(UpdateCustomerAddressSchema, {
            mutation: gql`
                mutation UpdateCustomerAddress($input: UpdateAddressInput!) {
                    updateCustomerAddress(input: $input) {
                        ${convertToGql(AddressSchema)}
                   }
                }
            `,
            variables: {
                input: {
                    id: input.id,
                    fullName: input.fullName,
                    company: input.company,
                    streetLine1: input.streetLine1,
                    streetLine2: input.streetLine2,
                    city: input.city,
                    province: input.province,
                    postalCode: input.postalCode,
                    countryCode: input.country.code,
                    phoneNumber: input.phoneNumber,
                    defaultShippingAddress: input.defaultShippingAddress,
                    defaultBillingAddress: input.defaultBillingAddress,
                },
            },
        });
    }

    public async deleteCustomerAddress(
        id: string,
    ): Promise<Result<DeleteCustomerAddress>> {
        return this.mutate(DeleteCustomerAddressSchema, {
            mutation: gql`
                mutation DeleteCustomerAddress($id: ID!) {
                    deleteCustomerAddress(id: $id) {
                        success
                   }
                }
            `,
            variables: {
                id,
            },
        });
    }
}
