import type { ApolloClient, NormalizedCacheObject } from '../types';

export class BaseService {
    protected readonly client: ApolloClient<NormalizedCacheObject>;

    public constructor(client: ApolloClient<NormalizedCacheObject>) {
        this.client = client;
    }
}
