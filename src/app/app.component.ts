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

    //clearing the Dummy data for the USER
    if (environment.useDeveloperDummyDataForUser){
      this.primeDataService.user = this.primeDataService.people[0];
    } else {
      // just set up blank data
      this.primeDataService.user = new Person();
      this.primeDataService.user.address = new Address();
    }

    const SA = this.dummyDataService.populateSiteAccessFromCollectionDemo( dummyCollections, dummyPeople );
    this.primeDataService.siteAccesses.push(... SA);


    if (environment.useDeveloperDummyData){
      const applicant = this.primeDataService.people[0];

      applicant.isWorkingOnBehalf = true;
      applicant.isDeviceProvider = false;
      applicant.hasCollege = false;
      applicant.workingOnBehalfList[0].jobTitle = 'MEDICA';
      applicant.isDeclaredCheck = true;
    }
  }
}
