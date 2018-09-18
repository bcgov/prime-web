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
  goToDashboard() {
    this.router.navigate(['applicant/dashboard']);
  }
}
