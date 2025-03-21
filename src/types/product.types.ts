import type {
    FacetSchema,
    FacetValueSchema,
    ProductOptionGroupSchema,
    ProductOptionSchema,
    ProductSchema,
    ProductVariantSchema,
} from '$schemas/product.schemas';
import type { a } from '@arrirpc/schema';

export type FacetValue = a.infer<typeof FacetValueSchema>;

export type Facet = a.infer<typeof FacetSchema>;

export type ProductOption = a.infer<typeof ProductOptionSchema>;

export type ProductOptionGroup = a.infer<typeof ProductOptionGroupSchema>;

export type Product = a.infer<typeof ProductSchema>;

export type ProductVariant = a.infer<typeof ProductVariantSchema>;
