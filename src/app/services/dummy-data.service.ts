
import { Injectable } from '@angular/core';
import { Collection } from '../models/collections.model';
import { EnrollmentStatus } from '../models/enrollment-status.enum';
import { Person } from '../models/person.model';
import { Address } from '../models/addresses.model';
import {AccessReasons, DeclinedReasons, Site, SiteAccess, SiteAccessProgressSteps} from '../models/sites.model';
import * as moment from 'moment';
import {DateFormatter} from 'ngx-bootstrap';

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
    const nearFuture =  new Date(today.getFullYear(), today.getMonth() + 4, today.getDate());

    for (let index = 0; index < count; index++) {
      const person = new Person();
      person.name = this.generatePersonName();
      person.dateOfBirth = this.generateDateOfBirth();
      person.phone = '250-555-5555';
      person.address = this.generateAddress();
      person.email = person.firstName[0].toLowerCase() + person.lastName.toLowerCase() + '@gmail.com';
      person.renewalDate =  this.randomDate(today, nearFuture);
      person.primeUserId = person.firstName[0] + person.lastName + '--' + person.objectId.slice(0, 4);

      // person.hasCollege = true;
      // person.isDeviceProvider = true;
      // person.isWorkingOnBehalf = true;
      //
      // // toggle related arrays
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
  createSites(count: number, name: string = 'London Drugs'): Site[] {
    console.log( 'Create : ' + count + ' sites.');
    const result: Site[] = [];
    for (let index = 0; index < count; index++) {
      const site = new Site();
      site.address = this.generateAddress();
      site.siteType = this.getRandomElFromArray(['Pharmacy', 'Hospital']);
      site.vendor = this.getRandomElFromArray(['Intellisense', 'Ultracorp', 'Mediware', 'HealthInc']);
      site.name = this.generateSiteName(name);

      site.posUserId = this.generatePosUserId();
      site.provisionedDate = this.generateProvisionedDate();
      site.PEC = this.generatePEC();
      site.request = 'Add Access';
      site.siteClass = 'Prescriber';
      site.accessRights = 'Med Hist + Claims';
      site.tAndC = '-';
      site.startDate = this.generateStartDate(); // This should be in stiteAccess
      site.endDate = this.generateEndDate(); // This should be in stiteAccess
      site.personalAccess = 'I personally access PNET'; // This should be in stiteAccess
      site.collegeId = this.generateCollegeId();

      result.push(site);
    }

    return result;
  }

  /** Returns an array of collections that come populated with sites. */
  createCollectionsWithSites(names: string[] = ['London Drugs'], siteCount: number = 5): Collection[] {
    const result: Collection[] = [];

    names.forEach(name => {
      const sites = this.createSites(siteCount, name);
      const collection = new Collection(name, sites);
      result.push(collection);
    });


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
    const randomStatusString: string = this.getRandomElFromArray(Object.keys(EnrollmentStatus));
    const status: EnrollmentStatus = EnrollmentStatus[randomStatusString];
    SA.status = status;
    if (SA.status === EnrollmentStatus.Declined) {
      // Set declined reason
      const randomReasonString: string = this.getRandomElFromArray(Object.keys(DeclinedReasons));
      const declinedReason: DeclinedReasons = DeclinedReasons[randomReasonString];
      SA.declinedReason = declinedReason;
    }
    SA.site = site;
    SA.person = person;

     // Set personal or not personal access
     if (SA.status !== EnrollmentStatus.New) {
       const randomAccesstring: string = this.getRandomElFromArray(Object.keys(AccessReasons));
       const accessReason: DeclinedReasons = AccessReasons[randomAccesstring];
       SA.accessReason = accessReason;
     }

    // End date is at most 4mo in future
    const today = new Date();
    const sixMonthsFuture =  new Date(today.getFullYear(), today.getMonth() + 4, today.getDate());
    const endDate = this.randomDate(today, sixMonthsFuture);
    SA.endDate = endDate;

    // Request date is any time in the past.
    const pastDate = new Date(2012, 1, 0);
    SA.requestDate = this.randomDate(today, pastDate);

    // Random Progress status. Not necessarily logical. For example, a user that
    // has status=active should not have an in progress status.
    const randomProgressString: string = this.getRandomElFromArray(Object.keys(SiteAccessProgressSteps));
    const progress: SiteAccessProgressSteps = SiteAccessProgressSteps[randomProgressString];
    SA.progress = progress;


    person.siteAccess.push(SA);
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
    });

    // Make sure ALL people have one active Site Access, for dev purposes. Can be removed.
    people.map(person => {
      // Assume they have at least 1 site w/o any
      const site = this.getRandomElFromArray(collection.members);
      const sa: SiteAccess = this.createSiteAccessAndAssociate(site, person);
      if (sa) { sa.status = EnrollmentStatus.Active; }
      else { person.siteAccess[0].status = EnrollmentStatus.Active; }
      result.push(sa);
    });


    return result.filter(x => x); //filter out null
  }


  // Data for demo
  createSiteAccessAndAssociateDemo(site: Site, person: Person, access: string): SiteAccess  {

    const SA: SiteAccess = new SiteAccess();

    SA.site = site;
    SA.person = person;
    SA.siteAccessDemo = access;
    person.siteAccess.push(SA);
    site.siteAccess.push(SA);

      return SA;
  }

  populateSiteAccessFromCollectionDemo( collections: Collection[], people: Person[] ): SiteAccess[] {
    const result: SiteAccess[] = [];
    let sa: SiteAccess;

    //EnrollmentStatus,AccessReason,DeclinedReason,requestDate,startDate,endDate,SiteAccessProgressSteps
    // spaces after commons cause the enums to be undefined, Date format: MM-DD-YYYY
    const access = [
      EnrollmentStatus.New + ',,,05-05-2018,06-06-2018,06-06-2019,' + SiteAccessProgressSteps.Applicant //0
      , EnrollmentStatus.Active + ',' + AccessReasons.NOT_PERSONAL_ACCESS + ', ,05-01-2018,05-16-2018,05-16-2019,'
      + SiteAccessProgressSteps.Provisioner //1
      , EnrollmentStatus.Pending + ',' + AccessReasons.PERSONAL_ACCESS + ',,05-14-2018,06-06-2018,06-06-2019,'
      + SiteAccessProgressSteps.Provisioner //2
      , EnrollmentStatus.Declined + ',' + AccessReasons.PERSONAL_ACCESS + ',' + DeclinedReasons.ACCESS_NO_lONGER_REQUIRED
      + ',05-15-2017,06-01-2017,01-06-2018,' + SiteAccessProgressSteps.Provisioner //3
      , EnrollmentStatus.Declined + ',' + AccessReasons.PERSONAL_ACCESS + ',' + DeclinedReasons.WRONG_SITE
      + ',03-16-2018,04-01-2018,4-01-2019,' + SiteAccessProgressSteps.Applicant //4
      , EnrollmentStatus.Pending + ',' + AccessReasons.PERSONAL_ACCESS + ',,06-11-2018,06-27-2018,06-27-2018,'
      + SiteAccessProgressSteps.Applicant //5
      , EnrollmentStatus.Pending + ',' + AccessReasons.PERSONAL_ACCESS + ',,05-18-2018,06-01-2018,06-01-2019,'
      + SiteAccessProgressSteps.MoH //6
      , EnrollmentStatus.Pending + ',' + AccessReasons.PERSONAL_ACCESS + ',,06-01-2018,06-16-2018,06-16-2019,'
      + SiteAccessProgressSteps.Provisioner //7
      , EnrollmentStatus.Expired + ',' + AccessReasons.PERSONAL_ACCESS + ',,04-16-2017,05-01-2017,04-16-2018,'
      + SiteAccessProgressSteps.Provisioner //8
    ];

    // First Person - 2 New, Active, Approved
    sa = this.createSiteAccessAndAssociateDemo(collections[0].members[0], people[0], access[0]); // New
    result.push(sa);
    sa = this.createSiteAccessAndAssociateDemo(collections[0].members[3], people[0], access[0]); // New
    result.push(sa);
    sa = this.createSiteAccessAndAssociateDemo(collections[0].members[1], people[0], access[1]); // Active
    result.push(sa);
    sa = this.createSiteAccessAndAssociateDemo(collections[0].members[2], people[0], access[2]); // Approved
    result.push(sa);

    // Second Person - Declined by Applicant, Pending with MoH
    sa = this.createSiteAccessAndAssociateDemo(collections[1].members[3], people[1], access[4]);
    result.push(sa);
    sa = this.createSiteAccessAndAssociateDemo(collections[1].members[0], people[1], access[6]);
    result.push(sa);

    // Third Person - Expired
    sa = this.createSiteAccessAndAssociateDemo(collections[1].members[1], people[2], access[8]);
    result.push(sa);

    // Fourth Person - Pending with Applicant
    sa = this.createSiteAccessAndAssociateDemo(collections[1].members[2], people[3], access[5]);
    result.push(sa);

    // Fourth Person - Pending with Provisioner
    sa = this.createSiteAccessAndAssociateDemo(collections[0].members[3], people[4], access[7]);
    result.push(sa);

    return result.filter(x => x); //filter out null
  }

  // Data for Stakeholder demonstration
  createPeopleDemo(): Person[] {

    // Full name, DOB, # days before renewal (null = default 1 year)
    const persons = [ 'Bob A Hunt,01-16-1971,30'
                    , 'Alice R Smith,04-09-1960,60'
                    , 'Ellen H Jones,12-12-1969,90'
                    , 'James C Stewart,07-20-1980'
                    , 'Kate B Mason,11-29-1979' ];
    const address = [ '11 Kings Way, Victoria, British Columbia, Canada, V8R 2N9'
                    , '234 Main Street, Victoria, British Columbia, Canada, V8R 1V9'
                    , '1234 Fort Street, Victoria, British Columbia, Canada, V8T 3R9'
                    , '1267 Yates Street, Victoria, British Columbia, Canada, V8R 4E8'
                    , '34 Douglas Street, Victoria, British Columbia, Canada, V8T 2R9' ];

    const result: Person[] = [];

    for ( let index = 0; index < persons.length; index++ ) {
      const person = new Person();
      person.demoData = persons[index];
      person.address = new Address();
      person.address.setAddress( address[index] );
      person.primeUserId = person.firstName[0] + person.lastName + '--' + person.objectId.slice(0, 4);
      person.PoSId = person.firstName[0] + person.lastName[0] + 107; //Gibberish, not sure what these IDs really look like.


      result.push( person );
    }
    return result;
  }

  /** Returns an array of sites with a random name. */
  createSitesDemo( name: string, siteNumber: number, pec: string ): Site[] {
    const result: Site[] = [];

    const siteInfo = [
        'Pharmacy,Intellisense'
      , 'Pharmacy,Ultracorp'
      , 'Pharmacy,Mediware'
      , 'Pharmacy,HealthInc'
    ];

    const address = [ '1234 Rainbow Way, Victoria, British Columbia, Canada, V8R 2N9'
                    , '54-a Mainland Street, Victoria, British Columbia, Canada, V8R 1V9'
                    , '34 Fort Gary Street, Victoria, British Columbia, Canada, V8T 3R9'
                    , '12667 Bow Street, Victoria, British Columbia, Canada, V8R 4E8'
                  ];


    for (let index = 0; index < siteInfo.length; index++) {
      const site = new Site();
      site.address = new Address();
      site.address.setAddress( address[index % siteInfo.length] );
      site.siteDemoData = `${name} - ${siteNumber + index},${pec}${index},${siteInfo[index]}`;

      site.posUserId = this.generatePosUserId(); // TODO: remove random generate
      site.provisionedDate = this.generateProvisionedDate(); // TODO: remove random generate
      site.request = 'Add Access';
      site.siteClass = 'Prescriber';
      site.accessRights = 'Med Hist + Claims';
      site.tAndC = '-';
      site.startDate = this.generateStartDate(); // TODO: remove random generate
      result.push(site);
    }

    return result;
  }

  // Collections with sites
  createCollectionsDemo(): Collection[] {
    const result: Collection[] = [];

    const names = [ 'Organization A,1000,BCOOOOOA0', 'Organization B,2000,BCOOOOOB0' ];

    names.forEach( name => {
      const _data = name.split( ',' );
      const sites = this.createSitesDemo( _data[0], parseInt( _data[1], 10 ), _data[2] );
      const collection = new Collection( _data[0], sites );
      result.push(collection);
    });

    return result;
  }


  // --- Helpers
  private getRandomElFromArray<T>(arr: T[]): T {
    return arr[Math.ceil(Math.random() * arr.length) - 1];
  }

  private generateSiteName(siteName: string = 'London Drugs'): string {
    const id = Math.ceil(Math.random() * 8000);
    return `${siteName} - ${id}`;
  }

  private generatePersonName(): string {
    const firstNames = ['Bob', 'Alice', 'Fred', 'Ellen', 'James', 'Tom', 'Greg', 'Kate'];
    const lastNames = ['Hunt', 'Smith', 'Jones', 'Stewart', 'Mason'];
    const middleInitials = ['A', 'R', 'H', 'B', 'C', 'D'];

    return `${this.getRandomElFromArray(firstNames)} ${this.getRandomElFromArray(middleInitials)} ${this.getRandomElFromArray(lastNames)}`;
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
    address.postal = 'V8R 2N9';
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


  private generateCollegeId (){
    return 'P1 - ' + Math.ceil(Math.random() * 999999);
  }

}
