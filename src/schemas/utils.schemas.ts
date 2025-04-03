import { a } from '@arrirpc/schema';
import { CountrySchema } from './customer.schemas';

export const AvaliableCountriesSchema = a.object({
    availableCountries: a.array(CountrySchema),
});