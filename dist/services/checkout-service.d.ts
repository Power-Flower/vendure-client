import { CreateStripePaymentIntent, EligiblePaymentMethods, EligibleShippingMethods, SetOrderShippingAddress, SetOrderShippingMethod } from '../types/checkout.types';
import { Address } from '../types/customer.types';
import type { Result } from '../types/result.types';
import { BaseService } from './base-service';
export declare class CheckoutService extends BaseService {
    eligiblePaymentMethods(): Promise<Result<EligiblePaymentMethods>>;
    eligibleShippingMethods(): Promise<Result<EligibleShippingMethods>>;
    setOrderShippingAddress(input: Address): Promise<Result<SetOrderShippingAddress>>;
    setOrderShippingMethod(methodId: string): Promise<Result<SetOrderShippingMethod>>;
    createStripePaymentIntent(): Promise<Result<CreateStripePaymentIntent>>;
}
