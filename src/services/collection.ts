import {
    CollectionQuerySchema,
    CollectionSchema,
} from '$schemas/collection.schemas';
import { gql } from '$types/astro.types';
import type { AResult } from '$types/result.types';
import { convertToGql } from '$utils/index';
import { a } from '@arrirpc/schema';
import { BaseService } from './base-service';

export class Collection extends BaseService {
    public async getCollectionById(
        id: string,
    ): Promise<AResult<typeof CollectionQuerySchema>> {
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
