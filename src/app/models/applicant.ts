import { SimpleDate } from '../core/date/simple-date.interface'
import { Colleges } from './colleges.enum';
export class Applicant {
  isDeviceProvider: boolean;
  MSPBillingNumber: number;
  college: Colleges[] | Colleges;

  license : {
    licenseExpiry: SimpleDate;
    licenseClass: string; //TODO!
  }

  dates: {
    requestStartDate: SimpleDate;
    requestEndDate: SimpleDate;
  }

  constructor() {
    this.license = {
      licenseExpiry : { day: null, month: null, year: null },
      licenseClass: ''
    }
    this.dates = {
      requestStartDate : { day: null, month: null, year: null },
      requestEndDate : { day: null, month: null, year: null },
    }

  }

  get collegeNumber(): string{
    return this.college ? this.college.toString() : '';
  }

}
