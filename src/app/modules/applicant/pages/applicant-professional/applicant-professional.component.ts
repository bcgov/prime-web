import { Component, OnInit } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
// import { Person } from '../../../../models/person.model';
import { CollegeTypes,
  LicenceClassCPTypes,
  LicenceClassCRNTypes,
  LicenceClassCPSTypes,
  AdvancedPracticeCertificationTypes,
  WorkingOnBehalfTitleTypes,
  MaxLengthTypes,
  SelfDeclaration } from '../../../../models/colleges.enum';

@Component({
  selector: 'prime-applicant-professional',
  templateUrl: './applicant-professional.component.html',
  styleUrls: ['./applicant-professional.component.scss']
})
export class ApplicantProfessionalComponent implements OnInit {
  // private _user: Person;

  public collegeCertificationList = [{
    collegeType: 'pleaseSelect',
    licenceNumber: '',
    licenceClassCPType: 'pleaseSelect',
    licenceClassCRNType: 'pleaseSelect',
    licenceClassCPSType: 'pleaseSelect',
    licenceExpiryDate: '',
    advancedPracticeCertificationType: 'pleaseSelect'
  }];

  public deviceProviderList = [{ dpNumber: '' }];

  public workingOnBehalfList = [{ jobTitle: 'pleaseSelect' }];
  public workingOnBehalfTotal = 0;

  public informationContravention: SelfDeclaration = { flag: null, detail: null };
  public cancelledRegistration: SelfDeclaration = { flag: null, detail: null };
  public licenceCondition: SelfDeclaration = { flag: null, detail: null };
  public revokedAccess: SelfDeclaration = { flag: null, detail: null };

  public hasChanged: boolean = false;


  constructor(private dataService: PrimeDataService) { }

  ngOnInit() {
  }

  get applicant() {
    return this.dataService.user;
  }

  addCollegeCertification() {
    this.collegeCertificationList.push({
      collegeType: 'pleaseSelect',
      licenceNumber: '',
      licenceClassCPType: 'pleaseSelect',
      licenceClassCRNType: 'pleaseSelect',
      licenceClassCPSType: 'pleaseSelect',
      licenceExpiryDate: '',
      advancedPracticeCertificationType: 'pleaseSelect'
    });

    this.onChange();
  }

  deleteCollegeCertification(i){
    console.log(`delete index ${i}`, this.collegeCertificationList);
    this.collegeCertificationList.splice(i, 1);

    this.onChange();
  }

  addDeviceProvider() {
    this.deviceProviderList.push({ dpNumber: '' });

    this.onChange();
  }

  deleteDeviceProvider(i){
    console.log(`delete index ${i}`, this.deviceProviderList);
    this.deviceProviderList.splice(i, 1);

    this.onChange();
  }

  addWorkingOnBehalf() {
    if(this.workingOnBehalfTotal < this.WorkingOnBehalfTitleTypesCount() - 1) {
      this.workingOnBehalfList.push({ jobTitle: 'pleaseSelect' });
      this.workingOnBehalfTotal++;

      this.onChange();
    }
  }

  deleteWorkingOnBehalf(i){
    console.log(`delete index ${i}`, this.workingOnBehalfList);
    this.workingOnBehalfList.splice(i, 1);
    this.workingOnBehalfTotal--;

    this.onChange();
  }

  // Make enum accessible to template
  get CollegeTypes() {
    return Object.keys(CollegeTypes);
  }

  // Make enum accessible to template
  get LicenceClassCPTypes() {
    return Object.keys(LicenceClassCPTypes);
  }

  // Make enum accessible to template
  get LicenceClassCRNTypes() {
    return Object.keys(LicenceClassCRNTypes);
  }

  // Make enum accessible to template
  get LicenceClassCPSTypes() {
    return Object.keys(LicenceClassCPSTypes);
  }

  // Make enum accessible to template
  get AdvancedPracticeCertificationTypes() {
    return Object.keys(AdvancedPracticeCertificationTypes);
  }

  // Make enum accessible to template
  get WorkingOnBehalfTitleTypes() {
    return Object.keys(WorkingOnBehalfTitleTypes);
  }

  // Make enum accessible to template
  get MaxLengthTypes() {
    return Object.keys(MaxLengthTypes);
  }

  WorkingOnBehalfTitleTypesCount() {
    return Object.keys(WorkingOnBehalfTitleTypes).length;
  }

  collegeCurrValue(selection) {
    return CollegeTypes[selection];
  }

  licenceClassCPValue(selection) {
    return LicenceClassCPTypes[selection];
  }

  licenceClassCRNValue(selection) {
    return LicenceClassCRNTypes[selection];
  }

  licenceClassCPSValue(selection) {
    return LicenceClassCPSTypes[selection];
  }

  advancedPracticeCertificationValue(selection) {
    return AdvancedPracticeCertificationTypes[selection];
  }

  workingOnBehalfTitleValue(selection) {
    return WorkingOnBehalfTitleTypes[selection];
  }

  maxLengthValue(selection) {
    return MaxLengthTypes[selection];
  }

  collegeCertificationValid(i) {
    if(this.collegeCertificationList[i].collegeType !== 'pleaseSelect'
      && this.collegeCertificationList[i].licenceNumber.length
      && this.collegeCertificationList[i].licenceExpiryDate.length !== 0
      && ((this.collegeCertificationList[i].collegeType === 'CPBC'
          && this.collegeCertificationList[i].licenceClassCPType !== 'pleaseSelect')
        || (this.collegeCertificationList[i].collegeType === 'CRNBC'
          && this.collegeCertificationList[i].licenceClassCRNType !== 'pleaseSelect'
          && this.collegeCertificationList[i].advancedPracticeCertificationType !== 'pleaseSelect')
        || (this.collegeCertificationList[i].collegeType === 'CPSBC'
          && this.collegeCertificationList[i].licenceClassCPSType !== 'pleaseSelect'))) {
      return true;
    }
    else {
      return false;
    }
  }

  displayDeviceProviderSection() {
    if(this.applicant.hasCollege === false || this.collegeCertificationValid(0)) {
      return true;
    }
    else {
      return false;
    }
  }

  displayWorkingOnBehalfSection() {
    if(this.displayDeviceProviderSection()
      && (this.applicant.isDeviceProvider === false || this.deviceProviderList[0].dpNumber.length)) {
      return true;
    }
    else {
      return false;
    }
  }

  displaySelfDeclarationSection() {
    if(this.displayDeviceProviderSection()
      && this.displayWorkingOnBehalfSection()
      && (this.applicant.isWorkingOnBehalf === false || this.workingOnBehalfList[0].jobTitle !== 'pleaseSelect')) {
      return true;
    }
    else {
      return false;
    }
  }

  displayUploadSection() {
    if(this.informationContravention.flag
      || this.cancelledRegistration.flag
      || this.licenceCondition.flag
      || this.revokedAccess.flag) {
      return true;
    }
    else {
      return false;
    }
  }

  onChange() {
    this.hasChanged = true;
  }

  onSave(val: boolean){

    this.hasChanged = false;
  }

  onCancel(val: boolean){

    this.hasChanged = false;
  }
}
