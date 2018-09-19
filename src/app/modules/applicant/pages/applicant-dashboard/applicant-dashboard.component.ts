import { Component, OnInit } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Person } from '../../../../models/person.model';
import {ApplEnrollmentRowItem} from '../../components/appl-enrollment-row/appl-enrollment-row.component';
import {Router} from '@angular/router';
import {cloneDeep} from 'lodash';
import {CollegeTypes, WorkingOnBehalfTitleTypes, CollegeHelper} from '../../../../models/colleges.enum';
import {isNullOrUndefined} from 'util';
import {moment} from 'ngx-bootstrap/chronos/test/chain';
import {forEach} from '@angular/router/src/utils/collection';
import {Site, SiteAccess} from '../../../../models/sites.model';
import { environment } from 'environments/environment';


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

    if (environment.skipRedirects){
      return;
    }

    // Disabled redirects for now
    // if (!this.contactDone) {
    //   const link = '/applicant/contact';
    //   this.router.navigate([link]);
    // } else if (!this.professionalDone) {
    //   const link = '/applicant/professional';
    //   this.router.navigate([link]);
    // //} else if (!this.accessAcceptanceDone) {
    // //  const link = '/applicant/access-acceptance';
    // //  this.router.navigate([link]);
    // }
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
    if (this.applicant.hasCollege && this.applicant.isWorkingOnBehalf ) {
      return false;
    }
    return this.applicant.hasCollege || this.applicant.isWorkingOnBehalf;
  }

  get accessAcceptanceDone(): boolean {
    return !!this.applicant.accessAcceptance;
  }

  get collegeType(): string {
    const college = CollegeHelper.getFullCollegeNameFromString(this.applicant.collegeCertificationList[0].collegeType);

    return college ? college : 'n/a';
  }

  get licenceNumber(): string {
    const licence = this.applicant.collegeCertificationList[0].licenceNumber;
    return licence ? 'n/a' : licence;
  }

  get licenceExpiryDate(): string {
    const expiryDate = this.applicant.collegeCertificationList[0].licenceExpiryDate;
    return expiryDate ? 'n/a' : moment( expiryDate ).format( this._dateFormat );
  }

  get jobTitle(): string {
    const obj = Object.keys( WorkingOnBehalfTitleTypes ).filter(x => x === this.applicant.workingOnBehalfList[0].jobTitle );
    return (obj.length > 0) ? WorkingOnBehalfTitleTypes[obj[0]] : 'n/a';
  }

  get renewalDate(): string {
    return this.applicant.renewalDate ? 'n/a' : moment( this.applicant.renewalDate ).format( this._dateFormat );
  }

  // Applicant information needs to be updated
  onSave( updateList: SiteAccess[] ) {

    updateList.map(sa =>  {
      //Go from our copy to the original in dataService
      const orig = this.primeDataService.findUserSiteAccessByObjectId( sa.objectId );
      orig.endDate = sa.endDate;
      orig.declinedReason = sa.declinedReason;
      orig.accessReason = sa.accessReason;
      orig.status = sa.status;
    });
  }
}
