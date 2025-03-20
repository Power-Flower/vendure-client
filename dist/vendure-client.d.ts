import { Auth, Customer, Order } from './services';
import { type VendureClientConfig } from './types';
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
