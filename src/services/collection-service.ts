import { CollectionSchema } from '$schemas/collection.schemas';
import { gql } from '$types/astro.types';
import type { CollectionQuery } from '$types/collection.types';
import type { Result } from '$types/result.types';
import { convertToGql } from '$utils/index';
import { BaseService } from './base-service';

export class CollectionService extends BaseService {
    public async getCollectionById(
        id: string,
    ): Promise<Result<CollectionQuery>> {
        return this.query(CollectionSchema, {
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
    }
}
