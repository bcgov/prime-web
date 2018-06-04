import { Component, OnInit } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { CollegeTypes } from '../../../../models/colleges.enum';
import { LicenseClassCPTypes } from '../../../../models/colleges.enum';
import { LicenseClassCRNTypes } from '../../../../models/colleges.enum';
import { LicenseClassCPSTypes } from '../../../../models/colleges.enum';
import { AdvancedPracticeCertificationTypes } from '../../../../models/colleges.enum';
import { JobTitleTypes } from '../../../../models/colleges.enum';
import { MaxLengthTypes } from '../../../../models/colleges.enum';

@Component({
  selector: 'prime-applicant-professional',
  templateUrl: './applicant-professional.component.html',
  styleUrls: ['./applicant-professional.component.scss']
})
export class ApplicantProfessionalComponent implements OnInit {
  public collegeTypesSelector                       = 'pleaseSelect';
  public licenseClassCPTypesSelector                = 'pleaseSelect';
  public licenseClassCRNTypesSelector               = 'pleaseSelect';
  public licenseClassCPSTypesSelector               = 'pleaseSelect';
  public advancedPracticeCertificationTypesSelector = 'pleaseSelect';
  public jobTitleTypesSelector                      = 'pleaseSelect';

  constructor(private dataService: PrimeDataService) { }

  ngOnInit() {
  }

  get applicant() {
    return this.dataService.user;
  }

  // Make enum accessible to template
  get CollegeTypes() {
    return Object.keys(CollegeTypes);
  }

  // Make enum accessible to template
  get LicenseClassCPTypes() {
    return Object.keys(LicenseClassCPTypes);
  }

  // Make enum accessible to template
  get LicenseClassCRNTypes() {
    return Object.keys(LicenseClassCRNTypes);
  }

  // Make enum accessible to template
  get LicenseClassCPSTypes() {
    return Object.keys(LicenseClassCPSTypes);
  }

  // Make enum accessible to template
  get AdvancedPracticeCertificationTypes() {
    return Object.keys(AdvancedPracticeCertificationTypes);
  }

  // Make enum accessible to template
  get JobTitleTypes() {
    return Object.keys(JobTitleTypes);
  }

  // Make enum accessible to template
  get MaxLengthTypes() {
    return Object.keys(MaxLengthTypes);
  }

  collegeValue() {
    const selection = this.collegeTypesSelector;
    return CollegeTypes[selection] ? CollegeTypes[selection] : '';
  }

  licenseClassCPValue(selection) {
    return LicenseClassCPTypes[selection];
  }

  licenseClassCRNValue(selection) {
    return LicenseClassCRNTypes[selection];
  }

  licenseClassCPSValue(selection) {
    return LicenseClassCPSTypes[selection];
  }

  advancedPracticeCertificationValue(selection) {
    return AdvancedPracticeCertificationTypes[selection];
  }

  jobTitleValue(selection) {
    return JobTitleTypes[selection];
  }

  maxLengthValue(selection) {
    return MaxLengthTypes[selection];
  }
}
