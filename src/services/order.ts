import {
    ActiveOrderSchema,
    AddToActiveOrderSchema,
    AdjustOrderLineSchema,
    OrderByCodeSchema,
    OrderSchema,
    RemoveOrderLineSchema,
} from '$schemas';
import { BaseService } from '$services';
import { type AResult, gql } from '$types';
import { a } from '@arrirpc/schema';
import { convertToGql } from '../utils';

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
                    ${convertToGql(ActiveOrderSchema)}
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
    ): Promise<AResult<typeof AdjustOrderLineSchema>> {
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
    ): Promise<AResult<typeof RemoveOrderLineSchema>> {
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
