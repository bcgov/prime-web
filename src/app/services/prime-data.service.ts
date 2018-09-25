import { Injectable } from '@angular/core';
import { MillerColumnConfig } from '../modules/verifier/components/miller-columns/miller-columns.interface';
import { PharmaNetOrganization } from '../models/organizations.model';
import { EnrollmentStatus } from '../models/enrollment-status.enum';
import { Person } from '../models/person.model';
import { Site, SiteAccess } from '../models/sites.model';
import {EnrollmentRowItem} from '../modules/verifier/components/enrollment-row/enrollment-row.component';
import {ApplEnrollmentRowItem} from '../modules/applicant/components/appl-enrollment-row/appl-enrollment-row.component';
import {CollegeTypes} from "../models/colleges.enum";
import { ProvisionerRowItem } from '../modules/provisioner/components/provisioner-row/provisioner-row.component';
import { OrganizationAccess } from '../models/organization-access.model';


@Injectable()
export class PrimeDataService {

  constructor() { }

  /** List of all sites the front-end app has access to currently */
  sites: Site[] = [];
  /** List of all collections/pharmaNetOrgs the front-end app has access to currently */
  organizations: PharmaNetOrganization[] = [];
  /** List of all people the front-end app has access to currently */
  people: Person[] = [];
  siteAccesses: SiteAccess[] = [];

  organizationAccess: OrganizationAccess[] = [];

  /** The logged in user interacting with the webapp. When in the Applicant dashboard, this would be the applicant. */
  user: Person = new Person();

  /**
   * for the provisioner site table
   * @returns {EnrollmentRowItem[]}
   */
  getEnrollmentByOrganization(): EnrollmentRowItem[] {

    // By Site means collections at the top level
    const result: EnrollmentRowItem[] = [];

    this.organizations.forEach(organization => {
      const rowItem: EnrollmentRowItem = {
        title: organization.title,
        associatedObjectId: organization.objectId,
        sites: organization.members,
        users: organization.allUsers
      };
      rowItem.expandableRows = organization.getSiteAccessWithStatus(EnrollmentStatus.Active)
        .filter((sa, i, arr) => { // filter out any duplicate sites
          return arr.map(innerSiteAccess => innerSiteAccess.site.name)
            .indexOf(sa.site.name) === i;
        });


      result.push(rowItem);
    });

    return result;
  }

  /**
   * Old interface for site
   * @returns {EnrollmentRowItem[]}
   */
  getEnrollmentBySite(): EnrollmentRowItem[] {

    // By Site means collections at the top level
    const result: EnrollmentRowItem[] = [];

    this.organizations.map(collection => {
      const rowItem: EnrollmentRowItem = {
        title: collection.title,
        associatedObjectId: collection.objectId,
        sites: collection.members,
        users: collection.allUsers
      };
      const expired = collection.getSiteAccessWithStatus(EnrollmentStatus.Expired);
      const declined = collection.getSiteAccessWithStatus(EnrollmentStatus.Declined);
      const active = collection.getSiteAccessWithStatus(EnrollmentStatus.Active);
      const initiated = collection.getSiteAccessWithStatus(EnrollmentStatus.Initiated);

      const problemAccess = expired.concat(declined, active, initiated);
      rowItem.expandableRows = problemAccess;
      result.push(rowItem);
    });

    return result;
  }

  getEnrollmentByUser(): EnrollmentRowItem[] {
    const result: EnrollmentRowItem[] = [];

    // SiteAccess still as expandableRows, just higher levels which are changed?

    this.people.map(person => {
      const rowItem: EnrollmentRowItem = {
        title: person.name,
        associatedObjectId: person.objectId,
        sites: person.sites,
        collections: this.findCollectionFromSites(person.sites)
      };

      const expired = person.siteAccess
        .filter(sa => sa.status === EnrollmentStatus.Expired);
      const declined = person.siteAccess
        .filter(sa => sa.status === EnrollmentStatus.Declined);
      const active = person.siteAccess
        .filter(sa => sa.status === EnrollmentStatus.Active);

      const initiated = person.siteAccess
        .filter(sa => sa.status === EnrollmentStatus.Initiated);

      const problemAccess = expired.concat(declined, active, initiated);
      rowItem.expandableRows = problemAccess;

      result.push(rowItem);
    });

    return result;
  }

  /**
   * Creates a copy of all the enrollments for a given user
   * @returns {ApplEnrollmentRowItem[]}
   */
  getUserSiteEnrollment(): ApplEnrollmentRowItem[] {
    const result: ApplEnrollmentRowItem[] = [];

    this.user.sites.map(site => {
      const rowItem: ApplEnrollmentRowItem = {
        title: site.name,
        associatedObjectId: site.objectId,
      };

      // Filter out Site Acceesses that don't apply to the user. Since we have
      // the Site object, we also have all the SiteAccess instances for it even
      // if they apply to other users.
      const filteredSAs = site.siteAccess.filter(sa => sa.person === this.user);

      // 1:1 relationship - user has one site access per site
      rowItem.expandableRows = [filteredSAs[0]]

      result.push(rowItem);
    });

    return result;
  }

  getProvisionerByUser(): EnrollmentRowItem[] {
    const result: EnrollmentRowItem[] = [];

    // SiteAccess still as expandableRows, just higher levels which are changed?

    this.people.map(person => {
      const rowItem: EnrollmentRowItem = {
        title: person.name,
        associatedObjectId: person.objectId,
        sites: person.sites,
        collections: this.findCollectionFromSites(person.sites)
      };

      const active = person.siteAccess
        .filter(sa => sa.status === EnrollmentStatus.Active);

      rowItem.expandableRows = active;

      result.push(rowItem);
    });

    return result;
  }

  getProvisionerBySite(): EnrollmentRowItem[] {

    const result: EnrollmentRowItem[] = [];
    this.sites.map (site => {
      const rowItem: EnrollmentRowItem = {
        //concat collection name with substringed site name - returns "<collection_name> | <site_number>"
        title: this.findCollectionFromSite(site)[0].title + ' | ' + site.name.split(' ').splice(-1),
        associatedObjectId: site.objectId,
        sites: null,
        users: null
      };
      rowItem.expandableRows = site.siteAccess
        .filter(sa => sa.status === EnrollmentStatus.Active);

      result.push(rowItem);
    });

    return result;
  }

  getProvisionerDetailsBySite(site: Site): ProvisionerRowItem[] {
    const result = [];

    site.users.map(user => {
      const rowItem: ProvisionerRowItem = {
        title: user.name,
        siteAccess: user.siteAccess.filter(sa => sa.site === site),
        collegeNumber: user.collegeCertificationList[0].collegeType,
        licenceNumber: user.collegeCertificationList[0].licenceNumber,
        associatedObjectId: user.objectId,
      };
      result.push(rowItem);
    });

    return result;
  }

  getProvisionerOrgDetailsByUser(user: Person): ProvisionerRowItem[] {
    const result = [];
    user.allOrganizations().map(org => {
      const siteAccess = org.allSiteAccess.filter(x => x.person.objectId === user.objectId);

      // We want this to return ALL sites for a given org. 
      // It's likely user won't have siteAccess for all sites in the org - that's fine
      // The details component may have to create SA's on the fly as user makes changes

      const rowItem: ProvisionerRowItem = {
        title: org.title,
        siteAccess: siteAccess,
        site: org.members,
        associatedObjectId: user.objectId,
      }
      result.push(rowItem);
    }) ;

    return result;
  }

  // no longer used..

  getProvisionerDetailsByUser(user: Person): ProvisionerRowItem[] {
    const result = [];

    // Filter out any rows with EnrollmentStatus === New, just for prototype and until statuses are sorted out.
    user.sites.filter(site => {
      return site.siteAccess
        .filter(sa => sa.person === user)
        .filter(sa => sa.status !== EnrollmentStatus.New).length >= 1;
    }).map(site => {

      const rowItem: ProvisionerRowItem = {
        title: site.name,
        siteAccess: site.siteAccess.filter(x => x.person === user),
        site:  user.sites,
        associatedObjectId: site.objectId,
      };


      result.push(rowItem);
    });

    // For prototype: Only show Provisioning or Active items in Provisioner Details screen
    return result
      .filter(rowItem => rowItem.siteAccess[0].status === EnrollmentStatus.Provisioning || rowItem.siteAccess[0].status === EnrollmentStatus.Active)
  }

  findCollectionFromSites(sites: Site[]): PharmaNetOrganization[] {
    const result: PharmaNetOrganization[] = [];
    for (let index = 0; index < sites.length; index++) {
      const site = sites[index];
      const collection = this.findCollectionFromSite(site);
      result.push(... collection);
    }

    return result;
  }

  findCollectionFromSite(targetSite: Site): PharmaNetOrganization[] {
    if (!targetSite) { return [] }

    return this.organizations.map(collection => {
      // Lookup based on objectId, so it works even if the Site is cloned from original
      const exists = collection.members
        .map(site => site.objectId)
        .includes(targetSite.objectId);

      if (exists) return collection;
    }).filter(x => x); //Remove undefined
  }

  getMillerColumnDataByUser(): MillerColumnConfig {
    const collectionMiller = this.organizations.map(collection => {
      collection.members = this.setAssociationId(collection.objectId, collection.members);
      return collection;
    });

    const result = {
      data: {
        collections: collectionMiller,
        sites: this.sites,
        people: this.people,
      },
      options: {
        primaryColumn: 'people',
      }
    };

    return result;
  }

  // FIXME: This is very likely wrong/buggy. AssociationIDs perhaps not set correctly? Look at enrollment/site.
  getMillerColumnDataByCollection(): MillerColumnConfig {


    this.organizations.map(collection => {
      collection.members = this.setAssociationId(collection.objectId, collection.members);

      //Also set association id from Person->Site
      // collection.allUsers.map(person => {
      //   person.associationId = person.sites[0].objectId;
      // })
    });

    this.sites.map(site => {
      this.setAssociationId(site.objectId, site.users);
      // console.log(`${site.name} has ${site.users.length} users`)
    });


    const result = {
      data: {
        collections: this.organizations,
        sites: this.sites,
        people: this.people,
      },
      options: {}
    };

    return result;
  }

  findPersonByObjectId(objectId: string): Person{
    return this.people.find(person => person.objectId === objectId);
  }

  findSiteByObjectId(objectId: string): Site{
    return this.sites.find(site => site.objectId === objectId);
  }

  findCollectionByObjectId(objectId: string): PharmaNetOrganization{
    return this.organizations.find(col => col.objectId === objectId);
  }

  findUserSiteByObjectId(objectId: string): Site{
    return this.user.sites.find(site => site.objectId === objectId);
  }

  findUserSiteAccessByObjectId(objectId: string): SiteAccess{
    return this.user.siteAccess.find(sa => sa.objectId === objectId);
  }
  findSiteAccessByObjectId(objectId: string): SiteAccess {
    return this.siteAccesses.find(sa=> sa.objectId === objectId);
  }

  private filterUnique(x, i, a){
    return x && a.indexOf(x) === i;
  }

  private setAssociationId<T>(associationId: string, items: T[]): T[] {
    return items.map(item => {

      if (  typeof (item as any).associationId === 'undefined') {
        (item as any).associationId = [];
      }

      (item as any).associationId.push(associationId);
      return item;
    });
  }

  private clearAssociationId<T>(associationId: string, items: T[]): T[] {
    return items.map(item => {
      // item.associationId = associationId;
      (item as any).associationId = [];
      return item;
    });
  }


}
