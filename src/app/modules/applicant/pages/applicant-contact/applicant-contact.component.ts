import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { DummyDataService } from '../../../../services/dummy-data.service';
import { Person } from '../../../../models/person.model';
import { cloneDeep } from 'lodash';

const NUMBER = /\d/;

@Component({
  selector: 'prime-applicant-contact',
  templateUrl: './applicant-contact.component.html',
  styleUrls: ['./applicant-contact.component.scss']
})
export class ApplicantContactComponent implements OnInit {

  private _user: Person;

  public hasChanged: boolean = false;
  public hasEverChanged: boolean = false;

  private phoneMask = ['(', NUMBER, NUMBER, NUMBER, ')', '-', NUMBER, NUMBER, NUMBER, '-', NUMBER, NUMBER, NUMBER, NUMBER];

  constructor(private primeDataService: PrimeDataService) { }

  ngOnInit() {
    // Clone user class
    this._user = cloneDeep(this.primeDataService.user);
  }

  get applicant(): Person {
    return this._user;
  }

  canContinue(): boolean {
    if (!this.hasEverChanged){
      return true;
    }

    return this.hasChanged;
  }

  /**
   * Toggle to show the fields to set the preferrred names
   */
  showPreferredNames() {
    this.applicant.hasPreferName = !this.applicant.hasPreferName;
  }

  onChange() {
    this.hasChanged = true;
    this.hasEverChanged = true;
  }

  onInternationalPhoneNumberChange() {
    this.applicant.phone = '';
    this.applicant.phoneExtension = '';
    this.onChange();
  }

  onCancel(val: boolean) {
    this._user = cloneDeep(this.primeDataService.user);
    this.hasChanged = false;
  }

  onSave(val: boolean){
    // Use registration address as mailing address.
    if ( this._user.useRegAddress ) {
      this.primeDataService.user.mailAddress.copy(this._user.address);
    } else {
      this.primeDataService.user.mailAddress.copy(this._user.mailAddress);
    }
    this.primeDataService.user.useRegAddress = this._user.useRegAddress;

    // Other updateable fields
    this.primeDataService.user.phone = this._user.phone;
    this.primeDataService.user.email = this._user.email;

    // Preferred Name fields
    if ( this._user.hasPreferName ) {
      this.primeDataService.user.hasPreferName = this._user.hasPreferName;
      this.primeDataService.user.preferFirstName = this._user.preferFirstName;
      this.primeDataService.user.preferMiddleName = this._user.preferMiddleName;
      this.primeDataService.user.preferLastName = this._user.preferLastName;
      console.log("Has Prefer Name = true");
    } else {
      this.primeDataService.user.hasPreferName = this._user.hasPreferName;
      this.primeDataService.user.preferFirstName = null;
      this.primeDataService.user.preferMiddleName = null;
      this.primeDataService.user.preferLastName = null;
    }
    this.hasChanged = false;
    console.log(this.applicant.preferLastName);
    console.log(this._user.preferLastName);
    console.log(this.primeDataService.user);
  }



  // Update mailAddress with information in the input field that the user is
  // currently updating
  updateStreet(event) {
    this.copyRegAddress();
    this._user.mailAddress.street = event;
  }
  updateProvince(event) {
    this.copyRegAddress();
    this._user.mailAddress.province = event;
  }
  updateCountry(event) {
    this.copyRegAddress();
    this._user.mailAddress.country = event;
  }
  updateCity(event) {
    this.copyRegAddress();
    this._user.mailAddress.city = event;
  }
  updatePostal(event) {
    this.copyRegAddress();
    this._user.mailAddress.postal = event;
  }
  updatePrefLastName(event) {
    this._user.preferLastName = event;
  }
  updatePrefMiddleName(event) {
    this._user.preferMiddleName = event;
  }
  updatePrefFirstName(event) {
    this._user.preferFirstName = event;
  }

  getPhoneMask(): (RegExp | string )[] | false {
    if (!this.applicant.hasInternationalPhoneNumber ){
      // return  { mask: this.phoneMask };
      return this.phoneMask;
    }

    //TODO: FINISH THIS OFF AND TEST THAT TOGGLING ACTUALLY WORKS
    return false;
  }


  // Copy registration address into mailing
  private copyRegAddress() {
    if (this._user.mailAddress.isEmpty()) {
      this._user.mailAddress.copy(this._user.address);
    }
    // Set useRegAddress to false as user is attempting to update
    this._user.useRegAddress = false;
  }
}
