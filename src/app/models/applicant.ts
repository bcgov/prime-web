import { SimpleDate } from '../core/date/simple-date.interface'
import { Colleges } from './colleges.enum';
import { SecurityQuestions } from './security-questions';
export class Applicant {
  college: Colleges[];

  hasBCServicesCard: boolean;
  hasInformationContraventionOrder: boolean;
  hasBeenSuspended: boolean;
  hasPharmaNetEverRevoked: boolean;
  hasRevocationBeenResolved: boolean;
  hasHadLimitsOrConditions: boolean;
  isDeviceProvider: boolean;

  firstName: string;
  middleName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  altPhoneNumber: string;
  altEmailAddress: string;
  MSPBillingNumber: number;

  licenseClass: string;
  licenseNumber: string;
  licenseExpiry: SimpleDate = {} as SimpleDate;

  dateOfBirth: SimpleDate = {} as SimpleDate;
  requestStartDate: SimpleDate = {} as SimpleDate;
  requestEndDate: SimpleDate = {} as SimpleDate;

  consentInfoCollection: boolean = false;

  //Stores data from address.component
  //TODO - Setup proper model or interface for this. Composition? Address.model.ts?
  address: any = {};

  securityQuestions: SecurityQuestions[] = [];

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
    if (!this.firstName || !this.lastName) {
      return null;
    }
    return `${this.firstName} ${this.middleName ? this.middleName : ''} ${this.lastName}`;
  }

  /**
   * Checks there are 3 security questions, and none of the values are null/falsy.
   */
  get hasSecurityQuestions(): boolean {
    if (this.securityQuestions.length < 3) return false;
    this.securityQuestions.forEach(element => {
      if (element.question == null || element.answer == null) return false;
    });

    return true;
  }
}
