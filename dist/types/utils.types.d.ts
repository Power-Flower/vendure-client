import { AvaliableCountriesSchema } from '../schemas/utils.schemas';
import type { a } from '@arrirpc/schema';
export type AvaliableCountries = a.infer<typeof AvaliableCountriesSchema>;
