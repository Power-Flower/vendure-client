import type { Result } from '../types/result.types';
import { AvaliableCountries } from '../types/utils.types';
import { BaseService } from './base-service';
export declare class UtilsService extends BaseService {
    availableCountries(): Promise<Result<AvaliableCountries>>;
}
