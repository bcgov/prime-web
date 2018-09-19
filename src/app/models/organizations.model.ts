import { Site, SiteAccess } from './sites.model';
import { Base } from '../core/base/base.class';
import { EnrollmentStatus } from './enrollment-status.enum';
import { Person } from './person.model';



export abstract class Group<T> extends Base {
  find() { };
  contains() { }; // just an example
  members: T[];
  // Displayed name to user
  title: string;
}
export class PharmaNetOrganization extends Group<Site> {

  constructor(public title: string, sites: Site[], public type?: PharmaNetOrgTypes, public city?: string){
    super();
    this.members = sites;
  }

  public startDate: Date;
  public endDate: Date;

  get allUsers(): Person[] {
    return [].concat(...this.members.map(site => site.users))
      .filter((person, index, arr) => {
        //Filter out duplicate results, e.g. if one person is enrolled to multiple sites in a collection that person should only show up once.
        return arr.indexOf(person) === index;
      })
  }

  get allSiteAccess(): SiteAccess[] {
    return [].concat(...this.members.map(site => site.siteAccess));
  }

  getSiteAccessWithStatus(status: EnrollmentStatus): SiteAccess[]{
    return this.allSiteAccess.filter(SA => SA.status === status);
  }

   /** Sets new blank SiteAccess for each site, ready for user to modify */
   setupNewEnrollments(enrollmentSubject: Person): SiteAccess[] {
    this.members = this.members.map(site => {
        const sa = new SiteAccess();
        sa.site = site;
        sa.person = enrollmentSubject;
        sa.status = EnrollmentStatus.New;
        sa.startDate = new Date();
        site.siteAccess = [ sa ];
        return site;
    });

    return this.allSiteAccess;
  }
 }

export enum PharmaNetOrgTypes {
  HealthAuthority = 'HA',
  Pharmacy = 'Pharmacy',
  CommunityPractice = 'Community Practice'
}