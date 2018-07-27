import { Component, OnInit } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { CollegeHelper, WorkingOnBehalfTitleTypes } from '../../../../models/colleges.enum';
import { isNullOrUndefined } from 'util';
import { moment } from 'ngx-bootstrap/chronos/test/chain';
import { Router } from '@angular/router';

@Component({
  selector: 'prime-applicant-review-page',
  templateUrl: './applicant-review-page.component.html',
  styleUrls: ['./applicant-review-page.component.scss']
})
export class ApplicantReviewPageComponent implements OnInit {

  private _dateFormat = 'MMM DD, YYYY';
  constructor(private dataService: PrimeDataService, private router: Router) { }

  ngOnInit() {
  }

  get applicant() {
    return this.dataService.user;
  }

  get collegeType(): string {
    const college = CollegeHelper.getFullCollegeNameFromString(this.applicant.collegeCertificationList[0].collegeType);
    return college ? college : 'n/a';
  }

  get licenceExpiryDate(): string {
    const expiryDate = this.applicant.collegeCertificationList[0].licenceExpiryDate;
    return (isNullOrUndefined( expiryDate )) ? 'n/a' : moment( expiryDate ).format( this._dateFormat );
  }

  get jobTitle(): string {
    const obj = Object.keys( WorkingOnBehalfTitleTypes ).filter(x => x === this.applicant.workingOnBehalfList[0].jobTitle );
    return (obj.length > 0) ? WorkingOnBehalfTitleTypes[obj[0]] : 'n/a';
  }


  /** Converts a boolean (from one of the Self Declaration answers) to a human readable string. */
  getSelfDeclarationAnswer(val: boolean): string{
    return val ? 'Yes, details provided' : 'No';
  }

  getUAAAnswer(val: boolean): string {
    return val ? 'Accepted' : 'Not accepted';
  }


  goToContactPage(){
    this.router.navigate(['applicant/contact']);
  }

  goToProfessionalPage(){
    this.router.navigate(['applicant/professional']);
  }

  goToUAAPage(){
    this.router.navigate(['applicant/access-acceptance']);
  }

}
