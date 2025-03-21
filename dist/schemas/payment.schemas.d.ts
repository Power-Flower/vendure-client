export declare const RefundLineSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    orderLineId: string;
    quantity: number;
    refundId: string;
}, false>;
export declare const RefundSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    createdAt: Date;
    items: number;
    shiping: number;
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
    amount: number;
    state: string;
    transactionId: string;
    errorMessage: string;
    refund: {
        id: string;
        createdAt: Date;
        items: number;
        shiping: number;
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
