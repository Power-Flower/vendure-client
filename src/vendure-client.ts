import { AuthService } from '$services/auth-service';
import { CollectionService } from '$services/collection-service';
import { CustomerService } from '$services/customer-service';
import { OrderService } from '$services/order-service';
import {
    ApolloClient,
    ApolloLink,
    type FetchResult,
    HttpLink,
    InMemoryCache,
    type NextLink,
    type NormalizedCacheObject,
    type Observable,
    type Operation,
    concat,
} from '$types/astro.types';
import type { VendureClientConfig } from '$types/vendure-client.types';

export class VendureClient {
    public readonly auth: AuthService;
    public readonly customer: CustomerService;
    public readonly collection: CollectionService;
    public readonly order: OrderService;

    private readonly apolloClient: ApolloClient<NormalizedCacheObject>;

    public constructor(vendureClientConfig: VendureClientConfig) {
        this.apolloClient = this.createApolloClient(vendureClientConfig.apiUri);
        this.order = new OrderService(this.apolloClient);
        this.customer = new CustomerService(this.apolloClient);
        this.collection = new CollectionService(this.apolloClient);
        this.auth = new AuthService(this.apolloClient);
    }

    private authHandler(
        operation: Operation,
        forward: NextLink,
    ): Observable<FetchResult> {
        const token = this.getAuthToken();
        const authorizationHeader = token ? `Bearer ${token}` : null;
        operation.setContext({
            headers: {
                authorization: authorizationHeader,
            },
        });

        return forward(operation).map((response) => {
            const context = operation.getContext();
            const {
                response: { headers },
            } = context;

            const token = headers.get('vendure-auth-token');
            this.saveAuthToken(token);

            return response;
        });
    }

    private getAuthToken(): string | null {
        if (typeof localStorage !== 'undefined')
            return localStorage.getItem('vendure-auth-token');
        return null;
    }

    private saveAuthToken(token: string | null): void {
        if (token && typeof localStorage !== 'undefined')
            localStorage.setItem('vendure-auth-token', token);
    }

    private createApolloClient(
        uri: string,
    ): ApolloClient<NormalizedCacheObject> {
        const link = new HttpLink({ uri });
        const afterwareLink = new ApolloLink((o, f) => this.authHandler(o, f));
        return new ApolloClient({
            cache: new InMemoryCache(),
            link: concat(afterwareLink, link),
        });
    }
}
