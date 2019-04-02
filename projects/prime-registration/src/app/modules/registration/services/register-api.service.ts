import { Injectable } from '@angular/core';
import { AbstractHttpService } from 'moh-common-lib/services';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import * as moment from 'moment';
import { environment } from '../../../../environments/environment.prod';
import { UserAttrInterface } from '../models/register-api.model';
import { Registrant } from '../models/registrant.model';
import { RegCredTypes } from '../../../../../../../src/app/models/prime-constants';

@Injectable({
  providedIn: 'root'
})
export class RegisterApiService extends AbstractHttpService {

    /**
   *  Default hardcoded header values.  Note: Authentication headers are added
   *  at runtime in the httpOptions() method.
   */
  protected _headers: HttpHeaders = new HttpHeaders();

  public clientName: string;

  constructor( protected http: HttpClient ) {
    super( http );
  }

  /**
   * Get request from the front end to verify user
   * based on attributes i.e email, userID, mobile phone number
   * REG_MOH_10_RQ/REG_MOH_10_RS
   * @param input
   *    userID: unique identifier for the account.
   *            User supply the value for Ministry of Health accounts.
   *            For BC Service Card accounts the User ID is provided by the identity provider.
   *    email:  The email address for the registrant.
   *    mobile: Mobile number for a SMS capable device.
   *    uuid:   Event UUID
   *
   * @param mohCred indicate whether MoH crediential is being supplied (default = false)
   */
  verifyUserAttr( registrant: Registrant, uuid: string ): Observable<UserAttrInterface> {

    const url = environment.baseAPIUrl + 'validateUser';

    const params = ( registrant.credType === RegCredTypes.MOH ? {
      eventUUID: uuid,
      clientName: this.clientName,
      processDate: this.getProcessDate(),
      providerCode: registrant.credType,
      userID: registrant.userAccountName,
      email: registrant.emailAddress,
      mobile: registrant.smsPhone
    } : {
      eventUUID: uuid,
      clientName: this.clientName,
      processDate: this.getProcessDate(),
      providerCode: registrant.credType,
      pdid: registrant.userAccountName,
      email: registrant.emailAddress,
      mobile: registrant.smsPhone
    });


    return this.post<UserAttrInterface>(url, params);
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
    return moment().format('YYYYMMDD HH:mm:ss');
  }
}
