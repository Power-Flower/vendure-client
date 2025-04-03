import type { ActiveOrder, AddItemToOrder, AdjustOrderLine, ApplyCouponCode, OrderByCode, RemoveOrderLine, TransitionOrderToState } from '../types/order.types';
import type { Result } from '../types/result.types';
import { BaseService } from './base-service';
export declare class OrderService extends BaseService {
    getByCode(code: string): Promise<Result<OrderByCode>>;
    getActiveOrder(): Promise<Result<ActiveOrder>>;
    transitionOrderToState(state: string): Promise<Result<TransitionOrderToState>>;
    addItemToOrder(productVariantId: string, quantity: number): Promise<Result<AddItemToOrder>>;
    adjustOrderLine(orderLineId: string, quantity: number): Promise<Result<AdjustOrderLine>>;
    removeOrderLine(orderLineId: string): Promise<Result<RemoveOrderLine>>;
    applyCouponCode(couponCode: string): Promise<Result<ApplyCouponCode>>;
}
