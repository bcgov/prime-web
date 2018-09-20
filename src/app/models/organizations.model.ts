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

  private _hasBeenSetup: boolean = false;

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
    
    // Prototype workaround, can only be called once, stops it from overwriting future data
    if (!this._hasBeenSetup){
      this.members = this.members.map(site => {
          const sa = new SiteAccess();
          sa.site = site;
          sa.person = enrollmentSubject;
          sa.status = null; // Null means they haven't been provisioned yet. Filtered in Applicant Dashboard cards.
          sa.startDate = new Date();
          site.siteAccess = [ sa ]; // strips away any SA's that might apply to other users
          return site;
      });
      this._hasBeenSetup = true;
    }
    else { console.log('Already setup PharmaNetOrg - bypassing.')}

    return this.allSiteAccess;
  }
 }

export enum PharmaNetOrgTypes {
  HealthAuthority = 'HA',
  Pharmacy = 'Pharmacy',
  CommunityPractice = 'Community Practice'
}