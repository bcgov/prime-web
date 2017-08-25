import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantDataService } from '../../services/applicant-data.service';
import { Applicant } from '../../models/applicant';
import { Select2OptionData } from 'ng2-select2';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss']
})
export class ContactInformationComponent implements OnInit {

  public countries;
  public applicant: Applicant;
  // public securityQuestions: {question: string, selected: boolean}[];
  public securityQuestions: Select2OptionData[];

  constructor(private router: Router,
    private applicantData: ApplicantDataService) {
    this.applicant = applicantData.applicant;
    //todo
    //make an interface for the list type below, i.e. select2 lists
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

    // this.securityQuestions = [
    //   {question: "What was your first pet's name?", selected: true},
    //   {question: "What was the make of your first car?", selected: true},
    //   {question: "What was the last name of your favourite teacher?", selected: false},
    //   {question: "What was the last name of your childhood best friend?", selected: false},
    //   {question: "What is your oldest cousin's first name?", selected: false},
    //   {question: "What town was your father born in?", selected: false},
    //   {question: "What town was your mother born in?", selected: false},
    //   {question: "Where did you meet your spouse?", selected: false},
    //   {question: "What year did you meet your spouse?", selected: false},
    //   {question: "What is the name of your favourite book?", selected: false}
    // ]

    //TODO - What ids would the backend want here?
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

  // getSecurityQuestions(offset: number) : Select2OptionData[] {
  //   let arr = this.securityQuestions.slice();
  //   return this.rotateArray(arr, offset);
  // }

  // private rotateArray(arr: any[], timesToRotate: number) {
  //   for (let i = 0; i <= timesToRotate; i++) {
  //     arr.push(arr.shift());
  //   }
  //   return arr;
  // }

  selectQuestion(question, event) {
    question.selected = event.target.checked;
  }

  ngOnInit() {
  }

  hasBCServicesCard(val: boolean): void {
    this.applicant.hasBCServicesCard = val;
  }

  canContinue(): boolean {
    return true;
  }

  continue(): void {
    console.log('---------------\ncontinue');
    this.router.navigate(['self-declaration']);
  }

}
