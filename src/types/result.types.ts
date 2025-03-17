import type { ASchema, Result, a } from '@arrirpc/schema';

export type AResult<T extends ASchema> = Result<a.infer<T>>;
