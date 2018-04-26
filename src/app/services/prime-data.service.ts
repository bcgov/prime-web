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
  sites: Site[] = [];
  /** List of all collections the front-end app has access to currently */
  collections: Collection[] = [];
  /** List of all people the front-end app has access to currently */
  people: Person[] = [];
  siteAccesses: SiteAccess[] = [];

  getEnrollmentBySite(): EnrollmentRowItem[] {

    // By Site means collections at the top level
    let result: EnrollmentRowItem[] = [];

    this.collections.map(collection => {
      const rowItem: EnrollmentRowItem = {
        title: collection.name,
        sites: collection.members,
        users: collection.allUsers
      }
      const pending = collection.getSiteAccessWithStatus(EnrollmentStatus.Pending)
      const expired = collection.getSiteAccessWithStatus(EnrollmentStatus.Expired)
      const declined = collection.getSiteAccessWithStatus(EnrollmentStatus.Declined)

      const problemAccess = pending.concat(expired, declined)
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
        sites: person.sites,
        collections: this.findCollectionFromSites(person.sites)
      }

      const pending = person.siteAccess
        .filter(sa => sa.status === EnrollmentStatus.Pending)
      const expired = person.siteAccess
        .filter(sa => sa.status === EnrollmentStatus.Expired)
      const declined = person.siteAccess
        .filter(sa => sa.status === EnrollmentStatus.Declined)

      const problemAccess = pending.concat(expired, declined)
      rowItem.expandableRows = problemAccess;

      result.push(rowItem);
    })

    return result;
  }

  findCollectionFromSites(sites: Site[]): Collection[] {
    let result: Collection[] = [];
    for (let index = 0; index < sites.length; index++) {
      const site = sites[index];
      const collection = this.findCollectionFromSite(site);
      result.push(... collection);
    }

    return result;
  }

  findCollectionFromSite(site: Site): Collection[] {;
    return this.collections.map(collection => {
      let exists = collection.members.indexOf(site) >= 0;
      if (exists) return collection;
    }).filter(x => x); //Remove undefined
  }

  private filterUnique(x, i, a){
    return x && a.indexOf(x) === i
  }


}
