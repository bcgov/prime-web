import { Injectable } from '@angular/core';
import { Registrant } from '../models/registrant.model';

@Injectable()
export class PrimeDataService {

  public registrant: Registrant;

  constructor() {
    // Data for registrants
    this.registrant = new Registrant();
  }
}
