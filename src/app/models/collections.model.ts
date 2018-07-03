import { Site, SiteAccess } from './sites.model';
import { Base } from '../core/base/base.class';
import { EnrollmentStatus } from './enrollment-status.enum';
import { Person } from './person.model';



abstract class Group<T> extends Base {
  find() { };
  contains() { }; // just an example
  members: T[];
  // Displayed name to user
  name: string;
}
export class Collection extends Group<Site> {

  constructor(public name: string, sites: Site[]){
    super();
    this.members = sites;
  }

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
 }
