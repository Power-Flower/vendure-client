export declare const ZoneSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    name: string;
}, false>;
export declare const TaxLineSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    description: string;
    taxRate: number;
}, false>;
export declare const TaxCategorySchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    name: string;
    isDefault: boolean;
}, false>;
export declare const TaxRateSchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    id: string;
    name: string;
    enabled: boolean;
    value: number;
    category: {
        id: string;
        name: string;
        isDefault: boolean;
    };
    zone: {
        id: string;
        name: string;
    };
}, false>;
export declare const OrderTaxSummarySchema: import("@arrirpc/schema").AObjectSchemaWithAdapters<{
    description: string;
    taxRate: number;
    taxBase: number;
    taxTotal: number;
}, false>;
