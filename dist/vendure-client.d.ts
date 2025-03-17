import { Auth, Customer, Order } from './services/index.ts';
import { type VendureClientConfig } from './types/index.ts';
export declare class VendureClient {
    readonly auth: Auth;
    readonly customer: Customer;
    readonly order: Order;
    private readonly apolloClient;
    constructor(vendureClientConfig: VendureClientConfig);
    private authHandler;
    private getAuthToken;
    private saveAuthToken;
    private createApolloClient;
}
