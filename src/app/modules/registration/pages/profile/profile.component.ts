import { Component, OnInit } from '@angular/core';
import {PrimeDataService} from "../../../../services/prime-data.service";
import { Person } from '../../../../models/person.model';
import { cloneDeep } from 'lodash';

const NUMBER = /\d/;

@Component({
  selector: 'prime-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private phoneMask = ['(', NUMBER, NUMBER, NUMBER, ')', '-', NUMBER, NUMBER, NUMBER, '-', NUMBER, NUMBER, NUMBER, NUMBER];
  public hasChanged: boolean = false;
  public hasEverChanged: boolean = false;
  /** Did the user use a BC Services Card to register before? If so, some info is read-only. */
  public usedBCSC = false;

  constructor(private primeDataService: PrimeDataService) { }

  ngOnInit() {
    this.usedBCSC = !!this.registrant.pairingCode;
  }

  get registrant(): Person {
    return this.primeDataService.user;
  }



  getPhoneMask(): (RegExp | string )[] | false {
    if (!this.registrant.hasInternationalPhoneNumber ){
      // return  { mask: this.phoneMask };
      return this.phoneMask;
    }
    return false;
  }
}
