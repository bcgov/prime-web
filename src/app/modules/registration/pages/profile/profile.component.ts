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

  constructor(private primeDataService: PrimeDataService) { }

  ngOnInit() {
  }

  get registrant(): Person {
    return this.primeDataService.user;
  }

  getPhoneMask(): (RegExp | string )[] | false {
    if (!this.registrant.hasInternationalPhoneNumber ){
      // return  { mask: this.phoneMask };
      return this.phoneMask;
    }

    //TODO: FINISH THIS OFF AND TEST THAT TOGGLING ACTUALLY WORKS
    return false;
  }
}
