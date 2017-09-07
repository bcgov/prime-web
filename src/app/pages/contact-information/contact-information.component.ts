import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantDataService } from '../../services/applicant-data.service';
import { Applicant } from '../../models/applicant.model';
import { Select2OptionData } from 'ng2-select2';

import { BaseComponent } from '../../core/base-component/base-component.component';
import { SecurityQuestions } from '../../models/security-questions';



@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss']
})
export class ContactInformationComponent extends BaseComponent implements OnInit {
  public applicant: Applicant;
  public securityQuestions: Select2OptionData[];

  public selectedSecurityQuestions: Select2OptionData[];
  private securityQuestionAndAnswers: SecurityQuestions[] = [];

  constructor(private router: Router,
    private applicantData: ApplicantDataService) {
    super();
    this.applicant = applicantData.applicant;

    /**
     * Note: Must discuss with backend devs what they'd want as IDs here. Should probably have these questions enforced on the backend, so maybe we can just pass an identifier instead of the full string.
     */
    this.securityQuestions = [
      { id: "What was your first pet's name?", text: "What was your first pet's name?" },
      { id: "What was the make of your first car?", text: "What was the make of your first car?" },
      { id: "What was the last name of your favourite teacher?", text: "What was the last name of your favourite teacher?" },
      { id: "What was the last name of  your childhood best friend?", text: "What was the last name of your childhood best friend?" },
      { id: "What is your oldest cousin's first name?", text: "What is your oldest cousin's first name?" },
      { id: "What town was your father born in?", text: "What town was your father born in?" },
      { id: "What town was your mother born in?", text: "What town was your mother born in?" },
      { id: "Where did you meet your spouse?", text: "Where did you meet your spouse?" },
      { id: "What year did you meet your spouse?", text: "What year did you meet your spouse?" },
      { id: "What is the name of your favourite book?", text: "What is the name of your favourite book?" }
    ]

    this.initSecurityQuestions();
  }

  private initSecurityQuestions() {
    //Use persisted security questions if possible
    if (this.applicant.hasSecurityQuestions) {
      this.selectedSecurityQuestions = this.applicant.securityQuestions.map(x => {
        return <Select2OptionData>{ id: x.question, text: x.question }
      })
      this.securityQuestionAndAnswers = this.applicant.securityQuestions;
    }
    else {
      this.selectedSecurityQuestions = this.securityQuestions.slice(0, 3);

      //Initialize values, otherwise we get undefined/null errors in template
      for (var index = 0; index <= 2; index++) {
        this.securityQuestionAndAnswers[index] = {
          question: this.selectedSecurityQuestions[index].text,
          answer: null
        }
      }

      //Now that the controller's questions are initialized, copy to applicant model.
      this.applicant.securityQuestions = this.securityQuestionAndAnswers;
    }
  }

  onSecurityQuestionChange(event, count) {
    const index = count - 1;
    this.securityQuestionAndAnswers[index].question = event.value;
    this.applicant.securityQuestions = this.securityQuestionAndAnswers;
    this.selectedSecurityQuestions[index] = { id: event.value, text: event.value };
  }

  onSecurityAnswerChange(input, count) {
    const index = count - 1;
    this.applicant.securityQuestions[index].answer = input;
  }

  selectQuestion(question, event) {
    question.selected = event.target.checked;
  }

  canContinue(): boolean {
    return true;
  }

  continue(): void {
    console.log('---------------\ncontinue');
    this.router.navigate(['self-declaration']);
  }

  back(): void {
    this.router.navigate(['site-access']);
  }

}
