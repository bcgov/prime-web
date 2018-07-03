import { Component, OnInit } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Person } from '../../../../models/person.model';
import {ApplEnrollmentRowItem} from '../../components/appl-enrollment-row/appl-enrollment-row.component';
import {Router} from '@angular/router';
import {cloneDeep} from 'lodash';
import {CollegeTypes, WorkingOnBehalfTitleTypes} from '../../../../models/colleges.enum';
import {isNullOrUndefined} from 'util';
import {moment} from 'ngx-bootstrap/chronos/test/chain';


@Component({
  selector: 'prime-applicant-dashboard',
  templateUrl: './applicant-dashboard.component.html',
  styleUrls: ['./applicant-dashboard.component.scss']
})
export class ApplicantDashboardComponent implements OnInit {

  private _dateFormat = 'MMM DD, YYYY';

  constructor(private primeDataService: PrimeDataService,
              private router: Router) {}

  ngOnInit() {

    // Redirect to contact page to be completed, if applicant is missing information
    if (!this.contactDone) {
      const link = '/applicant/contact';
      this.router.navigate([link]);
    } else if (!this.professionalDone) {
      const link = '/applicant/professional';
      this.router.navigate([link]);
    //} else if (!this.accessAcceptanceDone) {
    //  const link = '/applicant/access-acceptance';
    //  this.router.navigate([link]);
    }
  }

  get applicant(): Person {
    return this.primeDataService.user;
  }

  /**
   * List of enrollments for the user
   * @returns {ApplEnrollmentRowItem[]}
   */
  get userSiteEnrollmentData(): ApplEnrollmentRowItem[] {
    // functions creates a copy of data - uses map functionality
    return this.primeDataService.getUserSiteEnrollment();
  }

  get contactDone(): boolean {
    return this.applicant.hasContactInfo;
  }

  get professionalDone(): boolean {
    if (isNullOrUndefined( this.applicant.hasCollege ) && isNullOrUndefined( this.applicant.isWorkingOnBehalf ) ) {
      return false;
    }
    return this.applicant.hasCollege || this.applicant.isWorkingOnBehalf;
  }

  get accessAcceptanceDone(): boolean {
    return !!this.applicant.accessAcceptance;
  }

  get collegeType(): string {
    const obj = Object.keys( CollegeTypes ).filter(x => x === this.applicant.collegeCertificationList[0].collegeType );
    return (obj.length > 0) ? obj[0] : 'n/a';
  }

  get licenceNumber(): string {
    const licence = this.applicant.collegeCertificationList[0].licenceNumber;
    return (isNullOrUndefined( licence )) ? 'n/a' : licence;
  }

  get licenceExpiryDate(): string {
    const expiryDate = this.applicant.collegeCertificationList[0].licenceExpiryDate;
    return (isNullOrUndefined( expiryDate )) ? 'n/a' : moment( expiryDate ).format( this._dateFormat );
  }

  get jobTitle(): string {
    const obj = Object.keys( WorkingOnBehalfTitleTypes ).filter(x => x === this.applicant.workingOnBehalfList[0].jobTitle );
    return (obj.length > 0) ? WorkingOnBehalfTitleTypes[obj[0]] : 'n/a';
  }

  get renewalDate(): string {
    return (isNullOrUndefined( this.applicant.renewalDate )) ? 'n/a' : moment( this.applicant.renewalDate ).format( this._dateFormat );
  }

  // Applicant information needs to be updated
  onSave() {
    console.log('dashboard component save data');

    //TODO: save all pending changes to the original array
  }
}
