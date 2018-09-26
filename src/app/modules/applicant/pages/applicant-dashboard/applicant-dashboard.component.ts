import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Person } from '../../../../models/person.model';
import {ApplEnrollmentRowItem} from '../../components/appl-enrollment-row/appl-enrollment-row.component';
import {Router} from '@angular/router';
import {WorkingOnBehalfTitleTypes, CollegeHelper} from '../../../../models/colleges.enum';
import {moment} from 'ngx-bootstrap/chronos/test/chain';
import { environment } from 'environments/environment';
import { EnrollmentStatus } from '../../../../models/enrollment-status.enum';
import { Site } from '../../../../models/sites.model';


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

  showPharmaNetAccessWarning(): boolean {
    return this.sitesRequiringAttention >= 1;
  }

  get orgCount(): number {
    return this.applicant.allOrganizations().length;
  }

  get siteCount(): number {
    return this.getAllSites().filter(site => site.siteAccess[0].status !== null).length;
  }

  get sitesRequiringAttention(): number {
    return this.getAllSites().filter(site => site.siteAccess[0].status === EnrollmentStatus.New).length;
  }

  // Enrollment is requested when the user 
  // TODO rename? think it's opposite of what it is now
  get hasHandledSites(): boolean {
    const handledSites = this.getAllSites().filter(site => {
      const sa = site.siteAccess.find(sa => sa.person.objectId === this.applicant.objectId);
      return sa.status === EnrollmentStatus.Active || sa.status === EnrollmentStatus.Declined;
    })
    return handledSites.length > 0;
  }

  private getAllSites(): Site[] {
    if (!this.applicant.allOrganizations().length) return [];

    return this.applicant.allOrganizations()
      .map(orgs => orgs.members) // get all sites
      .reduce( (a, b) => a.concat(b)) // concat into single array get # of sites
  }
  
}
