import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../core/base-component/base-component.component';

import { Applicant } from '../../models/applicant';
import { ApplicantDataService } from '../../services/applicant-data.service';


@Component({
  selector: 'app-review-submit',
  templateUrl: './review-submit.component.html',
  styleUrls: ['./review-submit.component.scss']
})
export class ReviewSubmitComponent extends BaseComponent implements OnInit {

  private hasValidToken: boolean = false;
  public applicant: Applicant;

  constructor(private router: Router, private dataStore: ApplicantDataService) {
    super();
    this.applicant = dataStore.applicant;
   }

  ngOnInit() {
  }

  canContinue(): boolean {
    return this.hasValidToken;
  }

  onValidToken(event): void {
    console.log(event);
    this.hasValidToken = true;
  }

  continue(): void {
    console.log('---------------\all done!');
  }

}
