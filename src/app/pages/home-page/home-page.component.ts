import { Component, OnInit } from '@angular/core';
import { PrimeDataService } from '../../services/prime-data.service';
import { Router } from '@angular/router';
import { EnrollmentStatus } from '../../models/enrollment-status.enum';

@Component({
  selector: 'prime-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private dataService: PrimeDataService, private router: Router) { }

  ngOnInit() {
  }

  goToApplicantWithChanges(){

    // The idea here is time has passed, the Provisioner has made changes requiring the Applicant to deal with them
    // Set all sites in the orgs as New
    // this.dataService.user.selectedPharmaNetOrgs = this.dataService.user.selectedPharmaNetOrgs.map(org => {
    //   org.members = org.members.map(site => {
    //     site.siteAccess[0].status = EnrollmentStatus.New;
    //     return site;
    //   });
    //   return org;
    // });

    this.dataService.user.allOrganizations().map(org => {
      org.members = org.members.map(site => {
        site.siteAccess[0].status = EnrollmentStatus.New;
        return site;
      })
    })


    this.router.navigate([ '/applicant/dashboard' ]);
  }


  registrationCompleted(): boolean {

    // User has filled out name/email/phone from registration
    return this.dataService.user.hasRegistrationInfo;
  }

  applicationNewCompleted(): boolean {
    // User has filled out the PharmaNet screen from applicant
    return this.dataService.user.organizationAccess.length >= 1;
  }

}
