import { SimpleDate } from '../core/simple-date.interface'
export class Applicant {
  //todo
  // readonly uuid = UUID.UUID();
  isDeviceProvider: boolean;
  MSPBillingNumber: number;
  licenseExpiry: SimpleDate;
  requestStartDate: SimpleDate;
  requestEndDate: SimpleDate;

  constructor() {
    console.log("Applicant constructed!", this);
    this.licenseExpiry = { day: null, month: null, year: null };
    this.requestStartDate = { day: null, month: null, year: null };
    this.requestEndDate = { day: null, month: null, year: null };

  }

}


