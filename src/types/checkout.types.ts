import { CreateStripePaymentIntentSchema, EligiblePaymentMethodsSchema, EligibleShippingMethodsSchema, PaymentMethodQuoteSchema, SetOrderShippingAddressSchema, SetOrderShippingMethodSchema, ShippingMethodQuoteSchema } from '$schemas/checkout.schemas';
import type { a } from '@arrirpc/schema';

export type PaymentMethodQuote = a.infer<typeof PaymentMethodQuoteSchema>;

export type ShippingMethodQuote = a.infer<typeof ShippingMethodQuoteSchema>;

export type EligiblePaymentMethods = a.infer<typeof EligiblePaymentMethodsSchema>[];

export type EligibleShippingMethods = a.infer<typeof EligibleShippingMethodsSchema>[];

export type SetOrderShippingAddress = a.infer<typeof SetOrderShippingAddressSchema>;

export type SetOrderShippingMethod = a.infer<typeof SetOrderShippingMethodSchema>;

export type CreateStripePaymentIntent = a.infer<typeof CreateStripePaymentIntentSchema>;