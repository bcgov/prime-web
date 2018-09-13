import { Component, OnInit } from '@angular/core';
import {PrimeDataService} from "../../../../services/prime-data.service";
import {Person} from "../../../../models/person.model";

@Component({
  selector: 'prime-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  constructor(private primeDataService: PrimeDataService) { }

  ngOnInit() {
    this.registrant.securityQuestion1 = 'pet';
    this.registrant.securityQuestion2 = 'pet';
    this.registrant.securityQuestion3 = 'pet';
  }

  get registrant(): Person {
    return this.primeDataService.user;
  }

}
