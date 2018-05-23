import { Component, OnInit } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { DummyDataService } from '../../../../services/dummy-data.service';
import { Person } from '../../../../models/prime.models';

@Component({
  selector: 'prime-applicant-contact',
  templateUrl: './applicant-contact.component.html',
  styleUrls: ['./applicant-contact.component.scss']
})
export class ApplicantContactComponent implements OnInit {

  constructor(private primeDataService: PrimeDataService, private dummyDataService: DummyDataService) { }


  ngOnInit() {
    // DEV ONLY! TODO: Remove.
    // this.applicant = this.dummyDataService.createPeople(1)[0];
  }

  get applicant(): Person {
    return this.primeDataService.user;
  }

}
