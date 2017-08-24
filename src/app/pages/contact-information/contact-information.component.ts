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
