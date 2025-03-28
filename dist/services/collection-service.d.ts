import type { CollectionQuery } from '../types/collection.types';
import { type Result } from '@arrirpc/schema';
import { BaseService } from './base-service';
export declare class CollectionService extends BaseService {
    getCollectionById(id: string): Promise<Result<CollectionQuery>>;
}
