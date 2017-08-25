import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantDataService } from '../../services/applicant-data.service';
import { Applicant } from '../../models/applicant';


@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss']
})
export class ContactInformationComponent implements OnInit {

  public countries;
  public applicant: Applicant;
  // public securityQuestions: {question: string, selected: boolean}[];
  public securityQuestions: any[];

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

    this.securityQuestions = [
      {text: "What was your first pet's name?", id: 1},
      {text: "What was the make of your first car?", id: 2},
      {text: "What was the last name of your favourite teacher?", id: 3},
      {text: "What was the last name of your childhood best friend?", id: 4},
      {text: "What is your oldest cousin's first name?", id: 5},
      {text: "What town was your father born in?", id: 6},
      {text: "What town was your mother born in?", id: 7},
      {text: "Where did you meet your spouse?", id: 8},
      {text: "What year did you meet your spouse?", id: 9},
      {text: "What is the name of your favourite book?", id: 10}
    ]
   }

  selectQuestion(question, event){
    question.selected = event.target.checked;
  }

  ngOnInit() {
  }

  hasBCServicesCard(val: boolean) : void {
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
