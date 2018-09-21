import { Component, OnInit } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Person } from '../../../../models/person.model';
import { EnrollmentStatus } from '../../../../models/enrollment-status.enum';
import { PharmaNetOrganization } from '../../../../models/organizations.model';

@Component({
  selector: 'prime-pharma-net-page',
  templateUrl: './pharma-net-page.component.html',
  styleUrls: ['./pharma-net-page.component.scss']
})
export class PharmaNetPageComponent implements OnInit {

  constructor(private dataService: PrimeDataService) { }

  public hasSelectedOrg = false;

  public organizations: PharmaNetOrganization[];

  ngOnInit() {
    this.organizations = this.applicant.allOrganizations();
  }


  ngDoCheck (){
    this.hasSelectedOrg = this.applicant.organizationAccess.length > 0;

    if (this.organizations.length !== this.applicant.allOrganizations().length ){
      console.log('updating orgs');
      this.organizations = this.applicant.allOrganizations();
    }
  }

  get applicant(): Person {
    return this.dataService.user;
  }

}
