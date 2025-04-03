import { AuthService } from './services/auth-service';
import { CheckoutService } from './services/checkout-service';
import { CollectionService } from './services/collection-service';
import { CustomerService } from './services/customer-service';
import { OrderService } from './services/order-service';
import { UtilsService } from './services/utils-service';
import type { VendureClientConfig } from './types/vendure-client.types';
export declare class VendureClient {
    readonly auth: AuthService;
    readonly customer: CustomerService;
    readonly collection: CollectionService;
    readonly checkout: CheckoutService;
    readonly utils: UtilsService;
    readonly order: OrderService;
    private readonly apolloClient;
    constructor(vendureClientConfig: VendureClientConfig);
    private authHandler;
    private getAuthToken;
    private saveAuthToken;
    private createApolloClient;
}
