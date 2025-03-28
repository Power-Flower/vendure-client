import {
    CollectionQuerySchema,
    CollectionSchema,
} from '$schemas/collection.schemas';
import { gql } from '$types/astro.types';
import type { CollectionQuery } from '$types/collection.types';
import { convertToGql } from '$utils/index';
import { type Result, a } from '@arrirpc/schema';
import { BaseService } from './base-service';

export class CollectionService extends BaseService {
    public async getCollectionById(
        id: string,
    ): Promise<Result<CollectionQuery>> {
        const response = await this.client.query({
            query: gql`
                query Collection($id: ID!) {
                    collection(id: $id) {
                        ${convertToGql(CollectionSchema)}
                    }
                }
            `,
            variables: {
                id,
            },
        });

        return a.parse(CollectionQuerySchema, response.data);
    }
}
