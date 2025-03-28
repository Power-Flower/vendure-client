import type { PaymentSchema, RefundLineSchema, RefundSchema } from '../schemas/payment.schemas';
import type { a } from '@arrirpc/schema';
export type RefundLine = a.infer<typeof RefundLineSchema>;
export type Refund = a.infer<typeof RefundSchema>;
export type Payment = a.infer<typeof PaymentSchema>;
