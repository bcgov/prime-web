import { Component, OnInit } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Person } from '../../../../models/person.model';
import { EnrollmentStatus } from '../../../../models/enrollment-status.enum';

@Component({
  selector: 'prime-pharma-net-page',
  templateUrl: './pharma-net-page.component.html',
  styleUrls: ['./pharma-net-page.component.scss']
})
export class PharmaNetPageComponent implements OnInit {

  constructor(private dataService: PrimeDataService) { }

  hasSelectedOrg = false;
  public orgsOnly: boolean = true;

  ngOnInit() {
    console.log('orgsOnly?', this.orgsOnly, 'pairingCode', this.applicant.pairingCode);
    this.orgsOnly = this.calcOrgsOnly();
  }


  // Quick and dirty prototype function. It checks if any of the Orgs>Sites>SiteAccess have status !== null
  // If they're null, then we want to hide the org.
  calcOrgsOnly(): boolean {
    return this.applicant.selectedPharmaNetOrgs.filter(org => {
      return org.members.filter(site => {
        return site.siteAccess.length && site.siteAccess[0].status !== null;
      }).length >= 1;
    }).length === 0;
  }

  ngDoCheck (){
    this.hasSelectedOrg = this.applicant.selectedPharmaNetOrgs.length > 0;
  }

  get applicant(): Person {
    return this.dataService.user;
  }
  

}
