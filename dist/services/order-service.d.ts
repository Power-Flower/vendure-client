import type { ActiveOrder, AddToActiveOrder, AdjustOrderLine, OrderByCode, RemoveOrderLine } from '../types/order.types';
import { type Result } from '@arrirpc/schema';
import { BaseService } from './base-service';
export declare class OrderService extends BaseService {
    getByCode(code: string): Promise<Result<OrderByCode>>;
    getActiveOrder(): Promise<Result<ActiveOrder>>;
    addToActiveOrder(productVariantId: string, quantity: number): Promise<Result<AddToActiveOrder>>;
    adjustOrderLine(orderLineId: string, quantity: number): Promise<Result<AdjustOrderLine>>;
    removeOrderLine(orderLineId: string): Promise<Result<RemoveOrderLine>>;
}
