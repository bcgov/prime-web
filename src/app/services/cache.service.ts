import { Injectable } from '@angular/core';
import { StatusMsgInterface } from '@prime-core/models/api-base.model';
import { CountryList, ProvinceList } from '@prime-core/prime-shared/components/address/address.component';
/**
 * TODO: Set up service to store data returned from the cache service once
 *       determined how it will be configured/setup
 */

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  /**
   * Country List
   * Populated via call to reg/rest/getCache?param=countries
   */
  public countryList: CountryList[] = [];
  /**
   * Province List
   * Populated via call to reg/rest/getCache?param=provinces
   */
  public provinceList: ProvinceList[] = [];

  /**
   * Message List
   * Populated via call to reg/rest/getCache?param=messages
   */
  public enhancedMsgList: StatusMsgInterface[];

  constructor() {}

}
