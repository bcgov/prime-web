import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DummyDataService } from './services/dummy-data.service';
import { environment } from './../environments/environment';
//import 'rxjs/add/operator/filter';

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
    // DEVELOPMENT DATA (random generation)
    /* const dummyCollections = this.dummyDataService.createCollectionsWithSites([
      "London Drugs - North",
      "London Drugs - South",
      "Rexall Vancouver Island - All",
      "SDM Vancouver Island"
    ], 5);
    const dummyPeople = this.dummyDataService.createPeople(5);
    const dummySites = [].concat(... dummyCollections.map(collection => collection.members)); //flatten array

    // Create Site Access objects + associate with people/collections
    dummyCollections.map(collection => {
      const SA = this.dummyDataService.populateSiteAccessFromCollection(collection, dummyPeople)
      this.primeDataService.siteAccesses.push(... SA);
    });

    this.primeDataService.collections = dummyCollections;
    this.primeDataService.sites = dummySites;
    this.primeDataService.people = dummyPeople;
    this.primeDataService.user = this.primeDataService.people[0];
    */

    // STAKEHOLDER DATA (specific scenarios)
    const dummyCollections = this.dummyDataService.createCollectionsDemo();
    this.primeDataService.collections = dummyCollections;
    const dummySites = [].concat(... dummyCollections.map(collection => collection.members ) ); //flatten array
    this.primeDataService.sites = dummySites;

    const dummyPeople = this.dummyDataService.createPeopleDemo();
    this.primeDataService.people = dummyPeople;
    this.primeDataService.user = this.primeDataService.people[0];

    const SA = this.dummyDataService.populateSiteAccessFromCollectionDemo( dummyCollections, dummyPeople );
    this.primeDataService.siteAccesses.push(... SA);

  }
}
