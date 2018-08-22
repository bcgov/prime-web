import { Component, OnInit } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { DummyDataService } from '../../../../services/dummy-data.service';
import { Person } from '../../../../models/person.model';
import { cloneDeep } from 'lodash';
import { CollegeTypes,
  LicenceClassCPTypes,
  LicenceClassCRNTypes,
  LicenceClassCPSTypes,
  AdvancedPracticeCertificationTypes,
  WorkingOnBehalfTitleTypes,
  MaxLengthTypes,
  CollegeHelper} from '../../../../models/colleges.enum';

@Component({
  selector: 'prime-applicant-professional',
  templateUrl: './applicant-professional.component.html',
  styleUrls: ['./applicant-professional.component.scss']
})
export class ApplicantProfessionalComponent implements OnInit {
  private _user: Person;

  public workingOnBehalfTotal = 0;

  public hasChanged: boolean = false;

  constructor(private primeDataService: PrimeDataService) { }

  ngOnInit() {

    // Clone user clas
    this._user = cloneDeep(this.primeDataService.user);

    this.workingOnBehalfTotal = this._user.workingOnBehalfList.length - 1;
  }

  get applicant(): Person {
    return this._user;
  }

  //
  // Record related
  //

  addCollegeCertification() {
    this._user.collegeCertificationList.push({
      collegeType: 'pleaseSelect',
      licenceNumber: '',
      licenceClassCPType: 'pleaseSelect',
      licenceClassCRNType: 'pleaseSelect',
      licenceClassCPSType: 'pleaseSelect',
      licenceExpiryDate: null,
      advancedPracticeCertificationType: 'pleaseSelect'
    });

    this.onChange();
  }

  deleteCollegeCertification(i){
    console.log(`delete index ${i}`, this._user.collegeCertificationList);
    this._user.collegeCertificationList.splice(i, 1);

    this.onChange();
  }

  // addWorkingOnBehalf() {
  //   if(this.workingOnBehalfTotal < this.WorkingOnBehalfTitleTypesCount() - 1) {
  //     this._user.workingOnBehalfList.push({ jobTitle: 'pleaseSelect' });
  //     this.workingOnBehalfTotal++;

  //     this.onChange();
  //   }
  // }

  // deleteWorkingOnBehalf(i){
  //   console.log(`delete index ${i}`, this._user.workingOnBehalfList);
  //   this._user.workingOnBehalfList.splice(i, 1);
  //   this.workingOnBehalfTotal--;

  //   this.onChange();
  // }

  onChange() {
    this.hasChanged = true;
  }

  onSave(val: boolean){
    // toggles
    this.primeDataService.user.hasCollege        = this._user.hasCollege;
    this.primeDataService.user.isDeviceProvider  = this._user.isDeviceProvider;
    this.primeDataService.user.isWorkingOnBehalf = this._user.isWorkingOnBehalf;

    // toggle related arrays
    this.primeDataService.user.collegeCertificationList = cloneDeep(this._user.collegeCertificationList);
    this.primeDataService.user.deviceProviderNumber       = cloneDeep(this._user.deviceProviderNumber);
    this.primeDataService.user.workingOnBehalfList      = cloneDeep(this._user.workingOnBehalfList);

    // Self declaration related
    this.primeDataService.user.informationContravention = cloneDeep(this._user.informationContravention);
    this.primeDataService.user.cancelledRegistration    = cloneDeep(this._user.cancelledRegistration);
    this.primeDataService.user.licenceCondition         = cloneDeep(this._user.licenceCondition);
    this.primeDataService.user.revokedAccess            = cloneDeep(this._user.revokedAccess);

    this.hasChanged = false;
  }

  onCancel(val: boolean){
    // toggles
    this._user.hasCollege        = this.primeDataService.user.hasCollege;
    this._user.isDeviceProvider  = this.primeDataService.user.isDeviceProvider;
    this._user.isWorkingOnBehalf = this.primeDataService.user.isWorkingOnBehalf;

    // toggle related arrays
    this._user.collegeCertificationList = cloneDeep(this.primeDataService.user.collegeCertificationList);
    this._user.deviceProviderNumber       = cloneDeep(this.primeDataService.user.deviceProviderNumber);
    this._user.workingOnBehalfList      = cloneDeep(this.primeDataService.user.workingOnBehalfList);

    // Self declaration related
    this._user.informationContravention = cloneDeep(this.primeDataService.user.informationContravention);
    this._user.cancelledRegistration    = cloneDeep(this.primeDataService.user.cancelledRegistration);
    this._user.licenceCondition         = cloneDeep(this.primeDataService.user.licenceCondition);
    this._user.revokedAccess            = cloneDeep(this.primeDataService.user.revokedAccess);

    this.hasChanged = false;
  }

  //
  // Enum related
  //

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

  //
  // Conditional layout related
  //

  collegeCertificationValid(i) {
    if(  this._user.collegeCertificationList[i].collegeType !== 'pleaseSelect'
      && this._user.collegeCertificationList[i].licenceNumber.length
      && this._user.collegeCertificationList[i].licenceExpiryDate !== null
      && this._user.collegeCertificationList[i].licenceExpiryDate.valueOf() > 0
      && ((  this._user.collegeCertificationList[i].collegeType === 'CPBC'
          && this._user.collegeCertificationList[i].licenceClassCPType !== 'pleaseSelect')
        || ( this._user.collegeCertificationList[i].collegeType === 'CRNBC'
          && this._user.collegeCertificationList[i].licenceClassCRNType !== 'pleaseSelect'
          && this._user.collegeCertificationList[i].advancedPracticeCertificationType !== 'pleaseSelect')
        || ( this._user.collegeCertificationList[i].collegeType === 'CPSBC'
          && this._user.collegeCertificationList[i].licenceClassCPSType !== 'pleaseSelect'))) {
      return true;
    }
    else {
      return false;
    }
  }

  displayDeviceProviderSection() {
    if (this.collegeCertificationValid(0) && this._user.collegeCertificationList[0].collegeType === 'CPBC') {
      return true;
    }
    else if (this.applicant.hasCollege === false) {
      return true;
    }
    else {
      return false;
    }
  }

  //FIXME: SHOULD only display if previous two sections are No. Currently it shows REGARDLESS of what the users answer is.
  displayWorkingOnBehalfSection() {
    /*if (this.displayDeviceProviderSection()){
      return this._user.isDeviceProvider === false;
    }
    else if (this.collegeCertificationValid(0)) {
      return this._user.collegeCertificationList[0].collegeType !== 'CPBC';
    }
    else if (this.applicant.hasCollege === false){
      return true;
    }*/
    if (this.applicant.hasCollege === false && this.applicant.isDeviceProvider === false){
      return true;
    } else {
      return false;
    };
  }

  displaySelfDeclarationSection() {

   /* if (this._user.hasCollege === false && this._user.isWorkingOnBehalf === false){
      return false;
    }

    if (this._user.hasCollege === true) {
      return true;
    }

    // User has filled out 'on behalf' section
    if (this.displayWorkingOnBehalfSection() && this._user.workingOnBehalfList[0].jobTitle !== 'pleaseSelect' && this._user.workingOnBehalfList[0].jobTitle !== 'OTHER'){
      return true;
    }

    // If the user has filled out the 'Other' reason
    if (this._user.workingOnBehalfOtherReason && this._user.workingOnBehalfList.length){
      return true;
    }

    // User has filled out device provider
    else if (this.displayDeviceProviderSection() && this._user.deviceProviderNumber) {
      return true;
    }*/
    // User has said 'no' to each section
    // else if (this.displayDeviceProviderSection() && this.displayWorkingOnBehalfSection() && this._user.isWorkingOnBehalf === false) {
    //   return true;
    // }

    return true;
  }

  displayCannotContinueErrors(){
    if (this._user.isDeviceProvider){
      return false;
    }

    return this._user.hasCollege === false && this._user.isWorkingOnBehalf === false;
  }

  getFullCollegeName(name: string){
    return CollegeHelper.getFullCollegeNameFromString(name);
  }

  displayUploadSection() {
    if(  this._user.informationContravention.flag
      || this._user.cancelledRegistration.flag
      || this._user.licenceCondition.flag
      || this._user.revokedAccess.flag) {
      return true;
    }
    else {
      return false;
    }
  }
}
