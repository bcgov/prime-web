import { Injectable } from '@angular/core';
import { Registrant } from '../modules/registration/models/registrant.model';
import { Document } from '../models/documents.interface';
import { PrimeConstants } from '../models/prime-constants';


@Injectable()
export class PrimeDataService {


  public registrant: Registrant;
  public confirmPassword: string;

  // TODO - CHANGE! Needs to be a nested array and first type should be meta-data (e.g. driver's license? passport?)
  public documents: Document[];

  constructor() {
    // Data for registrants
    this.registrant = new Registrant();
    this.documents = [];
  }

  /**
   * Checks if the address the registrant entered is Canadian
   */
  isCanada(): boolean {

    if ( !this.registrant.address.country ) {
      return true; // Default to Canada
    } else if ( this.registrant.identityIsMailingAddress ) {
      return (this.registrant.address.country === PrimeConstants.CANADA);
    }
    return (this.registrant.mailAddress.country === PrimeConstants.CANADA);
  }
}
