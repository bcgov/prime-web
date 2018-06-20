import { Component, OnInit } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Person } from '../../../../models/person.model';
import {ApplEnrollmentRowItem} from '../../components/appl-enrollment-row/appl-enrollment-row.component';
import {Router} from '@angular/router';
import {cloneDeep} from 'lodash';

@Component({
  selector: 'prime-applicant-dashboard',
  templateUrl: './applicant-dashboard.component.html',
  styleUrls: ['./applicant-dashboard.component.scss']
})
export class ApplicantDashboardComponent implements OnInit {

  constructor(private primeDataService: PrimeDataService,
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

  // Applicant information needs to be updated
  onSave() {
    console.log('dashboard component save data');
  }

  // Applicant data needs to be reset
  onCancel() {
    console.log('dashboard component cancel data');
  }
}
