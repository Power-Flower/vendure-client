export declare const RefundLineSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    orderLineId: string;
    quantity: number;
    refundId: string;
}, false>;
export declare const RefundSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    createdAt: Date;
    items: number;
    shipping: number;
    adjustment: number;
    total: number;
    method: string;
    state: string;
    transactionId: string;
    reason: string;
    lines: {
        orderLineId: string;
        quantity: number;
        refundId: string;
    }[];
    paymentId: string;
}, false>;
export declare const PaymentSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    createdAt: Date;
    method: string;
    state: string;
    transactionId: string;
    amount: number;
    errorMessage: string;
    refunds: {
        id: string;
        createdAt: Date;
        items: number;
        shipping: number;
        adjustment: number;
        total: number;
        method: string;
        state: string;
        transactionId: string;
        reason: string;
        lines: {
            orderLineId: string;
            quantity: number;
            refundId: string;
        }[];
        paymentId: string;
    }[];
}, false>;
