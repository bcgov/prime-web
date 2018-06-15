import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Person } from '../../../../models/person.model';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Site } from '../../../../models/sites.model';
import { Collection } from '../../../../models/collections.model';
import { EnrollmentRowItem } from '../../../verifier/components/enrollment-row/enrollment-row.component';
import { EnrollmentStatus } from '../../../../models/enrollment-status.enum';

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

  constructor(private route: ActivatedRoute, private dataService: PrimeDataService) { }

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

    // TODO: DEV ONLY REMOVE! Change this to get userId via URL param, look at
    // verifier-routing.module.ts for exaple with how it does it for
    // EnrollmentComponents
    this.person = this.dataService.people[0];
    this.site = this.dataService.sites[0];
    //Set first 2 rows to 'New'
    this.dataService.collections[0].members[0].siteAccess[0].status = EnrollmentStatus.New;
    this.dataService.collections[1].members[0].siteAccess[0].status = EnrollmentStatus.New;

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

  get provisionerSiteData(): EnrollmentRowItem[] {
    return this.dataService.getEnrollmentBySite();
  }

  findCollectionFromSite(site: Site): Collection {
    return this.dataService.findCollectionFromSite(site)[0];
  }
}

enum ProvisionByType {
  user = "user",
  site = "site",
}
