import { Base } from '../core/base/base.class';
import { Site, SiteAccess } from './sites.model';
import { User } from './user.model';
import * as moment from 'moment';
import { EnrollmentStatus } from './enrollment-status.enum';
import { Address } from './addresses.model';
import { CollegeTypes,
  LicenceClassCPTypes,
  LicenceClassCRNTypes,
  LicenceClassCPSTypes,
  AdvancedPracticeCertificationTypes,
  WorkingOnBehalfTitleTypes,
  ISelfDeclaration } from './colleges.enum';

/* class for a person's name */
class Name {
  private _first: string;
  private _middle: string;
  private _last: string;

  set firstName( name: string ) {
    this._first = name;
  }

  get firstName(): string {
    return this._first;
  }

  set middleName( name: string ) {
    this._middle = name;
  }

  get middleName(): string {
    return this._middle;
  }

  set lastName( name: string ) {
    this._last = name;
  }

  get lastName(): string {
    return this._last;
  }

  // Returns first, middle and last names
  get fullName(): string {
    return `${this._first} ${this._middle} ${this._last}`;
  }

  set fullName( name: string ) {
    const names = name.split(' ');

    this._first = names[0];
    if (names.length === 2) {
      this._last = names[1];
    }
    else if (names.length === 3) {
      this._middle = names[1];
      this._last = names[2];
    }
  }

  // Returns only first and last names
  get name(): string {
    return `${this._first} ${this._last}`;
  }
}



/**
 * Information about person
 */
export class Person extends Base {

  primeUserId: PrimeUserID; //human-readable, like a user-name - "JSmith"
  PoSId: string;
  dateFormat: string = 'YYYY/MM/DD';

 //firstName: string;
  //middleName: string;
  //lastName: string;

  private _legalName: Name = new Name();
  private _preferName: Name;
  private _hasPreferName = false;

  /* Returns name of person depending on preferedName flag */
  get name(): string {
    if ( this.hasPreferName ) {
      return this._preferName.name;
    }
    return this._legalName.name;
  }

  // Just for development with dummy data, likely to be removed later on.
  set name(fullName: string) {
    // Assumption is this sets the legal name for person
    this._legalName.fullName = fullName;

  }

  // Legal name only - prevent code breakage
  get firstName(): string {
    return this._legalName.firstName;
  }
  get middleName(): string {
    return this._legalName.middleName;
  }
  get lastName(): string {
    return this._legalName.lastName;
  }

  /* Sets the prefered name flag */
  set hasPreferedName( flag: boolean ) {
    this._hasPreferName = flag;
  }

  /* Gets the prefered Name flag */
  get hasPreferName(): boolean {
    return this._hasPreferName;
  }

  // Just for development with dummy data for DEMO - TODO: Remove after development
  set demoData( data: string ) {

    const _data = data.split(',' );
    const today = new Date();

    // existing function in class
    this.name = _data[ 0 ];

    if (_data[1]) { this.dateOfBirth = new Date( _data[1] ); }
    if (_data[2]) {
      this.renewalDate = new Date( today.getFullYear(), today.getMonth(), today.getDate() +  parseInt( _data[2], 10 ) );
    } else {
      // default renewal date 1 year
      this.renewalDate = new Date( today.getFullYear(), today.getMonth() + 12, today.getDate() );
    }
  }

  address: Address;
  useRegAddress: Boolean = false;
  mailAddress: Address = new Address();
  dateOfBirth: Date;
  phone: PhoneNumber;
  email: string;
  renewalDate: Date;

  //The different roles the person may have
  user?: User;
  verifier?: Verifier;
  organizationAuthority?: OrganizationAuthority;
  provisioner?: Provisioner;

  /** Corresponds to collection's objectId */
  associationId?: string[];

  accessAcceptance = [false, false, false];
  /** The user has declared all information provided is accurate  */
  isDeclaredCheck = false;

  // toggles
  hasCollege: boolean;
  _isDeviceProvider: boolean;
  get isDeviceProvider(): boolean {
    return this._isDeviceProvider;
  }
  set isDeviceProvider(newVal: boolean) {
    this._isDeviceProvider = newVal;
    this.deviceProviderNumber = undefined;
  }
  isWorkingOnBehalf: boolean;

  // toggle related arrays
  collegeCertificationList = [{
    collegeType: 'pleaseSelect',
    licenceNumber: '',
    licenceClassCPType: 'pleaseSelect',
    licenceClassCRNType: 'pleaseSelect',
    licenceClassCPSType: 'pleaseSelect',
    licenceExpiryDate: <Date> null,
    advancedPracticeCertificationType: 'pleaseSelect'
  }];

  deviceProviderNumber: number;

  workingOnBehalfList = [{ jobTitle: 'pleaseSelect' }];

  // Self declaration related
  informationContravention: ISelfDeclaration = { flag: null, detail: null };
  cancelledRegistration:    ISelfDeclaration = { flag: null, detail: null };
  licenceCondition:         ISelfDeclaration = { flag: null, detail: null };
  revokedAccess:            ISelfDeclaration = { flag: null, detail: null };
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

  get renewalDateShort(): string {
    return moment(this.renewalDate).format(this.dateFormat);
  }

  get dateOfBirthShort(): string {
    return moment(this.dateOfBirth).format(this.dateFormat);
  }

  get daysUntilRenewalDate(): number {
    const expiry = moment(this.renewalDate);
    const today = moment();
    return expiry.diff(today, 'days');
  }
}

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
