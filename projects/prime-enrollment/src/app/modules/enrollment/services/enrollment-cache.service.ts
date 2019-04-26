import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import {
  CountryList,
  ProvinceList
} from '@prime-core/prime-shared/components/address/address.component';
import { CacheService } from '@prime-core/services/cache.service';
import { takeUntil, catchError } from 'rxjs/operators';

const collegeOptions = [
  'College of Physicians and Surgeons of BC (CPSBC)',
  'College of Pharmacists of BC (CPBC)',
  'College of Registered Nurses of BC (CRNBC)',
  'None'
];
@Injectable({
  providedIn: 'root'
})
export class EnrollmentCacheService {
  countries: CountryList[];
  provinces: ProvinceList[];

  private collegeOptions: BehaviorSubject<string[]> = new BehaviorSubject(
    collegeOptions
  );

  private classOptions: BehaviorSubject<string[]> = new BehaviorSubject(null);

  private licenseLabel: BehaviorSubject<string> = new BehaviorSubject(null);

  collegeOptions$: Observable<any> = this.collegeOptions.asObservable();

  classOptions$ = this.classOptions.asObservable();
  countryReady$ = new BehaviorSubject<boolean>(false);
  provinceReady$ = new BehaviorSubject<boolean>(false);
  setLicenseLabel$(str: string) {
    switch (str) {
      case 'College of Pharmacists of BC (CPBC)':
        this.licenseLabel.next('P1');
        this.classOptions.next(['Full Pharmacist', 'Full - Specialty']);
        break;
      case 'College of Physicians and Surgeons of BC (CPSBC)':
        this.licenseLabel.next('91');
        this.classOptions.next([
          'Full - General',
          'Temporary Registered Nurse'
        ]);

        break;
      case 'College of Registered Nurses of BC (CRNBC)':
        this.licenseLabel.next('96');
        this.classOptions.next([
          'Registered Nurse',
          'Temporary Registered Nurse'
        ]);
        break;
      default:
        this.licenseLabel.next(null);
    }
  }

  get licenseLabel$() {
    return this.licenseLabel.asObservable();
  }

  constructor(private cacheSvc: CacheService) {
    this.cacheSvc.$countryList
      // .pipe(takeUntil(this.countryReady$))
      .subscribe(obs => {
        if (!obs) return;
        this.countries = obs;
        this.countryReady$.next(true);
      });

    this.cacheSvc.$provinceList.pipe(catchError(err => of([]))).subscribe(
      obs => {
        if (!obs) return;
        this.provinces = obs;
        this.provinceReady$.next(true);
      },
      err => console.log(err)
    );
  }

  async findCountry(country: string) {
    const res = this.countries.filter(itm => itm.countryCode === country);
    if (res.length < 1) return;
    return res[0].description;
  }

  async findProvince(province: string) {
    const res = this.provinces.filter(itm => itm.provinceCode === province);
    if (res.length < 1) return;
    return res[0].description;
  }
}
