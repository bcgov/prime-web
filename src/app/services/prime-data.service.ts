import { Injectable } from '@angular/core';
import { Registrant } from '../modules/registration/models/registrant.model';
import { CommonImage } from 'moh-common-lib/images';
import { Document } from '../models/documents.interface';


@Injectable()
export class PrimeDataService {


  public registrant: Registrant;
  // TODO - CHANGE! Needs to be a nested array and first type should be meta-data (e.g. driver's license? passport?)
  public documents: Document[];

  constructor() {
    // Data for registrants
    this.registrant = new Registrant();
    this.documents = [];
  }
}
