import { BaseService } from './index.ts';
import { type AResult } from '../types/index.ts';
import { CollectionQuerySchema } from '../schemas/collection.schemas';
export declare class Collection extends BaseService {
    getCollectionById(id: string): Promise<AResult<typeof CollectionQuerySchema>>;
}
