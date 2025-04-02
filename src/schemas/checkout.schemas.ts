import { a } from '@arrirpc/schema';
import { OrderSchema } from './order.schemas';

export const PaymentMethodQuoteSchema = a.object({
    id: a.string(),
    code: a.string(),
    name: a.string(),
    description: a.string(),
    isEligible: a.boolean(),
});

export const ShippingMethodQuoteSchema = a.object({
    id: a.string(),
    price: a.number(),
    priceWithTax: a.number(),
    code: a.string(),
    name: a.string(),
    description: a.string(),
});

export const EligiblePaymentMethodsSchema = a.object({
    eligiblePaymentMethods: a.array(PaymentMethodQuoteSchema),
});

export const EligibleShippingMethodsSchema = a.object({
    eligibleShippingMethods: a.array(ShippingMethodQuoteSchema),
});

export const SetOrderShippingAddressSchema = a.object({
    setOrderShippingAddress: OrderSchema,
});

export const SetOrderShippingMethodSchema = a.object({
    setOrderShippingMethod: OrderSchema,
});

export const CreateStripePaymentIntentSchema = a.object({
    createStripePaymentIntent: a.string(),
});