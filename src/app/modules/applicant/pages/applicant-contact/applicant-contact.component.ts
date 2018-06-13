import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { DummyDataService } from '../../../../services/dummy-data.service';
import { Person } from '../../../../models/person.model';
import { cloneDeep } from 'lodash';
import {Address} from '../../../../models/addresses.model';

@Component({
  selector: 'prime-applicant-contact',
  templateUrl: './applicant-contact.component.html',
  styleUrls: ['./applicant-contact.component.scss']
})
export class ApplicantContactComponent implements OnInit {
  private _user: Person;

  public hasChanged: boolean = false;


  constructor(private primeDataService: PrimeDataService, private dummyDataService: DummyDataService) { }

  ngOnInit() {
    // DEV ONLY! TODO: Remove.
    this.primeDataService.user = this.dummyDataService.createPeople(1)[0];

    // Clone user clas
    this._user = cloneDeep(this.primeDataService.user);
  }

  get applicant(): Person {
    return this._user;
  }

  onChange() {
    this.hasChanged = true;
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

    this.hasChanged = false;
  }

  onCancel(val: boolean){
    // Reset editable fields cancel
    this._user.useRegAddress = false;
    this._user.mailAddress.copy(this.primeDataService.user.mailAddress); // empty object

    this._user.phone = this.primeDataService.user.phone;
    this._user.email = this.primeDataService.user.email;

    this.hasChanged = false;
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

  // Copy registration address into mailing
  private copyRegAddress() {
    if (this._user.mailAddress.isEmpty()) {
      this._user.mailAddress.copy(this._user.address);
    }
    // Set useRegAddress to false as user is attempting to update
    this._user.useRegAddress = false;
  }
}
