import { SimpleDate } from '../core/date/simple-date.interface'
import { Colleges } from './colleges.enum';
export class Applicant {
  isDeviceProvider: boolean;
  MSPBillingNumber: number;
  college: Colleges[] | Colleges;
  hasBCServicesCard: boolean;

  hasInformationContraventionOrder: boolean;
  hasBeenSuspended: boolean;
  hasPharmaNetEverRevoked: boolean;
  hasRevocationBeenResolved: boolean;
  hasHadLimitsOrConditions: boolean;

  license: {
    licenseExpiry: SimpleDate;
    licenseClass: string; //TODO!
  }

  dates: {
    requestStartDate: SimpleDate;
    requestEndDate: SimpleDate;
  }

  consentInfoCollection: boolean = false;

  constructor() {
    this.license = {
      licenseExpiry: { day: null, month: null, year: null },
      licenseClass: ''
    }
    this.dates = {
      requestStartDate: { day: null, month: null, year: null },
      requestEndDate: { day: null, month: null, year: null },
    }
  }

  /**
   * Determines if applicant goes to college. Can be left blank to see if they go to any college. To check if option is "none", must explicitly pass Colleges.None
   * @param college optional, should be Colleges or undefined.
   */
  goesToCollege(college?: Colleges): boolean {
    if (!this.college) return false;
    if (this.college.length === 0 && this.college[0] == Colleges.None) {
      return this.college[0] === college;
    }
    if (this.college === Colleges.None) return this.college === college;
    if (!college && this.college.length) return true;
    return (<Colleges[]>this.college).indexOf(college) >= 0;
  }
}
