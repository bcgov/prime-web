import { SimpleDate } from '../core/date/simple-date.interface'
import { Colleges } from './colleges.enum';
export class Applicant {
  //todo
  // readonly uuid = UUID.UUID();
  isDeviceProvider: boolean;
  MSPBillingNumber: number;

  license : {
    licenseExpiry: SimpleDate;
    licenseClass: string; //TODO!
  }

  dates: {
    requestStartDate: SimpleDate;
    requestEndDate: SimpleDate;
  }

  college: Colleges;

  constructor() {
    console.log("Applicant constructed!", this);

    this.license = {
      licenseExpiry : { day: null, month: null, year: null },
      licenseClass: ''
    }
    this.dates = {
      requestStartDate : { day: null, month: null, year: null },
      requestEndDate : { day: null, month: null, year: null },
    }

  }

  // TODO - Get Real College Numbers from SR/Cristina. This is just dummy-data
  get collegeNumber(): number{
    if (!this.college) return null;
    if (this.college == Colleges.None) return 0;

    return this.college.split('')
    .map((f) => f.charCodeAt(0))
    .reduce((b, a) => a + b)
  }

}
