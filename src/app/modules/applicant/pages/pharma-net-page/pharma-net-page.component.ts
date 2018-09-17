import { Component, OnInit } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Person } from '../../../../models/person.model';
import { PharmaNetOrganization } from '../../../../models/organization.model';

@Component({
  selector: 'prime-pharma-net-page',
  templateUrl: './pharma-net-page.component.html',
  styleUrls: ['./pharma-net-page.component.scss']
})
export class PharmaNetPageComponent implements OnInit {

  constructor(private dataService: PrimeDataService) { }

  ngOnInit() {
    
    // TODO - Remove! Temp only during dev
    // This simulates the user has already selected 3 orgs
    // ? TODO - Change name of vars to be more clear
    this.applicant.pharmaNetOrganizations = this.dataService.pharmaNetOrgs.slice(0, 3);

    console.log('data', this.applicant.pharmaNetOrganizations);
  }

  get applicant(): Person {
    return this.dataService.user;
  }

}
