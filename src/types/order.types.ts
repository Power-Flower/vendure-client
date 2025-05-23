import type {
    ActiveOrderSchema,
    AddItemToOrderSchema,
    AdjustOrderLineSchema,
    ApplyCouponCodeSchema,
    DiscountSchema,
    OrderAddressSchema,
    OrderByCodeSchema,
    OrderLineSchema,
    OrderListSchema,
    OrderSchema,
    PromotionSchema,
    RemoveOrderLineSchema,
    ShippingLineSchema,
    ShippingMethodSchema,
    SurchargeSchema,
    TransitionOrderToStateSchema,
} from '$schemas/order.schemas';
import type { a } from '@arrirpc/schema';

export type Promotion = a.infer<typeof PromotionSchema>;

export type Surcharge = a.infer<typeof SurchargeSchema>;

export type Discount = a.infer<typeof DiscountSchema>;

export type OrderLine = a.infer<typeof OrderLineSchema>;

export type ShippingMethod = a.infer<typeof ShippingMethodSchema>;

export type ShippingLine = a.infer<typeof ShippingLineSchema>;

export type OrderAddress = a.infer<typeof OrderAddressSchema>;

export type Order = a.infer<typeof OrderSchema>;

export type OrderList = a.infer<typeof OrderListSchema>;

export type OrderByCode = a.infer<typeof OrderByCodeSchema>;

export type ActiveOrder = a.infer<typeof ActiveOrderSchema>;

export type AddItemToOrder = a.infer<typeof AddItemToOrderSchema>;

export type AdjustOrderLine = a.infer<typeof AdjustOrderLineSchema>;

export type RemoveOrderLine = a.infer<typeof RemoveOrderLineSchema>;

export type TransitionOrderToState = a.infer<typeof TransitionOrderToStateSchema>;

export type ApplyCouponCode = a.infer<typeof ApplyCouponCodeSchema>;