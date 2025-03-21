import { a } from '@arrirpc/schema';
import {
    AddressSchema,
    CreateCustomerAddressSchema,
    DeleteCustomerAddressSchema,
    GetActiveCustomerSchema,
    UpdateCustomerAddressSchema,
} from '../schemas/customer.schemas';
import { type AResult, gql } from '../types';
import { convertToGql } from '../utils';
import { BaseService } from './base-service';

export class Customer extends BaseService {
    public async getActiveCustomer(): Promise<
        AResult<typeof GetActiveCustomerSchema>
    > {
        const response = await this.client.query({
            query: gql`
                query GetActiveCustomer {
                    ${convertToGql(GetActiveCustomerSchema)}
                }
            `,
        });

        return a.parse(GetActiveCustomerSchema, response.data);
    }

    public async createCustomerAddress(
        input: a.infer<typeof AddressSchema>,
    ): Promise<AResult<typeof CreateCustomerAddressSchema>> {
        const response = await this.client.mutate({
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

        return a.parse(CreateCustomerAddressSchema, response.data);
    }

    public async updateCustomerAddress(
        input: a.infer<typeof AddressSchema>,
    ): Promise<AResult<typeof UpdateCustomerAddressSchema>> {
        const response = await this.client.mutate({
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

        return a.parse(UpdateCustomerAddressSchema, response.data);
    }

    public async deleteCustomerAddress(
        id: string,
    ): Promise<AResult<typeof DeleteCustomerAddressSchema>> {
        const response = await this.client.mutate({
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

        return a.parse(DeleteCustomerAddressSchema, response.data);
    }
}
