import { Injectable } from '@angular/core';
import { Document } from '../models/documents.interface';
import { PrimeConstants } from '../models/prime-constants';
import { Registrant } from '@prime-registration/modules/registration/models/registrant.model';
// import { Registrant } from '@prime-reg/src/app/modules/registration/models/registrant.model';

// TODO - Move this over to registration as it specifically uses registrant.

@Injectable()
export class PrimeDataService {


  public registrant: Registrant;

  // TODO - CHANGE! Needs to be a nested array and first type should be meta-data (e.g. driver's license? passport?)
  public documents: Document[];

  // List of the user's names to be used during password verification
  public userNameList: string[];

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
