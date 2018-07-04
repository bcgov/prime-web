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
  collection: Collection;

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

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      if (this.IS_SHOWING_PERSON) {
        this.person = this.dataService.findPersonByObjectId(id);
      } else {
        this.site = this.dataService.findSiteByObjectId(id);
      }
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

  get provisionerSiteData(): EnrollmentRowItem[] {
    return this.dataService.getEnrollmentBySite();
  }

  get provisionerUserData(): EnrollmentRowItem[] {
    return this.dataService.getEnrollmentByUser();
  }

  findCollectionFromSite(site: Site): Collection {
    return this.dataService.findCollectionFromSite(site)[0];
  }
}

enum ProvisionByType {
  user = "user",
  site = "site",
}
