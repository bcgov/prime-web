import {Component, Input, OnChanges, OnDestroy, OnInit, QueryList, ViewChildren} from '@angular/core';
import { VerifierService } from '../../../../services/verifier.service';
import { EnrollmentRowComponent } from '../enrollment-row/enrollment-row.component';
import {defaultViewSelector, EnrollmentList} from '../../../../core/enrollment-list/enrollment-list.class';
import { EnrollmentStatus } from '../../../../models/enrollment-status.enum';
import { Person } from '../../../../models/person.model';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { OrganizationAccess } from '../../../../models/organization-access.model';
import { SiteAccess } from '../../../../models/sites.model';

@Component({
  selector: 'prime-enrollment-list',
  templateUrl: './enrollment-list.component.html',
  styleUrls: ['./enrollment-list.component.scss']
})
export class EnrollmentListComponent extends EnrollmentList implements OnInit, OnChanges, OnDestroy {

  @ViewChildren(EnrollmentRowComponent) rowElements: QueryList<EnrollmentRowComponent>

  /** What the primary/top level rows are. Changes labels and some other layout configurations. */
  @Input() primaryType: "User"|"Site" = "Site";


  //Convert enum to iterable array
  get EnrollmentStatus() {
    return Object.keys(this.verifierService.VerifierEnrollmentStatus);
    // return [ EnrollmentStatus.Active]
  }

  constructor(private verifierService: VerifierService, private dataService: PrimeDataService) {
    super();

    verifierService.$enrollmentViewType.subscribe(viewType => {
      this.viewTypeSelector = viewType;
      this.viewTypes(viewType);
    });
  }

  ngOnInit() {
    this.data = this.rowItems;
  }

  ngOnChanges(changes){
    // Handle rows being added to rowItems, such as the "Add User Button" when on the user view
    if (changes.rowItems && changes.rowItems.currentValue && changes.rowItems.previousValue
      && changes.rowItems.currentValue.length > changes.rowItems.previousValue.length){
      this.data = this.rowItems;
    }
  }

  ngOnDestroy(){
    this.verifierService.enrollmentViewTypeSelector = defaultViewSelector;
  }

  rowOpened(item: EnrollmentRowComponent) {
    // console.log("rowOpened", { item, rowElements: this.rowElements });
    this.rowElements.filter(x => x !== item)
      .map(x => x.closeRow());
  }

  search(phrase){
    if (this.primaryType === 'Site') {
      this.searchSites(phrase);
    }
    else if (this.primaryType === 'User'){
      this.searchUsers(phrase);
    }
  }

  // NOTE: This doesn't work properly with search. Fine for prototype for now, but will need to be resolved in future.
  viewTypes(type: string){
    if (type.toLowerCase() === "view all"){
      return this.data = this.rowItems;
    }

    this.deepSearch(expandableRow => {
      return expandableRow.status.includes(type);
    })
  }

  sort() {
    // Temporary solution for prototype before actual sorting is implemented.
    this.rowItems.reverse();
  }

  configureUserWithOrgs(person: Person){
    const orgs = this.dataService.organizations.slice(0, 2);

    orgs.map(org => {
      const orgAccess = new OrganizationAccess(person, org);
      person.organizationAccess.push(orgAccess);
      org.organizationAccess.push(orgAccess);
      this.dataService.organizationAccess.push(orgAccess);

      // Associate with all sites for now
      org.members.map(site => {
        const sa = new SiteAccess();
        sa.site = site;
        sa.person = person;
        site.siteAccess.push(sa);
        person.siteAccess.push(sa);
        this.dataService.siteAccesses.push(sa);
      });

    });

  }

}
