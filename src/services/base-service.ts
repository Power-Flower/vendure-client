import type {
    ApolloClient,
    MutationOptions,
    NormalizedCacheObject,
    QueryOptions,
} from '$types/astro.types';
import type { Result } from '$types/result.types';
import { type ASchema, a } from '@arrirpc/schema';

export class BaseService {
    private readonly client: ApolloClient;

    public constructor(client: ApolloClient) {
        this.client = client;
    }

    protected async query<T>(
        schema: ASchema,
        options: QueryOptions,
    ): Promise<Result<T>> {
        try {
            const response = await this.client.query(options);
            const data = a.parse(schema, response.data);
            if (data.success) return { data: data.value };
            return { error: data.errors };
        } catch (error: unknown) {
            if (error instanceof Error) {
                return { error };
            }
            return { error: new Error('Unknown error') };
        }
    }

    protected async mutate<T>(
        schema: ASchema,
        options: MutationOptions,
    ): Promise<Result<T>> {
        try {
            const response = await this.client.mutate(options);
            const data = a.parse(schema, response.data);
            if (data.success) return { data: data.value };
            return { error: data.errors };
        } catch (error: unknown) {
            if (error instanceof Error) {
                return { error };
            }
            return { error: new Error('Unknown error') };
        }
    }
}
