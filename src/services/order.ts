import { a } from '@arrirpc/schema';
import {
    ActiveOrderSchema,
    AddToActiveOrderSchema,
    AdjustOrderLineSchema,
    OrderByCodeSchema,
    RemoveOrderLineSchema,
} from '../schemas/order.schemas';
import { type AResult, gql } from '../types';
import { BaseService } from './base-service';

export class Order extends BaseService {
    public async getByCode(
        code: string,
    ): Promise<AResult<typeof OrderByCodeSchema>> {
        const response = await this.client.query({
            query: gql`
                query Order($code: String!) {
                    orderByCode(code: $code) {
                        state
                    }
                }
            `,
            variables: {
                code,
            },
        });

        return a.parse(OrderByCodeSchema, response.data);
    }

    public async getActiveOrder(): Promise<AResult<typeof ActiveOrderSchema>> {
        const response = await this.client.query({
            query: gql`
                query GetActiveOrder {
                    activeOrder {
                        id
                        createdAt
                        orderPlacedAt
                        code
                        state
                        active
                        shippingAddress {
                            fullName
                            company
                            streetLine1
                            streetLine2
                            city
                            province
                            postalCode
                            country
                            countryCode
                            phoneNumber
                        }
                        billingAddress {
                            fullName
                            company
                            streetLine1
                            streetLine2
                            city
                            province
                            postalCode
                            country
                            countryCode
                            phoneNumber
                        }
                        lines {
                            id
                            productVariant {
                                id
                                productId
                                sku
                                name
                                featuredAsset {
                                    id
                                    name
                                    type
                                    source
                                }
                                assets {
                                    id
                                    name
                                    type
                                    source
                                }
                                price
                                currencyCode
                                priceWithTax
                                stockLevel
                                options {
                                    id
                                    code
                                    name
                                    groupId
                                    group {
                                        id
                                        code
                                        name
                                    }
                                }
                                facetValues {
                                    id
                                    facet {
                                        id
                                        name
                                        code
                                    }
                                    facetId
                                    name
                                    code
                                }
                            }
                            featuredAsset {
                                id
                                name
                                type
                                source
                            }
                            unitPrice
                            unitPriceWithTax
                            discountedUnitPrice
                            discountedUnitPriceWithTax
                            quantity
                            linePrice
                            linePriceWithTax
                            discountedLinePrice
                            discountedLinePriceWithTax
                            discounts {
                                adjustmentSource
                                type
                                description
                                amount
                                amountWithTax
                            }
                        }
                        discounts {
                            adjustmentSource
                            type
                            description
                            amount
                            amountWithTax
                        }
                        couponCodes
                        totalQuantity
                        subTotal
                        subTotalWithTax
                        currencyCode
                        shippingLines {
                            id
                            shippingMethod {
                                id
                                code
                                name
                                description
                            }
                            price
                            priceWithTax
                            discountedPrice
                            discountedPriceWithTax
                        }
                        shipping
                        shippingWithTax
                        total
                        totalWithTax
                    }
                }
            `,
        });

        return a.parse(ActiveOrderSchema, response.data);
    }

    public async addToActiveOrder(
        productVariantId: string,
        quantity: number,
    ): Promise<AResult<typeof AddToActiveOrderSchema>> {
        const response = await this.client.mutate({
            mutation: gql`
                mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
                    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
                        id
                        createdAt
                        orderPlacedAt
                        code
                        state
                        active
                        shippingAddress {
                            fullName
                            company
                            streetLine1
                            streetLine2
                            city
                            province
                            postalCode
                            country
                            countryCode
                            phoneNumber
                        }
                        billingAddress {
                            fullName
                            company
                            streetLine1
                            streetLine2
                            city
                            province
                            postalCode
                            country
                            countryCode
                            phoneNumber
                        }
                        lines {
                            id
                            productVariant {
                                id
                                productId
                                sku
                                name
                                featuredAsset {
                                    id
                                    name
                                    type
                                    source
                                }
                                assets {
                                    id
                                    name
                                    type
                                    source
                                }
                                price
                                currencyCode
                                priceWithTax
                                stockLevel
                                options {
                                    id
                                    code
                                    name
                                    groupId
                                    group {
                                        id
                                        code
                                        name
                                    }
                                }
                                facetValues {
                                    id
                                    facet {
                                        id
                                        name
                                        code
                                    }
                                    facetId
                                    name
                                    code
                                }
                            }
                            featuredAsset {
                                id
                                name
                                type
                                source
                            }
                            unitPrice
                            unitPriceWithTax
                            discountedUnitPrice
                            discountedUnitPriceWithTax
                            quantity
                            linePrice
                            linePriceWithTax
                            discountedLinePrice
                            discountedLinePriceWithTax
                            discounts {
                                adjustmentSource
                                type
                                description
                                amount
                                amountWithTax
                            }
                        }
                        discounts {
                            adjustmentSource
                            type
                            description
                            amount
                            amountWithTax
                        }
                        couponCodes
                        totalQuantity
                        subTotal
                        subTotalWithTax
                        currencyCode
                        shippingLines {
                            id
                            shippingMethod {
                                id
                                code
                                name
                                description
                            }
                            price
                            priceWithTax
                            discountedPrice
                            discountedPriceWithTax
                        }
                        shipping
                        shippingWithTax
                        total
                        totalWithTax
                    }
                }
            `,
            variables: {
                productVariantId,
                quantity,
            },
        });

        return a.parse(AddToActiveOrderSchema, response.data);
    }

    public async adjustOrderLine(
        orderLineId: string,
        quantity: number,
    ): Promise<AResult<typeof AdjustOrderLineSchema>> {
        const response = await this.client.mutate({
            mutation: gql`
                mutation AdjustOrderLine($orderLineId: ID!, $quantity: Int!) {
                    adjustOrderLine(orderLineId: $orderLineId, quantity: $quantity) {
                        id
                        createdAt
                        orderPlacedAt
                        code
                        state
                        active
                        shippingAddress {
                            fullName
                            company
                            streetLine1
                            streetLine2
                            city
                            province
                            postalCode
                            country
                            countryCode
                            phoneNumber
                        }
                        billingAddress {
                            fullName
                            company
                            streetLine1
                            streetLine2
                            city
                            province
                            postalCode
                            country
                            countryCode
                            phoneNumber
                        }
                        lines {
                            id
                            productVariant {
                                id
                                productId
                                sku
                                name
                                featuredAsset {
                                    id
                                    name
                                    type
                                    source
                                }
                                assets {
                                    id
                                    name
                                    type
                                    source
                                }
                                price
                                currencyCode
                                priceWithTax
                                stockLevel
                                options {
                                    id
                                    code
                                    name
                                    groupId
                                    group {
                                        id
                                        code
                                        name
                                    }
                                }
                                facetValues {
                                    id
                                    facet {
                                        id
                                        name
                                        code
                                    }
                                    facetId
                                    name
                                    code
                                }
                            }
                            featuredAsset {
                                id
                                name
                                type
                                source
                            }
                            unitPrice
                            unitPriceWithTax
                            discountedUnitPrice
                            discountedUnitPriceWithTax
                            quantity
                            linePrice
                            linePriceWithTax
                            discountedLinePrice
                            discountedLinePriceWithTax
                            discounts {
                                adjustmentSource
                                type
                                description
                                amount
                                amountWithTax
                            }
                        }
                        discounts {
                            adjustmentSource
                            type
                            description
                            amount
                            amountWithTax
                        }
                        couponCodes
                        totalQuantity
                        subTotal
                        subTotalWithTax
                        currencyCode
                        shippingLines {
                            id
                            shippingMethod {
                                id
                                code
                                name
                                description
                            }
                            price
                            priceWithTax
                            discountedPrice
                            discountedPriceWithTax
                        }
                        shipping
                        shippingWithTax
                        total
                        totalWithTax
                    }
                }
            `,
            variables: {
                orderLineId,
                quantity,
            },
        });

        return a.parse(AdjustOrderLineSchema, response.data);
    }

    public async removeOrderLine(
        orderLineId: string,
    ): Promise<AResult<typeof RemoveOrderLineSchema>> {
        const response = await this.client.mutate({
            mutation: gql`
                mutation RemoveOrderLine($orderLineId: ID!) {
                    removeOrderLine(orderLineId: $orderLineId) {
                        id
                        createdAt
                        orderPlacedAt
                        code
                        state
                        active
                        shippingAddress {
                            fullName
                            company
                            streetLine1
                            streetLine2
                            city
                            province
                            postalCode
                            country
                            countryCode
                            phoneNumber
                        }
                        billingAddress {
                            fullName
                            company
                            streetLine1
                            streetLine2
                            city
                            province
                            postalCode
                            country
                            countryCode
                            phoneNumber
                        }
                        lines {
                            id
                            productVariant {
                                id
                                productId
                                sku
                                name
                                featuredAsset {
                                    id
                                    name
                                    type
                                    source
                                }
                                assets {
                                    id
                                    name
                                    type
                                    source
                                }
                                price
                                currencyCode
                                priceWithTax
                                stockLevel
                                options {
                                    id
                                    code
                                    name
                                    groupId
                                    group {
                                        id
                                        code
                                        name
                                    }
                                }
                                facetValues {
                                    id
                                    facet {
                                        id
                                        name
                                        code
                                    }
                                    facetId
                                    name
                                    code
                                }
                            }
                            featuredAsset {
                                id
                                name
                                type
                                source
                            }
                            unitPrice
                            unitPriceWithTax
                            discountedUnitPrice
                            discountedUnitPriceWithTax
                            quantity
                            linePrice
                            linePriceWithTax
                            discountedLinePrice
                            discountedLinePriceWithTax
                            discounts {
                                adjustmentSource
                                type
                                description
                                amount
                                amountWithTax
                            }
                        }
                        discounts {
                            adjustmentSource
                            type
                            description
                            amount
                            amountWithTax
                        }
                        couponCodes
                        totalQuantity
                        subTotal
                        subTotalWithTax
                        currencyCode
                        shippingLines {
                            id
                            shippingMethod {
                                id
                                code
                                name
                                description
                            }
                            price
                            priceWithTax
                            discountedPrice
                            discountedPriceWithTax
                        }
                        shipping
                        shippingWithTax
                        total
                        totalWithTax
                    }
                }
            `,
            variables: {
                orderLineId,
            },
        });

        return a.parse(RemoveOrderLineSchema, response.data);
    }
}
