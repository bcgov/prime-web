import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentDataService {
  private licenseOptions: BehaviorSubject<any> = new BehaviorSubject(null);

  public licenseOptions$(): Observable<any> {
    return this.licenseOptions.asObservable();
  }
  setLicenseOptions(data) {
    this.licenseOptions.next(data);
  }
  constructor() {}
}
