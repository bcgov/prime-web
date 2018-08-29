import { Component, OnInit } from '@angular/core';
import {Person} from "../../../../models/person.model";
import {PrimeDataService} from "../../../../services/prime-data.service";
import { cloneDeep } from 'lodash';


@Component({
  selector: 'prime-complete',
  templateUrl: './reg-complete.component.html',
  styleUrls: ['./reg-complete.component.scss']
})
export class RegCompleteComponent implements OnInit {
  private _user: Person;
  constructor(private primeDataService: PrimeDataService) { }

  ngOnInit() {
    this._user = cloneDeep(this.primeDataService.user);
    this._user.primeUserId = 'P12345';
  }
  get registrant(): Person {
    return this._user;
  }

  login() {

  }

}
