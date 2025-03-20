import { a } from "@arrirpc/schema";
import { AssetSchema } from "./asset.schemas";
import { ProductVariantSchema } from "./product.schemas";

export const CollectionBreadcrumbSchema = a.object({
    id: a.string(),
    name: a.string(),
    slug: a.string(),
});

export const CollectionSchema = a.object({
    id: a.string(),
    createdAt: a.timestamp(),
    languageCode: a.string(),
    name: a.string(),
    slug: a.string(),
    breadcrumbs: a.array(CollectionBreadcrumbSchema),
    position: a.number(),
    description: a.string(),
    featuredAsset: AssetSchema,
    assets: a.array(AssetSchema),
    // parent:
    parentId: a.string(),
    productVariants: a.array(ProductVariantSchema),
});

export const CollectionQuerySchema = a.object({
    collection: CollectionSchema,
});