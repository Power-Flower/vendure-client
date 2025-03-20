import { a } from '@arrirpc/schema';
import { AssetSchema } from './asset.schemas';
import { CustomerSchema } from './customer.schemas';
import { ProductVariantSchema } from './product.schemas';

export const DiscountSchema = a.object({
    adjustmentSource: a.string(),
    type: a.string(),
    description: a.string(),
    amount: a.number(),
    amountWithTax: a.number(),
});

export const OrderLineSchema = a.object({
    id: a.string(),
    productVariant: a.optional(ProductVariantSchema),
    featuredAsset: AssetSchema,
    unitPrice: a.number(),
    unitPriceWithTax: a.number(),
    discountedUnitPrice: a.number(),
    discountedUnitPriceWithTax: a.number(),
    quantity: a.number(),
    linePrice: a.number(),
    linePriceWithTax: a.number(),
    discountedLinePrice: a.number(),
    discountedLinePriceWithTax: a.number(),
    discounts: a.array(DiscountSchema),
    // order:
});

export const ShippingMethod = a.object({
    id: a.string(),
    code: a.string(),
    name: a.string(),
    description: a.string(),
});

export const ShippingLineSchema = a.object({
    id: a.string(),
    shippingMethod: ShippingMethod,
    price: a.number(),
    priceWithTax: a.number(),
    discountedPrice: a.number(),
    discountedPriceWithTax: a.number(),
});

export const OrderAddressSchema = a.object({
    fullName: a.string(),
    company: a.string(),
    streetLine1: a.string(),
    streetLine2: a.string(),
    city: a.string(),
    province: a.string(),
    postalCode: a.string(),
    country: a.string(),
    countryCode: a.string(),
    phoneNumber: a.string(),
});

export const OrderSchema = a.object({
    id: a.string(),
    createdAt: a.timestamp(),
    orderPlacedAt: a.timestamp(),
    code: a.string(),
    state: a.string(),
    active: a.boolean(),
    customer: a.optional(CustomerSchema),
    shippingAddress: a.optional(OrderAddressSchema),
    billingAddress: a.optional(OrderAddressSchema),
    lines: a.array(OrderLineSchema),
    discounts: a.array(DiscountSchema),
    couponCodes: a.array(a.string()),
    totalQuantity: a.number(),
    subTotal: a.number(),
    subTotalWithTax: a.number(),
    currencyCode: a.string(),
    shippingLines: a.array(ShippingLineSchema),
    shipping: a.number(),
    shippingWithTax: a.number(),
    total: a.number(),
    totalWithTax: a.number(),
});

export const OrderListSchema = a.object({
    items: a.array(OrderSchema),
    totalItems: a.number(),
});

export const OrderByCodeSchema = a.object({
    orderByCode: a.object({
        state: a.string(),
    }),
});

export const ActiveOrderSchema = a.object({
    activeOrder: a.optional(OrderSchema),
});

export const AddToActiveOrderSchema = a.object({
    addToActiveOrder: a.optional(OrderSchema),
});

export const AdjustOrderLineSchema = a.object({
    adjustOrderLine: a.optional(OrderSchema),
});

export const RemoveOrderLineSchema = a.object({
    removeOrderLine: a.optional(OrderSchema),
});
