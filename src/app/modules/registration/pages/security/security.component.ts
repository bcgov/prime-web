import { Component, OnInit } from '@angular/core';
import {PrimeDataService} from '../../../../services/prime-data.service';
import {Person} from '../../../../models/person.model';

const NUMBER = /\d/;

@Component({
  selector: 'prime-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  private phoneMask = ['(', NUMBER, NUMBER, NUMBER, ')', '-', NUMBER, NUMBER, NUMBER, '-', NUMBER, NUMBER, NUMBER, NUMBER];

  constructor(private primeDataService: PrimeDataService) { }

  ngOnInit() {
    this.registrant.securityQuestion1 = 'pet';
    this.registrant.securityQuestion2 = 'pet';
    this.registrant.securityQuestion3 = 'pet';
  }

  get registrant(): Person {
    return this.primeDataService.user;
  }
  getPhoneMask(): (RegExp | string )[] | false {
    if (!this.registrant.hasInternationalPhoneNumber) {
      // return  { mask: this.phoneMask };
      return this.phoneMask;
    }
  }
}
