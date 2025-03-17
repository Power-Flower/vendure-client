import type { ApolloClient, NormalizedCacheObject } from '../types/index.ts';
export declare class BaseService {
    protected readonly client: ApolloClient<NormalizedCacheObject>;
    constructor(client: ApolloClient<NormalizedCacheObject>);
}
