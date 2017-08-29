import { SimpleDate } from '../core/date/simple-date.interface'
import { Colleges } from './colleges.enum';
export class Applicant {
  isDeviceProvider: boolean;
  MSPBillingNumber: number;
  // college: Colleges[] | Colleges;
  college: Colleges[];
  hasBCServicesCard: boolean;

  hasInformationContraventionOrder: boolean;
  hasBeenSuspended: boolean;
  hasPharmaNetEverRevoked: boolean;
  hasRevocationBeenResolved: boolean;
  hasHadLimitsOrConditions: boolean;

  firstName: string;
  middleName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  altPhoneNumber: string;
  altEmailAddress: string;

  licenseClass: string;
  licenseNumber: string;
  licenseExpiry: SimpleDate = {} as SimpleDate;

  dateOfBirth: SimpleDate = {} as SimpleDate;
  requestStartDate: SimpleDate = {} as SimpleDate;
  requestEndDate: SimpleDate = {} as SimpleDate;

  consentInfoCollection: boolean = false;

  constructor() {
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
    // if (this.college === Colleges.None) return this.college === college;
    // if (this.college === Colleges.None) return this.college === college;
    if (!college && this.college.length) return true;
    return (<Colleges[]>this.college).indexOf(college) >= 0;
  }

  /**
   * Applicant full name. Combines first name, middle name (if provided), and last name.
   */
  get fullName(): string {
    if (!this.firstName || !this.lastName){
      return null;
    }
    return `${this.firstName} ${this.middleName ? this.middleName : ''} ${this.lastName}`;
  }
}
