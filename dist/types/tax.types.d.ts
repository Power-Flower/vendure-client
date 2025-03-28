import type { OrderTaxSummarySchema, TaxCategorySchema, TaxLineSchema, TaxRateSchema, ZoneSchema } from '../schemas/tax.schemas';
import type { a } from '@arrirpc/schema';
export type Zone = a.infer<typeof ZoneSchema>;
export type TaxLine = a.infer<typeof TaxLineSchema>;
export type TaxCategory = a.infer<typeof TaxCategorySchema>;
export type TaxRate = a.infer<typeof TaxRateSchema>;
export type OrderTaxSummary = a.infer<typeof OrderTaxSummarySchema>;
