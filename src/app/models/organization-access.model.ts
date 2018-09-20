import { Base } from "../core/base/base.class";
import { PharmaNetOrganization } from "./organizations.model";
import { Person } from "./person.model";

export class OrganizationAccess extends Base {
    organization: PharmaNetOrganization;
    person: Person;

    startDate: Date;
    endDate: Date;

    constructor(person?: Person, organization?: PharmaNetOrganization){
        super();
        this.person = person;
        this.organization = organization;
    }

}