import { Injectable } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { CountryList, ProvinceList } from '../../../projects/prime-registration/src/app/modules/registration/components/address/address.component';
import { StatusMsgInterface } from '../models/api-base.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { CacheApiService } from '@prime-core/services/cache-api.service';
import { map } from 'rxjs/operators';
/**
 * TODO: Set up service to store data returned from the cache service once
 *       determined how it will be configured/setup
 */
@Injectable()
export class CacheService {

  // We use private BehaviorSubjects to cache results instead of having repeat HTTP requests.
  private $provinceListSubject: BehaviorSubject<ProvinceList[]> = new BehaviorSubject([]);
  private $countrylistSubject: BehaviorSubject<CountryList[]> = new BehaviorSubject([]);

  /**
   * Country List
   * Populated via call to reg/rest/getCache?param=countries
   */
  public $countryList: Observable<CountryList[]> = this.$countrylistSubject.asObservable();

  /**
   * Province List
   * Populated via call to reg/rest/getCache?param=provinces
   */
  public $provinceList: Observable<ProvinceList[]> = this.$provinceListSubject.asObservable();





  /**
   * Message List
   * Populated via call to reg/rest/getCache?param=messages
   */
  public enhancedMsgList: StatusMsgInterface[];

  constructor(protected cacheApiService: CacheApiService) {
    console.log('Cache service init', cacheApiService.RAND);

    this.cacheApiService.getCache('provinces').pipe(map(x => x.province))
      .subscribe(provinceList => this.$provinceListSubject.next(provinceList));

    this.cacheApiService.getCache('countries').pipe(map(x => x.country))
      .subscribe(countryList => this.$countrylistSubject.next(countryList));

  }

}
