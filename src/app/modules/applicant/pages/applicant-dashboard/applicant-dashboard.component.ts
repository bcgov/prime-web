import { Component, OnInit } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Person } from '../../../../models/person.model';
import { DummyDataService } from '../../../../services/dummy-data.service';
import {ApplEnrollmentRowItem} from '../../components/appl-enrollment-row/appl-enrollment-row.component';
import {Router} from '@angular/router';

@Component({
  selector: 'prime-applicant-dashboard',
  templateUrl: './applicant-dashboard.component.html',
  styleUrls: ['./applicant-dashboard.component.scss']
})
export class ApplicantDashboardComponent implements OnInit {

  constructor(private primeDataService: PrimeDataService,
              private dummyDataService: DummyDataService,
              private router: Router) {}

  ngOnInit() {
    if (!this.applicant.hasContactInfo) {
      console.log('Redirect to contact page');
      const link = '/applicant/contact';
      this.router.navigate([link]);
    }
  }

  get applicant(): Person {
    return this.primeDataService.user;
  }

  get userSiteEnrollmentData(): ApplEnrollmentRowItem[] {
    return this.primeDataService.getUserSiteEnrollment();
  }

  get contactDone(): boolean {
    return this.applicant.hasContactInfo;
  }

  get professionalDone(): boolean {
    return !!this.applicant.license;
  }

  get accessAcceptanceDone(): boolean {
    return !!this.applicant.accessAcceptance;
  }
}
