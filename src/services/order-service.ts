import {
    ActiveOrderSchema,
    AddToActiveOrderSchema,
    AdjustOrderLineSchema,
    OrderByCodeSchema,
    OrderSchema,
    RemoveOrderLineSchema,
} from '$schemas/order.schemas';
import { gql } from '$types/astro.types';
import type {
    ActiveOrder,
    AddToActiveOrder,
    AdjustOrderLine,
    OrderByCode,
    RemoveOrderLine,
} from '$types/order.types';
import { convertToGql } from '$utils/index';
import { type Result, a } from '@arrirpc/schema';
import { BaseService } from './base-service';

export class OrderService extends BaseService {
    public async getByCode(code: string): Promise<Result<OrderByCode>> {
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

    public async getActiveOrder(): Promise<Result<ActiveOrder>> {
        const response = await this.client.query({
            query: gql`
                query GetActiveOrder {
                    ${convertToGql(ActiveOrderSchema)}
                }
            `,
        });

        return a.parse(ActiveOrderSchema, response.data);
    }

    public async addToActiveOrder(
        productVariantId: string,
        quantity: number,
    ): Promise<Result<AddToActiveOrder>> {
        const response = await this.client.mutate({
            mutation: gql`
                mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
                    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
                        ${convertToGql(OrderSchema)}
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
    ): Promise<Result<AdjustOrderLine>> {
        const response = await this.client.mutate({
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

        return a.parse(AdjustOrderLineSchema, response.data);
    }

    public async removeOrderLine(
        orderLineId: string,
    ): Promise<Result<RemoveOrderLine>> {
        const response = await this.client.mutate({
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

        return a.parse(RemoveOrderLineSchema, response.data);
    }
}
