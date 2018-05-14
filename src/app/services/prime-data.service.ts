import { Injectable } from '@angular/core';
import { Base } from '../core/base/base.class';
import { EnrollmentStatus, Person } from '../models/prime.models';
import { EnrollmentRowItem, EnrollmentRowChild, BadgeLevel, EnrollmentAlerts } from '../core/enrollment-row/enrollment-row.interface';

import { Site, SiteAccess } from '../models/sites.model';
import { Collection } from '../models/collections.model';
import { MillerColumnConfig, MillerItem } from '../core/miller-columns/miller-columns.interface';

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

  getMillerColumnDataByUser(): MillerColumnConfig {
    const collectionMiller = this.collections.map(collection => {
      collection.members = this.setAssociationId(collection.objectId, collection.members);
      return collection;
    })

    let result = {
      data: {
        collections: collectionMiller,
        sites: this.sites,
        people: this.people,
      },
      options: {
        primaryColumn: "people",
      }
    }

    return result;
  }

  getMillerColumnDataByCollection(): MillerColumnConfig {

    // Set assoco
    this.collections.map(collection => {
      collection.members = this.setAssociationId(collection.objectId, collection.members);

      //Also set association id from Person->Site
      collection.allUsers.map(person => {
        person.associationId = person.sites[0].objectId;
      })
    })


    let result = {
      data: {
        collections: this.collections,
        sites: this.sites,
        people: this.people,
      }
    }

    return result;

  }

  private filterUnique(x, i, a){
    return x && a.indexOf(x) === i
  }

  private setAssociationId<T>(associationId: string, items: T[]): T[] {
    return items.map(item => {
      // item.associationId = associationId;
      (item as any).associationId = associationId;
      return item;
    })
  }


}
