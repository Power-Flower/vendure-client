import type { CollectionQuery } from '../types/collection.types';
import type { Result } from '../types/result.types';
import { BaseService } from './base-service';
export declare class CollectionService extends BaseService {
    getCollectionById(id: string): Promise<Result<CollectionQuery>>;
}
