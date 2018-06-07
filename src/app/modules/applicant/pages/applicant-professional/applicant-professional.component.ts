import { Component, OnInit } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { CollegeTypes,
  LicenseClassCPTypes,
  LicenseClassCRNTypes,
  LicenseClassCPSTypes,
  AdvancedPracticeCertificationTypes,
  JobTitleTypes,
  MaxLengthTypes } from '../../../../models/colleges.enum';
import { DeviceProvider } from '../../../../models/device-provider.model';
import { DEVICEPROVIDERS } from '../../components/device-provider-list/device-provider-list.component';

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

  public licenseNumberSelector = '';
  // public deviceProviderNumberSelector = '';

  deviceProvider: DeviceProvider = { dpNumber: '' }

  // /** Binds to the form inputs */
  // public inputFields: {
  //   licenseNumber?: string,
  //   deviceProviderNumber?: string,
  //   informationContraventionDetail?: string,
  //   cancelledRegistrationDetail?: string,
  //   licenseConditionDetail?: string,
  //   revokedAccessDetail?: string
  // } = {};

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

  collegeCurrValue() {
    const selection = this.collegeTypesSelector;
    return CollegeTypes[selection] ? CollegeTypes[selection] : '';
  }

  licenseClassCPCurrValue() {
    const selection = this.licenseClassCPTypesSelector;
    return LicenseClassCPTypes[selection] ? LicenseClassCPTypes[selection] : '';
  }

  licenseClassCRNCurrValue() {
    const selection = this.licenseClassCRNTypesSelector;
    return LicenseClassCRNTypes[selection] ? LicenseClassCRNTypes[selection] : '';
  }

  licenseClassCPSCurrValue() {
    const selection = this.licenseClassCPSTypesSelector;
    return LicenseClassCPSTypes[selection] ? LicenseClassCPSTypes[selection] : '';
  }

  advancedPracticeCertificationCurrValue() {
    const selection = this.advancedPracticeCertificationTypesSelector;
    return AdvancedPracticeCertificationTypes[selection] ? AdvancedPracticeCertificationTypes[selection] : '';
  }

  jobTitleCurrValue() {
    const selection = this.jobTitleTypesSelector;
    return JobTitleTypes[selection] ? JobTitleTypes[selection] : '';
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

  // maxLengthValue(selection) {
  //   return MaxLengthTypes[selection];
  // }

  licenseNumberLength() {
    const selection = this.licenseNumberSelector;
    return selection.length;
  }

  // deviceProviderNumberLength() {
  //   const selection = this.deviceProviderNumberSelector;
  //   return selection.length;
  // }

  // get licenseNumberHasValue(): number {
  //   return this.inputFields.licenseNumber.length();
  // }
}
