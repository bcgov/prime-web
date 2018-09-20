import { Component, OnInit } from '@angular/core';
import { PrimeDataService } from '../../services/prime-data.service';

@Component({
  selector: 'prime-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private dataService: PrimeDataService) { }

  ngOnInit() {
  }


  registrationCompleted(): boolean {

    // User has filled out name/email/phone from registration
    return this.dataService.user.hasRegistrationInfo || !!this.dataService.user.pairingCode;
  }

  applicationNewCompleted(): boolean {
    // User has filled out the PharmaNet screen from applicant
    return this.dataService.user.selectedPharmaNetOrgs.length >= 1;
  }

}
