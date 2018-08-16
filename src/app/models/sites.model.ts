import * as moment from 'moment';
import { Base } from '../core/base/base.class';
import { EnrollmentStatus } from './enrollment-status.enum';
import { Person, Role, Verifier, Provisioner } from './person.model';
import { Address } from './addresses.model';
import {BadgeLevel} from '../core/enrollment-row/enrollment-row.class';
import {st} from '@angular/core/src/render3';
import {isNullOrUndefined} from 'util';

//-----------------------------------------------------------------------------
// SITES
//-----------------------------------------------------------------------------

// Locations for PRIME.
export class Site extends Base {
  name: string;
  address: Address;
  siteAccess: SiteAccess[];
  siteType: string; //TODO: Change to Enum once we have all the types
  vendor: string;
  PEC: string;

  // set data for demo
  set siteDemoData( data: string ) {

    const _data = data.split( ',' );

    if (_data[0]) { this.name = _data[0]; }
    if (_data[1]) { this.PEC = _data[1]; }
    if (_data[2]) { this.siteType = _data[2]; }
    if (_data[3]) { this.vendor = _data[3]; }
  }

  constructor() {
    super();
    this.siteAccess = [];
  }


  get users(): Person[] {
    return this.siteAccess.map(siteAccess => siteAccess.person)
      .filter(this.filterUnique);
  }

  get activeUsers(): Person[] {
    return this.siteAccess.filter(x => x.status === EnrollmentStatus.Active)
      .map(siteAccess => { return siteAccess.person; })
      .filter(this.filterUnique);
  }

  getUsersForStatus(status: EnrollmentStatus){
    return this.siteAccess.filter(x => x.status === status)
      .map(siteAccess => { return siteAccess.person; })
      .filter(this.filterUnique);
  }


  /** For type-guard. You very likely want to use the type guard INSTEAD of
   * accessing this variable directly. */
  _isSite = true;
  static isSiteGuard(x: any): x is Site {
    return x._isSite !== undefined;
  }

  private filterUnique(x, i, a){
    return x && a.indexOf(x) === i;
  }
}

// The record of a specific user's access to a specific site
export class SiteAccess extends Base {

  private _dateFormat = 'YYYY/MM/DD';
  site: Site;
  // Displayed to user
  title: string;
  person: Person;
  status: EnrollmentStatus;
  declinedReason: string;
  accessReason: string;
  requestDate: Date; // Date site access is requested, submitted to processed
  startDate: Date;
  endDate: Date;
  vendor: Vendor;
  personalAccessToPharmaNet: boolean;
  verifier: Verifier; // "by" in xlsx designs -  responsible for approving
  provisioner: Provisioner;

  request: string;
  siteClass: string;
  accessRights: string;
  tAndC: string;
  posUserId: string;
  provisionedDate: Date;
  provisionedStatus: ProvisionedStatus = ProvisionedStatus.NOT_PROVISIONED;

  get isProvisioned(): boolean {
    return !!(this.provisionedStatus === ProvisionedStatus.PROVISIONED && this.provisionedDate)
  }

  get isActive(): boolean {
    return this.status === EnrollmentStatus.Active;
  }

  // In-progress
  progress: SiteAccessProgressSteps;

  // Are there changes to the data made by the user that have not been submitted? NOTE: Rudimentary for now in prototype.
  pendingChanges: boolean;

  // the value must be a class itself (subclassing Role) - not an instance!
  // e.g. x.privilege = Verifier
  privilege: typeof Role;

  get alert(): EnrollmentAlert {
    return new EnrollmentAlert(this.status);
  }

  get daysUntilExpiry(): number {
    const expiry = moment(this.endDate);
    const today = moment();
    return expiry.diff(today, 'days');
  }

  get endDateShort(): string {
    return moment(this.endDate).format(this._dateFormat);
  }

  get startDateShort(): string {
    return moment(this.startDate).format(this._dateFormat);
  }

  formatDateShort(date: Date){
    return moment(date).format(this._dateFormat);
  }

  // Set demo data
  set siteAccessDemo( access: string ) {
    const data = access.split(',');

    this.status = EnrollmentStatus[data[0]];
    if (data[1]) { this.accessReason = data[1]; }
    if (data[2]){ this.declinedReason = data[2]; }
    if (data[3]) { this.requestDate = new Date(data[3]); }
    if (data[4]) { this.startDate = new Date(data[4]); }
    if (data[5]) { this.endDate = new Date(data[5]); }
    if (data[6]) { this.progress = SiteAccessProgressSteps[data[6]]; }

    if (data[7]) { this.request = data[7]; }
    if (data[8]) { this.siteClass = data[8]; }
    if (data[9]) { this.accessRights = data[9]; }
    if (data[10]) { this.tAndC = data[10]; }
  }
}

class Vendor extends Base { }

export class EnrollmentAlert {
  level: BadgeLevel;

  constructor(public status: EnrollmentStatus){
    this.level = EnrollmentAlert.convertStatusToBadgeLevel(status);
  }

  static convertStatusToBadgeLevel(status: EnrollmentStatus): BadgeLevel {
    if (status === EnrollmentStatus.Provisioning){
        return BadgeLevel.Yellow;
    }

    if (status === EnrollmentStatus.Expired){
        return BadgeLevel.RedLight;
    }

    if (status === EnrollmentStatus.Declined){
        return BadgeLevel.Red;
    }

    if (status === EnrollmentStatus.Initiated){
      return BadgeLevel.Yellow;
    }

    if (status === EnrollmentStatus.Incomplete){
      return BadgeLevel.Yellow;
    }

    if (status === EnrollmentStatus.Active){
      return BadgeLevel.Green;
    }

    if (status === EnrollmentStatus.Returned){
      return BadgeLevel.Yellow;
    }

    if (status === EnrollmentStatus.New){
      return BadgeLevel.GreenLight;
    }

    if (status === EnrollmentStatus.Approved){
      return BadgeLevel.Green;
    }

    if (status === EnrollmentStatus.Review){
      return BadgeLevel.YellowLight;
    }
  }
}

/**
 * These are steps, IN ORDER, for a Site Request. Tied closely with EnrollmentProgressRowComponent
 */
export enum SiteAccessProgressSteps {
  Verifier = 'Verifier',
  Applicant = 'Applicant',
  MoH = 'MoH',
  Provisioner = 'Provisioner'
}

export enum DeclinedReasons {
  ACCESS_NO_lONGER_REQUIRED = 'Access no longer required',
  WRONG_SITE = 'Wrong site'
}

export enum AccessReasons {
  PERSONAL_ACCESS = 'I will access PharmaNet myself',
  NOT_PERSONAL_ACCESS = 'I will not access PharmaNet myself. Someone else will access PharmaNet on my behalf.'
}

export enum ProvisionRequestOptions {
  ADD = 'Add Access'
}

export enum AccessClass {
  PRESCRIBER = 'Prescriber'
}

export enum AccessRights {
  MED_HIST_AND_CLAIMS = 'Med Hist + Claims',
  MED_HIST = 'Med Hist'
}

export enum ProvisionedStatus {
  PROVISIONED,
  /** The provisioner has actively rejected the request */
  REJECTED,
  /** Not provisioned just means it has no status, it's similar to undefined. The user might have yet to make a decision. */
  NOT_PROVISIONED,
}
