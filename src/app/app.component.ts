import { Component, OnInit } from '@angular/core';
import { DummyDataService } from './services/dummy-data.service';
import { environment } from './../environments/environment';
import { UserService } from './services/user.service';
import { PrimeDataService } from './services/prime-data.service';
import {Person} from './models/person.model';
import { Address } from './models/addresses.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Prime – Applicant Enrolment';


  constructor(private userService: UserService,
    private dummyDataService: DummyDataService,
    private primeDataService: PrimeDataService ) {
  }

  ngOnInit() {
    // STAKEHOLDER DATA (specific scenarios)
    this.dummyDataService.populateWithDemoData(this.primeDataService);
  }
}
