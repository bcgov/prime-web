import { Injectable } from '@angular/core';
import { CacheService, CacheApiService } from 'prime-core';

@Injectable({
  providedIn: 'root'
})
export class ProvisionerCacheService extends CacheService {
  // countries$ = this.cacheSvc.$countryList;
  // provinces$ = this.cacheSvc.$provinceList;
  constructor(
    protected cacheApiSvc: CacheApiService,
    private cacheSvc: CacheService
  ) {
    super(cacheApiSvc);
    this.cacheSvc.$countryList.subscribe(obs => console.log(obs));
    // this.cacheApiService.getCache('country');
  }
}
