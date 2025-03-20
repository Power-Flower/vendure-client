import { Auth, Customer, Order } from './services';
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
    type VendureClientConfig,
    concat,
} from './types';

export class VendureClient {
    public readonly auth: Auth;
    public readonly customer: Customer;
    public readonly order: Order;

    private readonly apolloClient: ApolloClient<NormalizedCacheObject>;

    public constructor(vendureClientConfig: VendureClientConfig) {
        this.apolloClient = this.createApolloClient(vendureClientConfig.apiUri);
        this.order = new Order(this.apolloClient);
        this.customer = new Customer(this.apolloClient);
        this.auth = new Auth(this.apolloClient);
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
