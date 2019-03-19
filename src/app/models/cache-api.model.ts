import { ServerPayload, PayloadInterface } from './api-base.model';
import {
  CountryList,
  ProvinceList
} from '../../../projects/prime-registration/src/app/modules/registration/components/address/address.component';

/**
 * Get Cache
 */
export interface CacheInterface extends PayloadInterface {
  country?: CountryList[];
  province?: ProvinceList[];
}

export class CachePayLoad extends ServerPayload {
  country: CountryList[];
  province: ProvinceList[];

  constructor( payload: CacheInterface ) {
    super( payload );
    this.country = payload.country ? payload.country : undefined;
    this.province = payload.province ? payload.province : undefined;
  }
}
