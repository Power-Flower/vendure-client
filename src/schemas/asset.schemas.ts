import { a } from '@arrirpc/schema';

export const AssetSchema = a.object({
    id: a.string(),
    createdAt: a.string(),
    name: a.string(),
    type: a.string(),
    fileSize: a.number(),
    mimeType: a.string(),
    width: a.number(),
    height: a.number(),
    source: a.string(),
    preview: a.string(),
});
