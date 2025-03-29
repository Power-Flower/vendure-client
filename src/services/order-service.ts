import {
    ActiveOrderSchema,
    AddToActiveOrderSchema,
    AdjustOrderLineSchema,
    ApplyCouponCodeSchema,
    OrderByCodeSchema,
    OrderSchema,
    RemoveOrderLineSchema,
} from '$schemas/order.schemas';
import { gql } from '$types/astro.types';
import type {
    ActiveOrder,
    AddToActiveOrder,
    AdjustOrderLine,
    ApplyCouponCode,
    OrderByCode,
    RemoveOrderLine,
} from '$types/order.types';
import type { Result } from '$types/result.types';
import { convertToGql } from '$utils/index';
import { BaseService } from './base-service';

export class OrderService extends BaseService {
    public async getByCode(code: string): Promise<Result<OrderByCode>> {
        return this.query(OrderByCodeSchema, {
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
    }

    public async getActiveOrder(): Promise<Result<ActiveOrder>> {
        return this.query(ActiveOrderSchema, {
            query: gql`
                query GetActiveOrder {
                    ${convertToGql(ActiveOrderSchema)}
                }
            `,
        });
    }

    public async addToActiveOrder(
        productVariantId: string,
        quantity: number,
    ): Promise<Result<AddToActiveOrder>> {
        return this.mutate(AddToActiveOrderSchema, {
            mutation: gql`
                mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
                    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
                        ... on Order {
                            ${convertToGql(OrderSchema)}
                        }
                    }
                }
            `,
            variables: {
                productVariantId,
                quantity,
            },
        });
    }

    public async adjustOrderLine(
        orderLineId: string,
        quantity: number,
    ): Promise<Result<AdjustOrderLine>> {
        return this.mutate(AdjustOrderLineSchema, {
            mutation: gql`
                mutation AdjustOrderLine($orderLineId: ID!, $quantity: Int!) {
                    adjustOrderLine(orderLineId: $orderLineId, quantity: $quantity) {
                        ${convertToGql(OrderSchema)}
                    }
                }
            `,
            variables: {
                orderLineId,
                quantity,
            },
        });
    }

    public async removeOrderLine(
        orderLineId: string,
    ): Promise<Result<RemoveOrderLine>> {
        return this.mutate(RemoveOrderLineSchema, {
            mutation: gql`
                mutation RemoveOrderLine($orderLineId: ID!) {
                    removeOrderLine(orderLineId: $orderLineId) {
                        ${convertToGql(OrderSchema)}
                    }
                }
            `,
            variables: {
                orderLineId,
            },
        });
    }

    public async applyCouponCode(
        couponCode: string,
    ): Promise<Result<ApplyCouponCode>> {
        return this.mutate(ApplyCouponCodeSchema, {
            mutation: gql`
                mutation applyCouponCode($couponCode: String!) {
                    applyCouponCode(couponCode: $couponCode) {
                        ${convertToGql(OrderSchema)}
                    }
                }
            `,
            variables: {
                couponCode,
            },
        });
    }
}
