import { a } from '@arrirpc/schema';

export const RefundLineSchema = a.object({
    orderLineId: a.string(),
    quantity: a.number(),
    refundId: a.string(),
});

export const RefundSchema = a.object({
    id: a.string(),
    createdAt: a.timestamp(),
    items: a.number(),
    shiping: a.number(),
    adjustment: a.number(),
    total: a.number(),
    method: a.string(),
    state: a.string(),
    transactionId: a.string(),
    reason: a.string(),
    lines: a.array(RefundLineSchema),
    paymentId: a.string(),
});

export const PaymentSchema = a.object({
    id: a.string(),
    createdAt: a.timestamp(),
    method: a.string(),
    amount: a.number(),
    state: a.string(),
    transactionId: a.string(),
    errorMessage: a.string(),
    refund: a.array(RefundSchema),
});
