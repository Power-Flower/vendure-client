import type { ValueError } from '@arrirpc/schema';

export type Result<T> = {
    data?: T;
    error?: ValueError[] | Error;
};
