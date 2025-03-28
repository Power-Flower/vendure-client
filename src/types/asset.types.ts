import type { AssetSchema } from '$schemas/asset.schemas';
import type { a } from '@arrirpc/schema';

export type Asset = a.infer<typeof AssetSchema>;
