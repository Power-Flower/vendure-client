import { CountrySchema } from '$schemas/customer.schemas';
import { AvaliableCountriesSchema } from '$schemas/utils.schemas';
import { gql } from '$types/astro.types';
import type { Result } from '$types/result.types';
import { AvaliableCountries } from '$types/utils.types';
import { convertToGql } from '$utils/index';
import { BaseService } from './base-service';

export class UtilsService extends BaseService {
    public async availableCountries(): Promise<Result<AvaliableCountries>> {
        return this.query(AvaliableCountriesSchema, {
            query: gql`
                query AvailableCountries {
                    availableCountries {
                        ${convertToGql(CountrySchema)}
                    }
                }
            `,
        });
    }
}
