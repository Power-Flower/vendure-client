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
import { CollectionQuerySchema, CollectionSchema } from '../schemas/collection.schemas';

export class Collection extends BaseService {
    public async getCollectionById(
        id: string,
    ): Promise<AResult<typeof CollectionQuerySchema>> {
        const response = await this.client.mutate({
            mutation: gql`
                query Collection($id: ID!) {
                    collection(id: $id) {
                        ${convertToGql(CollectionSchema)}
                    }
                }
            `,
            variables: {
                id
            },
        });

        return a.parse(CollectionQuerySchema, response.data);
    }
}
