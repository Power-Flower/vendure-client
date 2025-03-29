import type { ApolloClient, MutationOptions, NormalizedCacheObject, QueryOptions } from '../types/astro.types';
import type { Result } from '../types/result.types';
import { type ASchema } from '@arrirpc/schema';
export declare class BaseService {
    private readonly client;
    constructor(client: ApolloClient<NormalizedCacheObject>);
    protected query<T>(schema: ASchema, options: QueryOptions): Promise<Result<T>>;
    protected mutate<T>(schema: ASchema, options: MutationOptions): Promise<Result<T>>;
}
