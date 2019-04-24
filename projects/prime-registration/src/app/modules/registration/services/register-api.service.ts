import { Injectable } from '@angular/core';
import { AbstractHttpService } from 'moh-common-lib/services';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import * as moment from 'moment';
import { environment } from '../../../../environments/environment.prod';
import { UserAttrInterface, CheckUserAttr, RegisterUser, AddressInterface } from '../models/register-api.model';
import { ProviderCode } from 'prime-core';
import { PayloadInterface } from '../prime-core/src/models/api-base.model';
import { Registrant } from '../models/registrant.model';
import { Address } from 'moh-common-lib/models';
import { UUID } from 'angular2-uuid';
import { BcscSession } from '../prime-core/src/models/bcsc-session';

@Injectable({
  providedIn: 'root'
})
export class RegisterApiService extends AbstractHttpService {

  public bcscSession: BcscSession = new BcscSession();

    /**
   *  Default hardcoded header values.  Note: Authentication headers are added
   *  at runtime in the httpOptions() method.
   */
  protected _headers: HttpHeaders = new HttpHeaders({
    eventUUID: UUID.UUID().toString()
  });

  // Client name retrieved from parameter in cache
  public clientName: string;

  constructor( protected http: HttpClient ) {
    super( http );
  }

  // Session identifier
  set eventUUID( id: string ) {
    this._headers = this._headers.set( 'eventUUID', id );
  }

  get eventUUID() {
    return this._headers.get( 'eventUUID' );
  }

  /**
   * Get request from the front end to verify user
   * based on attributes i.e email, userID, mobile phone number
   * REG_MOH_10_RQ/REG_MOH_10_RS
   * @param input
   *    email:  The email address for the registrant.
   *    mobile: Mobile number for a SMS capable device.
   *    regType: BCSC or MOH credentials
   *    userID: unique identifier for the account. (regType = MOH)
   *    pdid: User supply the value for Ministry of Health accounts. (regType = BCSC)
   *          For BC Service Card accounts the User ID is provided by the identity provider.
   *
   * @param processDate date the request is processed (defaults to today)
   */
  verifyUserAttr( input: {
    email: string, mobile: string, providerCode: string, accountID: string
  }, processDate = this.getProcessDate() ): Observable<UserAttrInterface> {

    const url = environment.baseAPIUrl + 'validateUser';
    const params: CheckUserAttr = {
      clientName: this.clientName,
      processDate: processDate,
      providerCode: input.providerCode,
      email: input.email,
      mobile: this.stripFormatting( input.mobile )
    };

    if ( input.providerCode === ProviderCode.BCSC ) {
      params.pdid = input.accountID;
    } else {
      params.userId = input.accountID;
    }

    return this.post<UserAttrInterface>(url, this.setBcscSessionData( params ) );
  }

  /**
   * Request to create a BCSC Account in PRIME
   * @param registrant  information pertaining to person who is registering
   * @param processDate date the request is processed (defaults to today)
   */
  registerUser( registrant: Registrant, processDate = this.getProcessDate() ): Observable<PayloadInterface> {

    const url = environment.baseAPIUrl + 'registerUser';
    const params: RegisterUser = {
      clientName: this.clientName,
      processDate: processDate,
      providerCode: registrant.providerCode,
      assuranceLevel: registrant.assuranceLevel,
      email: registrant.emailAddress,
      mobile: this.stripFormatting( registrant.smsPhone ),
      securityQuestions: registrant.secQuestionsAnswer,
      firstname: registrant.firstName,
      lastname: registrant.lastName,
      givennames: registrant.firstName + ' ' + registrant.middleName,
      dateOfBirth: registrant.dateOfBirthShort,
      preffirstname: registrant.preferredFirstName ? registrant.preferredFirstName : null,
      preflastname: registrant.preferredMiddleName ? registrant.preferredMiddleName : null,
      prefmiddlename: registrant.preferredLastName ? registrant.preferredLastName : null,
      address: this.convertAddress( registrant.address ),
      mailingAddress: this.convertAddress(
        !registrant.identityIsMailingAddress ? registrant.mailAddress : null
        )
    };

    if ( registrant.providerCode === ProviderCode.BCSC ) {
      params.pdid = registrant.userAccountName;
    } else {
      params.userId = registrant.userAccountName;
    }

    return this.post<PayloadInterface>(url, this.setBcscSessionData( params ) );
  }

  /**
   *
   * @param error
   */
  protected handleError( error: HttpErrorResponse ): any {

    if (error.error instanceof ErrorEvent) {
      // Client-side / network error occured
      console.error('An error occured: ', error.error.message);
    } else {
      // The backend returned an unsuccessful response code
      console.error(`Backend returned error code: ${error.status}.  Error body: ${error.error}`);
    }
     // A user facing error message /could/ go here; we shouldn't log dev info through the throwError observable
     return throwError( 'Unable to process registration request!' );
  }

  // private

  /**
   * Returns current date in YYYYMMDD HH:MM:SS, e.g. '20180801 12:01:01'
   */
  private getProcessDate(): string {
    return moment().format('YYYYMMDD');
  }

  /**
   * Populate
   * @param item
   */
  private convertAddress( item: Address | null ): AddressInterface {
    return {
      street: item ? item.street : null,
      city: item ? item.city : null,
      province: item ? item.province : null,
      postalCode: item ?  this.stripFormatting( item.postal ) : null,
      country: item ? item.country : null
    };
  }
  /**
   * Strip the formatting the frome string
   * @param value
   */
  private stripFormatting( value: string ): string {
    let val = value;
    if ( val ) {
      val = val.replace(/ /g, '');
      val = val.replace(/-/g, '');
      val = val.replace(/\+/g, '');
      val = val.replace(/\(/g, '');
      val = val.replace(/\)/g, '');
    }
    return val;
  }

  private setBcscSessionData( data: RegisterUser | CheckUserAttr ): RegisterUser | CheckUserAttr {

    if ( !this.bcscSession.isEmpty() ) {

      // BCSC Authentication Transaction Identifier related to login session
      this._headers = this._headers.set( 'authTrxId', this.bcscSession.authTrxId );

      // Payload data
      data.authPartyId = this.bcscSession.authPartyId;
      data.authPartyName = this.bcscSession.authPartyName;
      data.userIdType = this.bcscSession.userIdType;
      data.userType = this.bcscSession.userType;
    }
    return data;
  }
}
