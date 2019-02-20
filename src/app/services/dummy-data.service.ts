import { Injectable } from '@angular/core';
import { Registrant } from '../modules/registration/models/registrant.model';


/**
 * Dummy data for development purposes
 */

@Injectable({
  providedIn: 'root'
})
export class DummyDataService {

  constructor() { }

  getBcscRegistrant(): Registrant {
    const registrant = new Registrant();

    registrant.firstName = 'Boo';
    registrant.middleName = 'Jr.';
    registrant.lastName = 'Whoo';

    registrant.dateOfBirth = { month: 2, day: 3, year: 1999 };

    registrant.address.country = 'Canada';
    registrant.address.province = 'British Columbia';
    registrant.address.street = '123 Oz Street';
    registrant.address.city = 'Victoria';
    registrant.address.postal = 'V1V1V1';

    return registrant;
  }
}
