import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';
import { Router } from '@angular/router';
import {PrimeDataService} from '../../../../services/prime-data.service';
import { EnrollmentStatus } from '../../../../models/enrollment-status.enum';


@Component({
  selector: 'prime-complete-submission',
  templateUrl: './complete-submission.component.html',
  styleUrls: ['./complete-submission.component.scss']
})
export class CompleteSubmissionComponent implements OnInit {

  constructor(private dataService: PrimeDataService, private router: Router) { }

  showApplicantNewText: boolean = true;

  ngOnInit() {
    // If any sites are Active or Declined, show the other text
    this.showApplicantNewText = this.dataService.user.allOrganizations()
      .map(org => {
        const sa = org.getSiteAccessWithStatus(EnrollmentStatus.Active);
        sa.concat(org.getSiteAccessWithStatus(EnrollmentStatus.Declined));
        return sa;
      }).filter(arr => arr && arr.length >= 1)
      .length === 0;
  }


  continue() {
    this.router.navigate(['/applicant/dashboard']);
  }
}
