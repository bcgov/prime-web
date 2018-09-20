import { Site, SiteAccess } from './sites.model';
import { Base } from '../core/base/base.class';
import { EnrollmentStatus } from './enrollment-status.enum';
import { Person } from './person.model';
import { OrganizationAccess } from './organization-access.model';



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

  public organizationAccess: OrganizationAccess[] = [];

  // Prototype workaround to stop setup being called multiple times.
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

   /**
    * A very kludgey solution that sets up SiteAccess for each site, setting
    * their status to null. Other pharmaNet pages then filter on this null
    * status. The "provisoiner" sets the status to non-null, effectively adding
    * the sites.  In a perfect world we would not be creating SiteAccess here.
    *
    * @param enrollmentSubject The person to asssociate the SiteAccess with.
    */
   setupNewEnrollments(enrollmentSubject: Person): SiteAccess[] {

    // Prototype workaround, can only be called once, stops it from overwriting future data
    if (!this._hasBeenSetup){
      const oa = enrollmentSubject.organizationAccess.find(x => x.organization.objectId === this.objectId);
      this.members = this.members.map(site => {
          const sa = new SiteAccess();
          sa.site = site;
          sa.person = enrollmentSubject;
          sa.status = null; // Null means they haven't been provisioned yet. Filtered in Applicant Dashboard cards.

          if (oa){
            sa.startDate = oa.startDate;
            sa.endDate = oa.endDate;
          }
          else {
            sa.startDate = new Date();
            debugger;
          }

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