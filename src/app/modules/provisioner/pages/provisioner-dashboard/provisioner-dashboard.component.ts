import { Component, OnInit } from '@angular/core';
import { SiteAccess } from '../../../../models/sites.model';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Person } from '../../../../models/person.model';
import {Address} from "../../../../models/addresses.model";
import {environment} from "../../../../../environments/environment";
import { DummyDataService } from '../../../../services/dummy-data.service';


@Component({
  selector: 'prime-provisioner-dashboard',
  templateUrl: './provisioner-dashboard.component.html',
  styleUrls: ['./provisioner-dashboard.component.scss']
})
export class ProvisionerDashboardComponent implements OnInit {

  constructor(private dataService: PrimeDataService,
              private dummyDataService: DummyDataService) { }



  ngOnInit() {
    // STAKEHOLDER DATA (specific scenarios)
    const dummyCollections = this.dummyDataService.createCollectionsDemo();
    this.dataService.organizations = dummyCollections;
    const dummySites = [].concat(... dummyCollections.map(collection => collection.members ) ); //flatten array
    this.dataService.sites = dummySites;

    const dummyPeople = this.dummyDataService.createPeopleDemo();
    this.dataService.people = dummyPeople;

    //clearing the Dummy data for the USER
    if (environment.useDeveloperDummyDataForUser){
      this.dataService.user = this.dataService.people[0];
    } else {
      // just set up blank data
      this.dataService.user = new Person();
      this.dataService.user.address = new Address();

      // TODO - As this user is NOT in this.primeDataService.people, it won't be found when iterating through people across the app.

      // If we add it now, it'd break if the user was displayed in a list, e.g.
      // Provisioner. We can only add it once it's properly formed. BUt, it may
      // be okay as we force user through Reg first which makes it valid.
    }

    const access = this.dummyDataService.populateSiteAccessFromCollectionDemo( dummyCollections, dummyPeople );
    this.dataService.siteAccesses.push(... access.siteAccess);
    this.dataService.organizationAccess.push(... access.orgAccess);

    if (environment.useDeveloperDummyData){
      const applicant = this.dataService.people[0];

      applicant.isWorkingOnBehalf = true;
      applicant.isDeviceProvider = false;
      applicant.hasCollege = false;
      applicant.workingOnBehalfList[0].jobTitle = 'MEDICA';
      applicant.isDeclaredCheck = true;
    }
  }

  get siteAccesses(): SiteAccess[] {
    return this.dataService.siteAccesses;
  }

  get people(): Person[] {
    return this.dataService.people;
  }

}
