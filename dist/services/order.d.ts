import { ActiveOrderSchema, AddToActiveOrderSchema, AdjustOrderLineSchema, OrderByCodeSchema, RemoveOrderLineSchema } from '../schemas/index.ts';
import { BaseService } from './index.ts';
import { type AResult } from '../types/index.ts';
export declare class Order extends BaseService {
    getByCode(code: string): Promise<AResult<typeof OrderByCodeSchema>>;
    getActiveOrder(): Promise<AResult<typeof ActiveOrderSchema>>;
    addToActiveOrder(productVariantId: string, quantity: number): Promise<AResult<typeof AddToActiveOrderSchema>>;
    adjustOrderLine(orderLineId: string, quantity: number): Promise<AResult<typeof AdjustOrderLineSchema>>;
    removeOrderLine(orderLineId: string): Promise<AResult<typeof RemoveOrderLineSchema>>;
}
