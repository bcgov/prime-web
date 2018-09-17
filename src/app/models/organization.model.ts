import { Group } from './collections.model';
import { Site, SiteAccess } from './sites.model';

export class PharmaNetOrganization extends Group<Site> {
    constructor(public title: string, sites: Site[]) {
        super();
        this.members = sites;
    }

    allSiteAccess(): SiteAccess[] {
        return [].concat(...this.members.map(site => site.siteAccess));
    }

    // /** Is the org open in the collapsible list? */
    // isOpen: boolean = false;
}