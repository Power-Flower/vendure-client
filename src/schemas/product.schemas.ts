import { a } from '@arrirpc/schema';
import { AssetSchema } from './asset.schemas';
import { TaxCategorySchema, TaxRateSchema } from './tax.schemas';

export const FacetValueSchema = a.object({
    id: a.string(),
    facet: a.optional(
        a.object({
            id: a.string(),
            name: a.string(),
            code: a.string(),
        }),
    ),
    facetId: a.string(),
    name: a.string(),
    code: a.string(),
});

export const FacetSchema = a.object({
    id: a.string(),
    name: a.string(),
    code: a.string(),
    values: a.array(
        a.object({
            id: a.string(),
            facetId: a.string(),
            name: a.string(),
            code: a.string(),
        }),
    ),
});

export const ProductOptionSchema = a.object({
    id: a.string(),
    code: a.string(),
    name: a.string(),
    groupId: a.string(),
    group: a.object({
        id: a.string(),
        code: a.string(),
        name: a.string(),
    }),
});

export const ProductOptionGroupSchema = a.object({
    id: a.string(),
    code: a.string(),
    name: a.string(),
    options: a.array(
        a.object({
            id: a.string(),
            code: a.string(),
            name: a.string(),
            groupId: a.string(),
        }),
    ),
});

export const ProductSchema = a.object({
    id: a.string(),
    createdAt: a.timestamp(),
    languageCode: a.string(),
    name: a.string(),
    slug: a.string(),
    description: a.string(),
    featuredAsset: AssetSchema,
    assets: a.array(AssetSchema),
    // variants:
    facetValues: a.array(FacetValueSchema),
    customFields: a.object({
        location: a.string(),
        date: a.timestamp(),
    }),
});

export const ProductVariantSchema = a.object({
    id: a.string(),
    // product:
    productId: a.string(),
    createdAt: a.timestamp(),
    languageCode: a.string(),
    sku: a.string(),
    name: a.string(),
    featuredAsset: AssetSchema,
    assets: a.array(AssetSchema),
    price: a.number(),
    currencyCode: a.string(),
    priceWithTax: a.number(),
    stockLevel: a.number(),
    taxRateApplied: TaxRateSchema,
    taxCategory: TaxCategorySchema,
    options: a.array(ProductOptionSchema),
    facetValues: a.array(FacetValueSchema),
});
