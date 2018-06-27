import * as moment from 'moment';
import { Base } from '../core/base/base.class';
import { EnrollmentStatus } from './enrollment-status.enum';
import { Person, Role, Verifier, Provisioner } from './person.model';
import { Address } from './addresses.model';
import {BadgeLevel} from '../core/enrollment-row/enrollment-row.class';
import {st} from '@angular/core/src/render3';

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
  request: string;
  siteClass: string;
  accessRights: string;
  startDate: string;
  personalAccess: string;
  tAndC: string;
  endDate: string;
  posUserId: string;
  provisionedDate: string;
  collegeId: string;

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

  get provisionedDateShort(): string {
    return moment(this.provisionedDate).format('DD/MM/YYYY');
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
  site: Site;
  // Displayed to user
  title: string;
  // person: Role;
  person: Person;
  status: EnrollmentStatus;
  declinedReason: string;
  accessReason: string;
  requestDate: Date; // when SiteRequest was initiated
  startDate: Date;
  endDate: Date;
  vendor: Vendor;
  personalAccessToPharmaNet: boolean;
  verifier: Verifier; // "by" in xlsx designs -  responsible for approving
  provisioner: Provisioner;

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
    return moment(this.endDate).format('DD/MM/YYYY');
  }

  get startDateShort(): string {
    return moment(this.startDate).format('DD/MM/YYYY');
  }

  formatDateShort(date: Date){
    return moment(date).format('DD/MM/YYYY');
  }

  // Set demo data
  setSiteAccess( access: string ) {
    const data = access.split(',');

    this.status = EnrollmentStatus[data[0]];
    if (null !== data[1]) { this.accessReason = data[1]; }
    if (null !== data[2]) { this.declinedReason = data[2]; }
    if (null !== data[3]) { this.requestDate = new Date(data[3]); }
    if (null !== data[4]) { this.requestDate = new Date(data[4]); }
    if (null !== data[5]) { this.requestDate = new Date(data[5]); }
    if (null !== data[6]) { this.progress = SiteAccessProgressSteps[data[6]]; }
  }
}

class Vendor extends Base { }

export class EnrollmentAlert {
  level: BadgeLevel;

  constructor(public status: EnrollmentStatus){
    this.level = EnrollmentAlert.convertStatusToBadgeLevel(status);
  }

  static convertStatusToBadgeLevel(status: EnrollmentStatus): BadgeLevel {
    if (status === EnrollmentStatus.Pending){
        return BadgeLevel.Warning;
    }

    if (status === EnrollmentStatus.Expired){
        return BadgeLevel.DangerLight;
    }

    if (status === EnrollmentStatus.Declined){
        return BadgeLevel.Danger;
    }

    if (status === EnrollmentStatus.Initiated){
      return BadgeLevel.InfoLight;
    }

    if (status === EnrollmentStatus.Incomplete){
      return BadgeLevel.Warning;
    }

    if (status === EnrollmentStatus.Active){
      return BadgeLevel.Success;
    }

    if (status === EnrollmentStatus.Returned){
      return BadgeLevel.Info;
    }

    if (status === EnrollmentStatus.New){
      return BadgeLevel.Attention;
    }

    if (status === EnrollmentStatus.Approved){
      return BadgeLevel.Success;
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
  WRONG_SITE = 'Wrong Site',
  ACCESS_NO_lONGER_REQUIRED = 'Access No Longer Required'
}

export enum AccessReasons {
  PERSONAL_ACCESS = 'I personally access PNET',
  NOT_PERSONAL_ACCESS = 'Not for personal access'
}
