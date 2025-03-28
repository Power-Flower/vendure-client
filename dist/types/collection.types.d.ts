import type { CollectionBreadcrumbSchema, CollectionQuerySchema, CollectionSchema } from '../schemas/collection.schemas';
import type { a } from '@arrirpc/schema';
export type CollectionBreadcrumb = a.infer<typeof CollectionBreadcrumbSchema>;
export type Collection = a.infer<typeof CollectionSchema>;
export type CollectionQuery = a.infer<typeof CollectionQuerySchema>;
