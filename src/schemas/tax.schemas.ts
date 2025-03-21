import { a } from '@arrirpc/schema';

export const ZoneSchema = a.object({
    id: a.string(),
    name: a.string(),
});

export const TaxLineSchema = a.object({
    description: a.string(),
    taxRate: a.number(),
});

export const TaxCategorySchema = a.object({
    id: a.string(),
    name: a.string(),
    isDefault: a.boolean(),
});

export const TaxRateSchema = a.object({
    id: a.string(),
    name: a.string(),
    enabled: a.boolean(),
    value: a.number(),
    category: TaxCategorySchema,
    zone: ZoneSchema,
});

export const OrderTaxSummarySchema = a.object({
    description: a.string(),
    taxRate: a.number(),
    taxBase: a.number(),
    taxTotal: a.number(),
});
