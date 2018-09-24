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
import {MspImage} from './msp-image';
import { PharmaNetOrganization } from './organizations.model';
import { OrganizationAccess } from './organization-access.model';

/* class for a person's name */
class Name {
  private _first: string;
  private _middle: string;
  private _last: string;

  /**
   * Sets the first name for the person
   * @param {string} name
   */
  set firstName( name: string ) {
    this._first = name;
  }

  /**
   * Gets the first name for the person
   * @returns {string}
   */
  get firstName(): string {
    return this._first ? this._first : '';
  }

  /**
   * Sets the middle name for the person
   * @param {string} name
   */
  set middleName( name: string ) {
    this._middle = name;
  }

  /**
   * Gets the middle name of the person
   * @returns {string}
   */
  get middleName(): string {
    return this._middle ? this._middle : '';
  }

  /**
   * Sets the last name for the person
   * @param {string} name
   */
  set lastName( name: string ) {
    this._last = name;
  }

  /**
   * Gets the last name for person
   * @returns {string}
   */
  get lastName(): string {
    return this._last ? this._last : '';
  }


  /**
   * Returns first, middle and last names
   *
   * @returns {string}
   */
  get fullName(): string {

    let name: string;

    if (this._first) { name = this._first; }
    if (this._middle) {
      if (name) { name = name.concat( ' ', this._middle); }
      else { name = this._middle; }
    }
    if (this._last) {
      if (name) { name = name.concat( ' ', this._last ); }
      else { name = this._last; }
    }
    return name ? name : '';
  }

  /**
   * Set the full name (first, middle and last)
   *
   * @param {string} name
   */
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

  /**
   * Returns only first and last names
   *
   * @returns {string}
   */
  get name(): string {

    let name: string;

    if (this._first) { name = this._first; }
    if (this._last) {
      if (name) { name = name.concat( ' ', this._last ); }
      else { name = this._last; }
    }
    return name ? name : '';
  }
}

/**
 * Information about person
 */
export class Person extends Base {

  primeUserId: PrimeUserID; //human-readable, like a user-name - "JSmith"
  PoSId: string;
  dateFormat: string = 'YYYY/MM/DD';
  private _legalName: Name = new Name();
  private _preferName: Name = new Name();
  private _hasPreferName = false;
  private _images: MspImage[];

  /**
   * Returns name of person depending on preferedName flag
   *
   * @returns {string}
   */
  get name(): string {

    let name: string;
    if (this.hasPreferName && this._preferName.firstName) {
      name = this._preferName.firstName;
    } else {
      name = this._legalName.firstName;
    }

    if (this.hasPreferName && this._preferName.lastName) {
      name = name.concat(' ', this._preferName.lastName);
    } else {
      name = name.concat(' ', this._legalName.lastName);
    }

   return name;
  }

  get images(): MspImage[]{
    if(!this._images){
      this._images = new Array<MspImage>();;
    }
    return this._images;
  }

  set images(imgs: MspImage[]){
    this._images = imgs;
  }
  /**
   * Gets the legal name for the person
   * @returns {string}
   */
  get legalName(): string {
    return this._legalName.fullName;
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

  set firstName(name: string) {
    if (this.preferFirstName){
      this.preferFirstName = name;
    }
    else {
      this._legalName.firstName = name;
    }
  }
  set middleName(name: string) {
    if (this.preferMiddleName){
      this.preferMiddleName = name;
    }
    else {
      this._legalName.middleName = name;
    }
  }
  set lastName(name: string) {
    if (this.preferLastName){
      this.preferLastName = name;
    }
    else {
      this._legalName.lastName = name;
    }
  }

  set preferFirstName( name: string ) {
    this.hasPreferName = true;
    this._preferName.firstName = name;
  }
  get preferFirstName(): string {
    return this._preferName.firstName;
  }
  set preferMiddleName( name: string ) {
    this.hasPreferName = true;
    this._preferName.middleName = name;
  }
  get preferMiddleName(): string {
    return this._preferName.middleName;
  }
  set preferLastName( name: string ) {
    this.hasPreferName = true;
    this._preferName.lastName = name;
  }
  get preferLastName(): string {
    return this._preferName.lastName;
  }

  /* Sets the prefered name flag */
  set hasPreferName( flag: boolean ) {
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
  phoneExtension: string;
  hasInternationalPhoneNumber: boolean = false;
  email: string;
  renewalDate: Date;
  pairingCode: string;

  //For registration document upload
  hasDriversLicense: boolean = false;
  hasPassport: boolean = false;
  driverLicenseExpiry: Date;
  passportExpiry: Date;

  //For registration security
  securityQuestion1: String;
  securityQuestion2: String;
  securityQuestion3: String;
  securityAnswer1: String;
  securityAnswer2: String;
  securityAnswer3: String;
  mfaOptionSMS: boolean = false;
  mfaOptionSMSPhone: PhoneNumber;
  mfaOptionKey: boolean = false;
  mfaOptionApp: boolean = false;

  /** The default date to use when creating a new Site Access for this person. Maps to `startDate` on SiteAccess. This should be the current date.*/
  defaultStartDate: Date =  new Date();
  /** The default date to use when creating a new Site Access for this person. Maps to `endDate on SiteAccess. */
  defaultEndDate: Date;

  //The different roles the person may have
  user?: User;
  verifier?: Verifier;
  organizationAuthority?: OrganizationAuthority;
  provisioner?: Provisioner;

  /** Corresponds to collection's objectId */
  associationId?: string[];

  accessAcceptance = [false, false, false];

  /** The orgs the user has selected */
  organizationAccess: OrganizationAccess[] = [];
  allOrganizations(): PharmaNetOrganization[] {
    return this.organizationAccess.map(oa => oa.organization);
  }


  /** Has the user NOT accepted all UAAs or are there UAAs requiring their attention? Generally this manifests as some sort of warning icon displayed to the Applicant. */
  hasUAARequiringAttention(): boolean {
    return this.accessAcceptance.filter(x => x === false).length >= 1;
  }

  /** The user has declared all information provided is accurate  */
  isDeclaredCheck = false;

  /** Tracks whether a user is 'New' or not, i.e. recently added via Add New User modal.  A user is no longer new the moment any enrollmens have been changed and saved. Currently on the miller column pages all enrollments should be pre-selected for new users.*/
  isNewUser: boolean;

  // Tracks whether the user has gone through the wizard process at least once
  _hasCompletedWizard: boolean;
  get hasCompletedWizard(): boolean {
    return this._hasCompletedWizard;
  }
  set hasCompletedWizard(newVal: boolean) {
    this._hasCompletedWizard = newVal;
  }

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
  workingOnBehalfOtherReason: string;

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

  /** Gets the human readable appropriate licence class string based on the collegeType. If no index is provided it gets the first item. */
  getLicenceClassByIndex(index: number = 0){
    if (!this.hasCollege){
      return 'n/a';
    }
    if (this.collegeCertificationList[index].collegeType === 'CPBC'){
      return LicenceClassCPTypes[this.collegeCertificationList[index].licenceClassCPType];
    }
    if (this.collegeCertificationList[index].collegeType === 'CRNBC'){

      // If user has Advanced Practice Cert, append to end of string.
      let advanced;
      if (this.collegeCertificationList[index].advancedPracticeCertificationType !== 'pleaseSelect') {
        advanced = ` (${AdvancedPracticeCertificationTypes[this.collegeCertificationList[index].advancedPracticeCertificationType]})`;
      }

      return LicenceClassCRNTypes[this.collegeCertificationList[index].licenceClassCRNType] + (advanced ? advanced : '');
    }
    if (this.collegeCertificationList[index].collegeType === 'CPSBC'){
      return LicenceClassCPSTypes[this.collegeCertificationList[index].licenceClassCPSType];
    }

    return 'n/a';
  }

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

  get hasRegistrationInfo(): boolean {
    const hasBasics = !!(this.name && this.phone && this.email);
    return hasBasics;
  }

  get hasContactInfo(): boolean {
    const hasBasics = !!(this.name && this.phone && this.email);
    return hasBasics && !this.mailAddress.isEmpty();
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

  /** For type-guard. You very likely want to use the type guard INSTEAD of
   * accessing this variable directly. */
  _isPerson = true;
  static isPersonGuard(x: any): x is Person {
    return x._isPerson !== undefined;
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
//   licence: Licence;
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
