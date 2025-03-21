import type { ApolloClient, NormalizedCacheObject } from '../types';
export declare class BaseService {
    protected readonly client: ApolloClient<NormalizedCacheObject>;
    constructor(client: ApolloClient<NormalizedCacheObject>);
}
