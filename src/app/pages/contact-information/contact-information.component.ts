import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantDataService } from '../../services/applicant-data.service';
import { Applicant } from '../../models/applicant';
import { Select2OptionData } from 'ng2-select2';

import { BaseComponent } from '../../core/base-component/base-component.component';



@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss']
})
export class ContactInformationComponent extends BaseComponent implements OnInit {

  public countries: Select2OptionData[];
  public applicant: Applicant;
  public securityQuestions: Select2OptionData[];

  constructor(private router: Router,
    private applicantData: ApplicantDataService) {
    super();
    this.applicant = applicantData.applicant;

    this.countries = [
      {
        id: 'CAN',
        text: "Canada"
      },
      {
        id: "USA",
        text: "United States of America"
      }
    ]

    /**
     * Note: Must discuss with backend devs what they'd want as IDs here. Should probably have these questions enforced on the backend, so maybe we can just pass an identifier instead of the full string.
     */
    this.securityQuestions = [
      { id: "What was your first pet's name?", text: "What was your first pet's name?"},
      { id: "What was the make of your first car?", text: "What was the make of your first car?"},
      { id: "What was the last name of your favourite teacher?", text: "What was the last name of your favourite teacher?"},
      { id: "What was the last name of your childhood best friend?", text: "What was the last name of your childhood best friend?"},
      { id: "What is your oldest cousin's first name?", text: "What is your oldest cousin's first name?"},
      { id: "What town was your father born in?", text: "What town was your father born in?"},
      { id: "What town was your mother born in?", text: "What town was your mother born in?"},
      { id: "Where did you meet your spouse?", text: "Where did you meet your spouse?"},
      { id: "What year did you meet your spouse?", text: "What year did you meet your spouse?"},
      { id: "What is the name of your favourite book?", text: "What is the name of your favourite book?" }
    ]
  }

  selectQuestion(question, event) {
    question.selected = event.target.checked;
  }

  ngOnInit() {
  }

  canContinue(): boolean {
    return true;
  }

  continue(): void {
    console.log('---------------\ncontinue');
    this.router.navigate(['self-declaration']);
  }

  contactDayChange(input){
    console.log('contactDayChange with', input);
    // console.log('applicant.dates.dateofBirth', this.applicant.dates.dateOfBirth);

  }

}
