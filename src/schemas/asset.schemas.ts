import { a } from '@arrirpc/schema';

export const AssetSchema = a.object({
    id: a.string(),
    name: a.string(),
    type: a.string(),
    source: a.string(),
});
