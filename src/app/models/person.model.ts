import { Base } from '../core/base/base.class';
import { Site, SiteAccess } from './sites.model';
import { User } from './user.model';
import * as moment from 'moment';
import { EnrollmentStatus } from './enrollment-status.enum';
import { Address } from './addresses.model';

/**
 * Information about person
 */
export class Person extends Base {
  primeUserId: PrimeUserID; //human-readable, like a user-name - "JSmith"

  firstName: string;
  middleName: string;
  lastName: string;

  get name(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  // Just for development with dummy data, likely to be removed later on.
  set name(fullName: string) {
    const names = fullName.split(' ');
    this.firstName = names[0];
    if (names.length === 2) {
      this.lastName = names[1];
    }
    else if (names.length === 3) {
      this.middleName = names[1];
      this.lastName = names[2];
    }
  }

  address: Address;
  useRegAddress: Boolean = false;
  mailAddress: Address = new Address();
  dateOfBirth: Date;
  phone: PhoneNumber;
  phoneSecondary: PhoneNumber;
  email: string;
  emailSecondary: string;
  renewalDate: Date;

  //The different roles the person may have
  user?: User;
  verifier?: Verifier;
  organizationAuthority?: OrganizationAuthority;
  provisioner?: Provisioner;

  /** Corresponds to collection's objectId */
  associationId?: string[];

  // License applies to Applicants. Does it apply to all Persons? Possibly
  // refactor Applicant into a different Role (like Verifier/Provisioner), but
  // if ALL People were previously Applicants, then there's no need to make the
  // distinction
  license;
  accessAcceptance;
  hasCollege: boolean;
  isDeviceProvider: boolean;
  deviceProviderNumber;
  isWorkingOnBehalf: boolean;
  workingOnBehalfTitle;
  // END of Applicant datatypes.


  // ALL sites, including expired/rejected.
  siteAccess: SiteAccess[] = [];

  get activeSites(): SiteAccess[] {
    return this.siteAccess.filter(x => x.status === EnrollmentStatus.Active);
  }

  get sites(): Site[] {
    return this.siteAccess.map(SA => SA.site);
  }

  canAccess(site: Site): boolean {
    return this.sites.indexOf(site) !== -1;
  }

  get hasContactInfo(): boolean {
    return !!(this.name && this.phone && this.email);
  }

  get daysUntilRenewalDate(): number {
    const expiry = moment(this.renewalDate);
    const today = moment();
    return expiry.diff(today, 'days');
  }
}

//class Name {
//  firstName: string;
//  lastName: string;
//  middleName: string;
//  get fullName(): string { return this.firstName + this.lastName; }
//}

interface PhoneNumber { }
interface PrimeUserID { }


/**
 * Person's Role(s)
 */
export abstract class Role extends Base {
  status: EnrollmentStatus;
  // Person is a circular reference for runtime convenience and does NOT need
  // to really be modelled in the JSON. We must handle the circular reference
  // when JSONifying. This makes it possible to, e.g. just pass a Verifier
  // object, and then easily get their name.
  person: Person;

  /** This should exactly match the different user types which extend from Role.
   *  Makes it easy to lookup role type in templates e.g. `user.type === Verifier`*/
  type: Verifier | OrganizationAuthority | Provisioner;
  selfDeclarations: SelfDeclaration[];
}

// class User extends Role {
//   college: Colleges[];
//   license: License;
//   isDeviceProvider: boolean;
//   PoSUserId: string;
// }
export class Verifier extends Role { }
export class OrganizationAuthority extends Role { } //aka "OA" or "Site Admin"
export class Provisioner extends Role { }


class SelfDeclaration {
  question: string;
  userAnswer: boolean;
  userDetails: string;
}
