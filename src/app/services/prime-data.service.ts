import { Injectable } from '@angular/core';
import { Registrant } from '../modules/registration/models/registrant.model';


@Injectable()
export class PrimeDataService {

  public registrant: Registrant;

  constructor() {
    // Data for registrants
    this.registrant = new Registrant();
  }
}
