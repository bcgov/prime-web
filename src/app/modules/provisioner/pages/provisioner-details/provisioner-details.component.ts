import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Person } from '../../../../models/person.model';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Site } from '../../../../models/sites.model';
import { PharmaNetOrganization } from '../../../../models/organizations.model';
import { EnrollmentRowItem } from '../../../verifier/components/enrollment-row/enrollment-row.component';
import { EnrollmentStatus } from '../../../../models/enrollment-status.enum';
import {CollegeTypes} from "../../../../models/colleges.enum";
import {ProvisionerRowItem} from "../../components/provisioner-row/provisioner-row.component";

@Component({
  selector: 'prime-provisioner-details',
  templateUrl: './provisioner-details.component.html',
  styleUrls: ['./provisioner-details.component.scss']
})
export class ProvisionerDetailsComponent implements OnInit {
  sub: Subscription;
  provisionByType: ProvisionByType;
  person: Person;
  site: Site;
  collection: PharmaNetOrganization;

  constructor(private route: ActivatedRoute, private dataService: PrimeDataService, private router: Router, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.sub = this.route.data
      .subscribe(data => {
        if (data.type){
          this.provisionByType = data.type;
          console.log('ProvisionerDetailsComponent initailized as:', this.provisionByType);
        }
        else {
          throw "ProvisionerDetails unable to initialize. It depends on retrieving data from the route, but the data was not there.  Is provisioner-routing.module.ts configured with data for these routes?"
        }
      });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      if (this.IS_SHOWING_PERSON) {
        this.person = this.dataService.findPersonByObjectId(id);
      } else {
        this.site = this.dataService.findSiteByObjectId(id);
      }
    }

    // If no ID, or neither person or site is defined, we want to redirect back
    // This usually happens when the user refreshes the page and the objectId's are re-generated
    if (!id || id.length === 0 || ( !this.person && !this.site ) ){
      const url = this.router.url.split('/');
      url.pop(); //Remove objectID, which we know is last item in array
      const type = url.pop(); //Will be 'user' or 'string';
      this.router.navigate([`/provisioner/dashboard/${type}`]);
      console.error('Provisioner Details objectId (in url) refers to an object which does not exist! Removed objectId from URl and navigated back to Provisioner Dashboard.');
      return;
    }

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  get IS_SHOWING_PERSON(): Boolean {
    return this.provisionByType === ProvisionByType.user;
  }

  get IS_SHOWING_SITE(): Boolean {
    return this.provisionByType === ProvisionByType.site;
  }

  // no longer used.removed as a part of PRIME-164
  get provisionerSiteData(): ProvisionerRowItem[] {
    if (!this.person) return null;
    return this.dataService.getProvisionerDetailsByUser(this.person);
  }

  get provisionerOrgSiteData(): ProvisionerRowItem[] {
    if (!this.person) return null;
    return this.dataService.getProvisionerOrgDetailsByUser(this.person);
  }


  get provisionerUserData(): ProvisionerRowItem[] {
    if (!this.site) return null;
    return this.dataService.getProvisionerDetailsBySite(this.site);
  }

  findCollectionFromSite(site: Site): PharmaNetOrganization {
    return this.dataService.findCollectionFromSite(site)[0];
  }

  collegeCurrValue(selection) {
    return CollegeTypes[selection] ? CollegeTypes[selection] : '';
  }
}



enum ProvisionByType {
  user = "user",
  site = "site",
}
