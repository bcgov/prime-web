import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { CacheApiService } from '@prime-core/services/cache-api.service';
import { map } from 'rxjs/operators';
import { CountryList, ProvinceList } from '@prime-core/prime-shared/components/address/address.component';
import { StatusMsgInterface } from '@prime-core/models/api-base.model';
import { SysParamInterface } from '../models/cache-api.model';
/**
 * TODO: Set up service to store data returned from the cache service once
 *       determined how it will be configured/setup
 */
@Injectable()
export class CacheService {

  // We use private BehaviorSubjects to cache results instead of having repeat
  // HTTP requests. This way the response is cached for the lifetime of the
  // session.
  private $provinceListSubject: BehaviorSubject<ProvinceList[]> = new BehaviorSubject([]);
  private $countrylistSubject: BehaviorSubject<CountryList[]> = new BehaviorSubject([]);
  private $enhancedMessagesSubject: BehaviorSubject<StatusMsgInterface[]> = new BehaviorSubject([]);
  private $sysParamListSubject: BehaviorSubject<SysParamInterface[]> = new BehaviorSubject([]);
  /**
   * Message List
   * Populated via call to reg/rest/getCache?param=messages
   */
  public $enhancedMsgList = this.$enhancedMessagesSubject.asObservable();

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
   * System Parameter List
   * Populated via call to reg/rest/getCache?param=sysParam
   */
  public $sysParamList: Observable<SysParamInterface[]> = this.$sysParamListSubject.asObservable();


  constructor(protected cacheApiService: CacheApiService) {
    this.setupBehaviorSubject('provinces', 'province', this.$provinceListSubject);
    this.setupBehaviorSubject('countries', 'country', this.$countrylistSubject);
    this.setupBehaviorSubject('messages', 'messages', this.$enhancedMessagesSubject);
    this.setupBehaviorSubject('sysParams', 'sysParam', this.$sysParamListSubject);
  }

  /**
   * A simple helper to setup BehaviorSubjects and Observables with API data.
   * HTTP requests will be sent out immediately at application load.
   *
   * We use BehaviorSubjects to cache values to stop repeat responses. This
   * requires that the properties are already setup on the class, including the
   * Observable and BehaviorSubject.
   *
   * @param cacheName the name of the parameter to pass to getCache()
   * @param propertyName the name of the property on the response we want
   * @param $subject the BehaviorSubject to emit the value found at propertyName
   */
  protected setupBehaviorSubject<T>( cacheName: string, propertyName: string, $subject: BehaviorSubject<T> ) {
    this.cacheApiService.getCache(cacheName).pipe(map(x => x[propertyName]))
      .subscribe(val => $subject.next(val));
  }
}
