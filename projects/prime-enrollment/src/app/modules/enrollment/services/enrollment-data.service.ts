import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentDataService {
  private licenseOptions: BehaviorSubject<any> = new BehaviorSubject(null);
  private organizationTypes: Observable<string[]>;

  organizationTypesInit(arr: string[]) {
    this.organizationTypes = of(arr);
  }

  get organizationTypes$() {
    return this.organizationTypes;
  }

  public licenseOptions$(): Observable<any> {
    return this.licenseOptions.asObservable();
  }
  setLicenseOptions(data) {
    this.licenseOptions.next(data);
  }
  constructor() {}
}
