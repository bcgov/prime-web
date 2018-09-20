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

  public hasSelectedOrg = false;

  ngOnInit() {
  }

  ngDoCheck (){
    this.hasSelectedOrg = this.applicant.organizationAccess.length > 0;
  }

  get applicant(): Person {
    return this.dataService.user;
  }

}
