import { Component, OnInit } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Person } from '../../../../models/person.model';

@Component({
  selector: 'prime-pharma-net-page',
  templateUrl: './pharma-net-page.component.html',
  styleUrls: ['./pharma-net-page.component.scss']
})
export class PharmaNetPageComponent implements OnInit {

  constructor(private dataService: PrimeDataService) { }

  hasSelectedOrg = false;

  ngOnInit() {
  }

  get orgsOnly(): boolean {
    return !!this.applicant.pairingCode;
  }

  ngDoCheck (){
    this.hasSelectedOrg = this.applicant.selectedPharmaNetOrgs.length > 0;
  }

  get applicant(): Person {
    return this.dataService.user;
  }
  

}
