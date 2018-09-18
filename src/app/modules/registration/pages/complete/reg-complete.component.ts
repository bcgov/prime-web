import { Component, OnInit } from '@angular/core';
import {Person} from '../../../../models/person.model';
import {PrimeDataService} from '../../../../services/prime-data.service';
import { cloneDeep } from 'lodash';


@Component({
  selector: 'prime-complete',
  templateUrl: './reg-complete.component.html',
  styleUrls: ['./reg-complete.component.scss']
})
export class RegCompleteComponent implements OnInit {

  constructor(private primeDataService: PrimeDataService) { }

  ngOnInit() {
  }

  get registrant(): Person {
    return this.primeDataService.user;
  }

}
