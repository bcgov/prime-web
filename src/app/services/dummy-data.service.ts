
import { Injectable } from '@angular/core';
import { EnrollmentRowItem, EnrollmentRowChild, BadgeLevel } from '../core/enrollment-row/enrollment-row.interface';
import { EnrollmentStatus, Person } from '../models/prime.models';

import { Site, SiteAccess } from '../models/sites.model';
import { Collection } from '../models/collections.model';


/**
 * Responsible for generating dummy data, useful for development Not responsible
 * for *injecting* dummy data, must be called from components.
 *
 * This class is not necessary for production builds. Ideally, we should find a
 * way to remove it entirely from prod builds (i.e. from app.module.ts too).
 */
@Injectable()
export class DummyDataService {

  constructor() { }

  // -- Generating Models

  /** Returns a number of sites populated with users*/
  createSites(count: number, name: string = "London Drugs"): Site[] {
    const result: Site[] = [];
    for (let index = 0; index < count; index++) {
      const site = new Site();
      site.name = this.generateSiteName(name);
      result.push(site);
    }

    return result;
  }

  populateCollectionWithPeople(collection: Collection, totalPeople: number){
    const people: Person[] = this.createPeople(totalPeople);

    let result = collection.members.map((site, index) => {
      //Put in a loop so each user can have multiple associations
      do {
        const SA = this.createSiteAccess();
        const person = this.getRandomElFromArray(people);

        // Each person can only have one access per a site, but can have multiple accesses for multiple sites
        if (person.canAccess(site)){
          continue;
        }

        SA.person = person;
        SA.site = site;
        person.siteAccess.push(SA);
        site.siteAccess.push(SA);
      } while (Math.random() > 0.3)

      return site;
    })

    return result;
  }

  createSiteAccess(): SiteAccess {
    const SA: SiteAccess = new SiteAccess();
    let randomStatusString : string = this.getRandomElFromArray(Object.keys(EnrollmentStatus));
    let status: EnrollmentStatus = EnrollmentStatus[randomStatusString];

    SA.status = status;
    return SA;
  }


  createCollections(names: string[] = ["London Drugs"], withPeople = true): Collection[] {
    const result: Collection[] = [];

    names.forEach(name => {
      const sites = this.createSites(5, name);
      let collection = new Collection(name, sites);

      if (withPeople){
        console.log('populating collection with people');
         this.populateCollectionWithPeople(collection, 2)
      }

      result.push(collection);
    })


    return result;
  }

  createPeople(count): Person[] {
    const result: Person[] = [];

    for (let index = 0; index < count; index++) {
      const person = new Person();
      person.name = this.generatePersonName();
      result.push(person);
    }

    return result;
  }


  // --- Enrollment List

  getEnrollmentListBySiteData(): EnrollmentRowItem[] {
    let result: EnrollmentRowItem[] = [
      {
        title: "London Drugs - All",
        sites: Array(2),
        users: Array(5),
        expandableChildren: []
      },
      {
        title: "Rexall Vancouver Island - All",
        sites: Array(6),
        users: Array(8),
        expandableChildren: [],
      },
      {
        title: "SDM Vancouver Island",
        sites: Array(3),
        users: Array(8),
        expandableChildren: [],
      }
    ]

    result = result.map(x => {
      x.expandableChildren = [
        {
          title: "Ellen Hunt",
          alerts: [
            {
              level: BadgeLevel.Danger,
              status: EnrollmentStatus.Declined,
            },
            {
              level: BadgeLevel.Danger,
              status: EnrollmentStatus.Declined,
            },
          ],
        },
        {
          title: "James Smith",
          alerts: [
            {
              level: BadgeLevel.Warning,
              status: EnrollmentStatus.Incomplete
            },
          ],
        },
        {
          title: "Bob Jones",
          alerts: [
            {
              level: BadgeLevel.Warning,
              status: EnrollmentStatus.Pending
            },
            {
              level: BadgeLevel.Warning,
              status: EnrollmentStatus.Pending
            },
          ],
        }
      ]
      return x;
    })



    return result;

  }

  // --- Helpers

  private getRandomElFromArray<T>(arr: T[]): T {
    return arr[Math.ceil(Math.random() * arr.length) - 1];
  }

  private generateSiteName(siteName: string = "London Drugs"): string {
    let id = Math.ceil(Math.random() * 8000)
    return `${siteName} - ${id}`;
  }

  private generatePersonName(): string {
    const firstNames = ['Bob', 'Alice', 'Fred', 'Ellen', 'James'];
    const lastNames = ['Hunt', 'Smith', 'Jones', 'Stewart', 'Mason'];

    return `${this.getRandomElFromArray(firstNames)} ${this.getRandomElFromArray(lastNames)}`
  }



}
