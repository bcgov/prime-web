import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';
import { Router } from '@angular/router';
import {PrimeDataService} from '../../../../services/prime-data.service';


@Component({
  selector: 'prime-complete-submission',
  templateUrl: './complete-submission.component.html',
  styleUrls: ['./complete-submission.component.scss']
})
export class CompleteSubmissionComponent implements OnInit {

  constructor(private dataService: PrimeDataService, private router: Router) { }

  ngOnInit() {
  }
  continue() {
    // Navigate to homepage. User can go to dashboard via Applicant Changes
    this.router.navigate(['/']);
  }
}
