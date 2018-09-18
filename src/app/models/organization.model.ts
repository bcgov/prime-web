import { Group } from './collections.model';
import { Site, SiteAccess } from './sites.model';
import { Person } from './person.model';
import { EnrollmentStatus } from './enrollment-status.enum';

export class PharmaNetOrganization extends Group<Site> {
    constructor(public title: string, sites: Site[]) {
        super();
        this.members = sites;
    }

    allSiteAccess(): SiteAccess[] {
        return [].concat(...this.members.map(site => site.siteAccess));
    }

    /** Makes sure that only one site access per site is returned */
    allSiteAccessForPerson(person: Person): SiteAccess[] {
        // Check on objectID in case we're dealing with duplicates
        return this.allSiteAccess().filter(sa => sa.person.objectId === person.objectId);
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

        return this.allSiteAccess();
    }

}