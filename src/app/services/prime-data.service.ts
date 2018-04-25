import { Injectable } from '@angular/core';
import { Base } from '../core/base/base.class';
import { EnrollmentStatus, Person } from '../models/prime.models';
import { EnrollmentRowItem, EnrollmentRowChild, BadgeLevel, EnrollmentAlerts } from '../core/enrollment-row/enrollment-row.interface';

import { Site, SiteAccess } from '../models/sites.model';
import { Collection } from '../models/collections.model';

@Injectable()
export class PrimeDataService {

  constructor() { }

  /** List of all sites the front-end app has access to currently */
  sites: Site[];
  /** List of all collections the front-end app has access to currently */
  collections: Collection[]
  /** List of all people the front-end app has access to currently */
  people: Person[];


  getEnrollmentBySite(): EnrollmentRowItem[] {

    // By Site means collections at the top level
    let result: EnrollmentRowItem[] = [];

    this.collections.map(collection => {
      const rowItem: EnrollmentRowItem = {
        title: collection.name,
        sites: collection.members,
        users: collection.allUsers
      }

      rowItem.expandableChildren = [];

      const pending = collection.getSiteAccessWithStatus(EnrollmentStatus.Pending)
      const expired = collection.getSiteAccessWithStatus(EnrollmentStatus.Expired)
      const declined = collection.getSiteAccessWithStatus(EnrollmentStatus.Declined)

      // The items we want to turn into expandable rows
      const problemAccess = pending.concat(expired, declined)

      // Convert collapse multiple site access per person down to one row
      // const children = this.generateRowChildFromSiteAccess(problemAccess);
      const children = problemAccess;


      rowItem.expandableRows = problemAccess;
      result.push(rowItem);
    })

    return result;
  }

  getEnrollmentByUser(): EnrollmentRowItem[] {
    let result: EnrollmentRowItem[] = [];

    // SiteAccess still as expandableRows, just higher levels which are changed?

    this.people.map(person => {
      const rowItem: EnrollmentRowItem = {
        title: person.name,
        sites: [],
        users: [],
      }

      result.push(rowItem);
    })


    return result;
  }

  // private generateRowChildFromSiteAccess(problemAccess: SiteAccess[]){
  //   const result = [];

  //   // Filter objects based off of person?
  //   // generate alerts for each person
  //   const uniqueNames = problemAccess.map(sa => sa.person.name)
  //     .filter(this.filterUnique)

  //   uniqueNames.map(name => {

  //     // Get only sites for the unique name
  //     const siteAccessForName = problemAccess
  //       .filter(site => site.person.name === name);

  //       // debugger;

  //     // result.push(... siteAccessForName);
  //     // result.push({})


  //     // result.push(...siteAccessForName)

  //     // result.push({
  //     //   title: name,
  //     //   alerts: this.generateAlertsFromSiteAccess(siteAccessForName),
  //     // })
  //   })

  //   return result;
  // }

  // private generateRowChildFromSiteAccessOLD(problemAccess: SiteAccess[]){
  //   const result = [];

  //   // Filter objects based off of person?
  //   // generate alerts for each person
  //   const uniqueNames = problemAccess.map(sa => sa.person.name)
  //     .filter(this.filterUnique)

  //   uniqueNames.map(name => {

  //     // Get only sites for the unique name
  //     const siteAccessForName = problemAccess
  //       .filter(site => site.person.name === name);

  //     result.push({
  //       title: name,
  //       alerts: this.generateAlertsFromSiteAccess(siteAccessForName),
  //     })
  //   })

  //   return result;
  // }

  // private generateAlertsFromSiteAccess(siteAccess: SiteAccess[]): EnrollmentAlerts[] {
  //   const alerts: EnrollmentAlerts[] = [];

  //   siteAccess.forEach(siteAccess => {

  //     if (siteAccess.status === EnrollmentStatus.Pending){
  //       alerts.push({
  //         level: BadgeLevel.Warning,
  //         status: siteAccess.status
  //       })
  //     }

  //     if (siteAccess.status === EnrollmentStatus.Expired){
  //       alerts.push({
  //         level: BadgeLevel.Danger,
  //         status: siteAccess.status
  //       })
  //     }

  //     if (siteAccess.status === EnrollmentStatus.Declined){
  //       alerts.push({
  //         level: BadgeLevel.Danger,
  //         status: siteAccess.status
  //       })
  //     }

  //   })


  //   return alerts;
  // }

  private filterUnique(x, i, a){
    return x && a.indexOf(x) === i
  }


}
