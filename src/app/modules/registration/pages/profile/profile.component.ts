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

  private _user: Person;
  private phoneMask = ['(', NUMBER, NUMBER, NUMBER, ')', '-', NUMBER, NUMBER, NUMBER, '-', NUMBER, NUMBER, NUMBER, NUMBER];

  constructor(private primeDataService: PrimeDataService) { }

  ngOnInit() {
    //this._user = cloneDeep(this.primeDataService.user);
  }

  get applicant(): Person {
    return this._user;
  }

  getPhoneMask(): (RegExp | string )[] | false {
    if (!this.applicant.hasInternationalPhoneNumber ){
      // return  { mask: this.phoneMask };
      return this.phoneMask;
    }

    //TODO: FINISH THIS OFF AND TEST THAT TOGGLING ACTUALLY WORKS
    return false;
  }

}
