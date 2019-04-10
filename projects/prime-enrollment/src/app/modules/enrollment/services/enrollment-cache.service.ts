import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
  private collegeOptions: BehaviorSubject<string[]> = new BehaviorSubject(
    collegeOptions
  );

  private classOptions: BehaviorSubject<string[]> = new BehaviorSubject(null);

  private licenseLabel: BehaviorSubject<string> = new BehaviorSubject(null);

  get collegeOptions$() {
    return this.collegeOptions.asObservable();
  }

  get classOptions$() {
    return this.classOptions.asObservable();
  }

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

  constructor() {}
}
