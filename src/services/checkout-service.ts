import { AddPaymentToOrderSchema, CreateStripePaymentIntentSchema, EligiblePaymentMethodsSchema, EligibleShippingMethodsSchema, SetOrderShippingAddressSchema, SetOrderShippingMethodSchema } from '$schemas/checkout.schemas';
import { OrderSchema } from '$schemas/order.schemas';
import { gql } from '$types/astro.types';
import { AddPaymentToOrder, CreateStripePaymentIntent, EligiblePaymentMethods, EligibleShippingMethods, SetOrderShippingAddress, SetOrderShippingMethod } from '$types/checkout.types';
import { Address } from '$types/customer.types';
import type { Result } from '$types/result.types';
import { convertToGql } from '$utils/index';
import { BaseService } from './base-service';

export class CheckoutService extends BaseService {
    public async eligiblePaymentMethods(): Promise<Result<EligiblePaymentMethods>> {
        return this.query(EligiblePaymentMethodsSchema, {
            query: gql`
                query EligiblePaymentMethods {
                    ${convertToGql(EligiblePaymentMethodsSchema)}
                }
            `,
        });
    }

    public async eligibleShippingMethods(): Promise<Result<EligibleShippingMethods>> {
        return this.query(EligibleShippingMethodsSchema, {
            query: gql`
                query EligibleShippingMethods {
                    ${convertToGql(EligibleShippingMethodsSchema)}
                }
            `,
        });
    }

    public async setOrderShippingAddress(
        input: Address
    ): Promise<Result<SetOrderShippingAddress>> {
        return this.mutate(SetOrderShippingAddressSchema, {
            mutation: gql`
                mutation SetOrderShippingAddress($input: CreateAddressInput!) {
                    setOrderShippingAddress(input: $input) {
                        ... on Order {
                            ${convertToGql(OrderSchema)}
                        }
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
        })
    }

    public async setOrderShippingMethod(
        methodId: string
    ): Promise<Result<SetOrderShippingMethod>> {
        return this.mutate(SetOrderShippingMethodSchema, {
            mutation: gql`
                mutation SetOrderShippingMethod($id: [ID!]!) {
                    setOrderShippingMethod(shippingMethodId: $id) {
                        ... on Order {
                            ${convertToGql(OrderSchema)}
                        }
                    }
                }
            `,
            variables: {
                id: [methodId],
            },
        });
    }

    public async createStripePaymentIntent(): Promise<Result<CreateStripePaymentIntent>> {
        return this.mutate(CreateStripePaymentIntentSchema, {
            mutation: gql`
                mutation CreateStripePaymentIntent {
                    createStripePaymentIntent
                }
            `,
        });
    }

    public async addPaymentToOrder(
        methodCode: string
    ): Promise<Result<AddPaymentToOrder>> {
        return this.mutate(AddPaymentToOrderSchema, {
            mutation: gql`
                mutation AddPaymentToOrder($input: PaymentInput!) {
                    addPaymentToOrder(input: $input) {
                        ... on Order {
                            ${convertToGql(OrderSchema)}
                        }
                    }
                }
            `,
            variables: {
                input: {
                    method: methodCode,
                },
            },
        });
    }
}
