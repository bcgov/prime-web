
import { Injectable } from '@angular/core';
import { Collection } from '../models/collections.model';
import { EnrollmentStatus } from '../models/enrollment-status.enum';
import { Person } from '../models/person.model';
import { Address } from '../models/addresses.model';
import { Site, SiteAccess, SiteAccessProgressSteps } from '../models/sites.model';
import * as moment from 'moment';

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
  /** Returns an array of people with random names.*/
  createPeople(count): Person[] {
    const result: Person[] = [];
    const today = new Date();
    /** We want nearFuture show that they show up in Upcoming Renewals */
    const nearFuture =  new Date(today.getFullYear(), today.getMonth() + 4, today.getDate())

    for (let index = 0; index < count; index++) {
      const person = new Person();
      person.name = this.generatePersonName();
      person.dateOfBirth = this.generateDateOfBirth();
      person.phone = '250-555-5555';
      person.address = this.generateAddress();
      person.email = person.firstName[0].toLowerCase() + person.lastName.toLowerCase() + "@gmail.com";
      person.renewalDate =  this.randomDate(today, nearFuture);
      person.primeUserId = person.firstName[0] + person.lastName + '--' + person.objectId.slice(0, 4);

      // person.hasCollege = true;
      // person.isDeviceProvider = true;
      // person.isWorkingOnBehalf = true;
      //
      // toggle related arrays
      // person.collegeCertificationList = [
      //   { collegeType: 'CPBC',
      //     licenceNumber: 'LN_CPBC1',
      //     licenceClassCPType: 'FULL',
      //     licenceClassCRNType: '',
      //     licenceClassCPSType: '',
      //     licenceExpiryDate: this.randomDate(person.dateOfBirth, today),
      //     advancedPracticeCertificationType: '' },
      //   { collegeType: 'CRNBC',
      //     licenceNumber: 'LN_CRNBC1',
      //     licenceClassCPType: '',
      //     licenceClassCRNType: 'REGISTERED',
      //     licenceClassCPSType: '',
      //     licenceExpiryDate: this.randomDate(person.dateOfBirth, today),
      //     advancedPracticeCertificationType: 'REMOTE'},
      //   { collegeType: 'CPSBC',
      //     licenceNumber: 'LN_CPSBC1',
      //     licenceClassCPType: '',
      //     licenceClassCRNType: '',
      //     licenceClassCPSType: 'GENERAL',
      //     licenceExpiryDate: this.randomDate(person.dateOfBirth, today),
      //     advancedPracticeCertificationType: '' }];
      //
      // person.deviceProviderList = [
      //   { dpNumber: 'DPN_01' },
      //   { dpNumber: 'DPN_02' },
      //   { dpNumber: 'DPN_03' }];
      //
      // person.workingOnBehalfList = [
      //   { jobTitle: 'MEDICA' }];
      //
      // // Self declaration related
      // person.informationContravention = { flag: true, detail: 'Information contravention related comment' };
      // person.cancelledRegistration    = { flag: true, detail: 'Cancelled registration related comment' };
      // person.licenceCondition         = { flag: true, detail: 'Terms and Conditions imposed related comment' };
      // person.revokedAccess            = { flag: true, detail: 'Revoked access related comment' };

      result.push(person);
    }

    return result;
  }

  /** Returns an array of sites with a random name. */
  createSites(count: number, name: string = "London Drugs"): Site[] {
    console.log( 'Create : ' + count + ' sites.');
    const result: Site[] = [];
    for (let index = 0; index < count; index++) {
      const site = new Site();
      site.address = this.generateAddress();
      site.siteType = this.getRandomElFromArray(['Pharmacy', 'Hospital'])
      site.vendor = this.getRandomElFromArray(['Intellisense', 'Ultracorp', 'Mediware', 'HealthInc']);
      site.name = this.generateSiteName(name);

      site.posUserId = this.generatePosUserId();
      site.provisionedDate = this.generateProvisionedDate();
      site.PEC = this.generatePEC();
      site.request = 'Add Access';
      site.siteClass = 'Prescriber';
      site.accessRights = 'Med Hist + Claims';
      site.tAndC = '-';
      site.startDate = this.generateStartDate();
      site.endDate = this.generateEndDate();
      site.personalAccess = 'I personally access PNET';

      result.push(site);
    }

    return result;
  }

  /** Returns an array of collections that come populated with sites. */
  createCollectionsWithSites(names: string[] = ["London Drugs"], siteCount: number = 5): Collection[] {
    const result: Collection[] = [];

    names.forEach(name => {
      const sites = this.createSites(siteCount, name);
      let collection = new Collection(name, sites);
      result.push(collection);
    })


    return result;
  }
   /**
   * Creates a Site Access with a random status that's associated to the input
   * parameters.  It does  modify the inputted Person and Site objects to
   * associate them with the Site Access.
   */
  createSiteAccessAndAssociate(site: Site, person: Person): SiteAccess {

    // Only one SiteAccess between a specific person and specific site. (TODO: Verify business logic, as conceivably this can change)
    if (person.sites.includes(site)){
      return null;
    }

    const SA: SiteAccess = new SiteAccess();
    let randomStatusString : string = this.getRandomElFromArray(Object.keys(EnrollmentStatus));
    let status: EnrollmentStatus = EnrollmentStatus[randomStatusString];
    SA.status = status;
    SA.site = site;
    SA.person = person;

    // End date is at most 4mo in future
    const today = new Date();
    const sixMonthsFuture =  new Date(today.getFullYear(), today.getMonth() + 4, today.getDate())
    const endDate = this.randomDate(today, sixMonthsFuture)
    SA.endDate = endDate;

    // Request date is any time in the past.
    const pastDate = new Date(2012, 1, 0);
    SA.requestDate = this.randomDate(today, pastDate);

    // Random Progress status. Not necessarily logical. For example, a user that
    // has status=active should not have an in progress status.
    let randomProgressString : string = this.getRandomElFromArray(Object.keys(SiteAccessProgressSteps));
    let progress: SiteAccessProgressSteps = SiteAccessProgressSteps[randomProgressString];
    SA.progress = progress;


    person.siteAccess.push(SA)
    site.siteAccess.push(SA);

    return SA;
  }

  /**
   * Returns an array of SiteAccess objects that have been associated to the
   * inputted collection and people.
   */
  populateSiteAccessFromCollection(collection: Collection, people: Person[]): SiteAccess[] {
    const result: SiteAccess[] = [];

    // Make sure at least each site has one person
    collection.members.map(site => {
      const person = this.getRandomElFromArray(people);
      const sa: SiteAccess = this.createSiteAccessAndAssociate(site, person);
      result.push(sa);
    })

    // Make sure ALL people have one active Site Access, for dev purposes. Can be removed.
    people.map(person => {
      // Assume they have at least 1 site w/o any
      const site = this.getRandomElFromArray(collection.members)
      const sa: SiteAccess = this.createSiteAccessAndAssociate(site, person);
      if (sa) { sa.status = EnrollmentStatus.Active; }
      else { person.siteAccess[0].status = EnrollmentStatus.Active; }
      result.push(sa);
    })


    return result.filter(x => x); //filter out null
  }

  /** Edits the Person in place, setting it up for the Applicant module */
  setPersonToApplicant(person: Person): void {

    // TODO: Don't overwrite values if there's something already there!
    person.name = "James Smith";
    person.phone = "250-592-8553"
    person.email = "jsmith@email.com";
    person.renewalDate = new Date(2018, 10, 12);

    person.dateOfBirth = this.generateDateOfBirth();
    person.phone = '250-555-5555';
    person.address = this.generateAddress();
    person.email = person.firstName[0].toLowerCase() + person.lastName.toLowerCase() + "@gmail.com";

    const today = new Date();
    /** We want nearFuture show that they show up in Upcoming Renewals */
    const nearFuture =  new Date(today.getFullYear(), today.getMonth() + 4, today.getDate())
    person.renewalDate =  this.randomDate(today, nearFuture);

    // Create sites for applicant dashboard
    const sites = this.createSites( Math.ceil(Math.random() * 20) );
    for (let site of sites) {
      this.createSiteAccessAndAssociate(site, person);
    }
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
    const firstNames = ['Bob', 'Alice', 'Fred', 'Ellen', 'James', 'Tom', 'Greg', 'Kate'];
    const lastNames = ['Hunt', 'Smith', 'Jones', 'Stewart', 'Mason'];
    const middleInitials = ['A', 'R', 'H', 'B', 'C', 'D']

    return `${this.getRandomElFromArray(firstNames)} ${this.getRandomElFromArray(middleInitials)} ${this.getRandomElFromArray(lastNames)}`
  }

  private generateDateOfBirth(): Date {
    const today = new Date();
    const pastDate = new Date(1970, 1, 0);
    return this.randomDate(today, pastDate);
  }

  private generateAddress(): Address {
    const streetNames = ['Kings', 'Main', 'Fort', 'Yates', 'Douglas'];
    const address = new Address();

    address.street = `${Math.ceil(Math.random() * 8000)} ${this.getRandomElFromArray(streetNames)} St.`;
    address.postal = 'V9R 2VR';
    address.country = 'Canada';
    address.province = 'British Columbia';
    address.city = 'Victoria';
    return address;
  }


  private generatePosUserId(): string {
    const posIds = ['T', 'SJ', 'OA', 'KL', 'M'];
    return `${this.getRandomElFromArray(posIds)}${Math.ceil(Math.random() * 8000)} `;

  }

  private generateProvisionedDate(): string{
    const today = new Date();
    const pastDate = new Date(2017, 1, 0);
    return moment(this.randomDate(today, pastDate)).format('DD/MM/YYYY');
  }

  private generateStartDate(): string{
    const today = new Date();
    const pastDate = new Date(2017, 1, 0);
    return moment(this.randomDate(today, pastDate)).format('DD/MM/YYYY');
  }

  private generateEndDate(): string{
    const today = new Date();
    const pastDate = new Date(2020, 1, 0);
    return moment(this.randomDate(today, pastDate)).format('DD/MM/YYYY');
  }

  // Generates PEC for a Site
  private generatePEC(){
    return `BC00000A` + Math.ceil(Math.random() * 99);
  }


  private randomDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }




}
