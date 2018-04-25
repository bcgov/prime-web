import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DummyDataService } from './services/dummy-data.service';
import { environment } from './../environments/environment';
import 'rxjs/add/operator/filter';

// import { EnrollmentRowItem, EnrollmentRowChild, EnrollmentStatus, BadgeLevel } from './core/enrollment-row/enrollment-row.interface';
// import { User } from './models/user.model';
import { UserService } from './services/user.service';
import { PrimeDataService } from './services/prime-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Prime – Applicant Enrollment';


  constructor(private userService: UserService,
    private dummyDataService: DummyDataService,
    private primeDataService: PrimeDataService ) {
  }

  ngOnInit() {
    const dummyCollections = this.dummyDataService.createCollectionsWithPeople([
      "London Drugs - North",
      "London Drugs - South",
      "Rexall Vancouver Island - All",
      "SDM Vancouver Island"
    ]);

    const people = this.dummyDataService.createPeople(10);

    // debugger;

    /**
     * TODO: Re-write to pass in 'natives': Collection/People/Sites
     * Don't USE `createCollectionsWithPeople()` (as-is), must separate data.
     *
     * Need to find membership some other way than nesting. Maybe look up on ID?
     * Replace in future with PouchDB? So keep data logic separated
     */


    this.primeDataService.collections = dummyCollections;
    this.primeDataService.people = people;
  }
}
