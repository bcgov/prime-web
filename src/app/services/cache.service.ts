import { Injectable } from '@angular/core';
import { CountryList, ProvinceList } from '../../../projects/prime-registration/src/app/modules/registration/components/address/address.component';
import { StatusMsgInterface } from '../models/api-base.model';
import { Observable } from 'rxjs';
import { CacheApiService } from '@prime-core/services/cache-api.service';
import { map } from 'rxjs/operators';
/**
 * TODO: Set up service to store data returned from the cache service once
 *       determined how it will be configured/setup
 */

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
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
  // public $provinceList: Observable<ProvinceList[]> = this.cacheApiService.getCacheGeneric('provinces');
  public $provinceList: Observable<ProvinceList[]>;


  /**
   * Message List
   * Populated via call to reg/rest/getCache?param=messages
   */
  public enhancedMsgList: StatusMsgInterface[];

  constructor(protected cacheApiService: CacheApiService) {
    console.log('Cache service init', cacheApiService.RAND);
    // this.$provinceList = this.cacheApiService.getCacheGeneric('provinces')

    this.$provinceList = this.cacheApiService.getCache('provinces')
      .pipe(map(x => x.province));

  }

}
