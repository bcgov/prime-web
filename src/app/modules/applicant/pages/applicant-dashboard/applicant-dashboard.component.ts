import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Person } from '../../../../models/person.model';
import {ApplEnrollmentRowItem} from '../../components/appl-enrollment-row/appl-enrollment-row.component';
import {Router} from '@angular/router';
import {WorkingOnBehalfTitleTypes, CollegeHelper} from '../../../../models/colleges.enum';
import {moment} from 'ngx-bootstrap/chronos/test/chain';
import { environment } from 'environments/environment';


@Component({
  selector: 'prime-applicant-dashboard',
  templateUrl: './applicant-dashboard.component.html',
  styleUrls: ['./applicant-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  // TODO - This function must be completed once we have appropriate data.
  // Believe if sites are set for the user by a Provisoiner then sites will be flagged
  showPharmaNetAccessWarning(): boolean {
    return false;
  }

  get orgCount(): number {
    return this.applicant.selectedPharmaNetOrgs.length;
  }

  get siteCount(): number {
    if (!this.applicant.selectedPharmaNetOrgs.length) return 0;

    return this.applicant.selectedPharmaNetOrgs
      .map(orgs => orgs.members) // get all sites
      .reduce( (a, b) => a.concat(b)).length; // concat into single array get # of sites
  }

  // // Applicant information needs to be updated
  // onSave( updateList: SiteAccess[] ) {

  //   updateList.map(sa =>  {
  //     //Go from our copy to the original in dataService
  //     const orig = this.primeDataService.findUserSiteAccessByObjectId( sa.objectId );
  //     orig.endDate = sa.endDate;
  //     orig.declinedReason = sa.declinedReason;
  //     orig.accessReason = sa.accessReason;
  //     orig.status = sa.status;
  //   });
  // }
}
