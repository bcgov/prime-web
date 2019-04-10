import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractForm } from 'moh-common-lib/models';
import { Router } from '@angular/router';
import { RegistrationDataService } from '@prime-registration/services/registration-data.service';
import { RegCacheService } from '@prime-registration/services/reg-cache.service';
import { UserAttrPayload } from '@prime-registration/modules/registration/models/register-api.model';
import { RegisterApiService } from '@prime-registration/modules/registration/services/register-api.service';
import { RegisterRespService } from '@prime-registration/modules/registration/services/register-resp.service';
import { RegistrationConstants } from '@prime-registration/modules/registration/models/registration-constants.model';
import { Subscription } from 'rxjs';
import { ServerPayload } from '@prime-core/models/api-base.model';
import { LoggerService, RegistrationEvent, LogMessage } from '@prime-registration/services/logger.service';

@Component({
  selector: 'app-bcsc-account',
  templateUrl: './bcsc-account.component.html',
  styleUrls: ['./bcsc-account.component.scss']
})
export class BcscAccountComponent extends AbstractForm implements OnInit, OnDestroy {

  private hasParameters$: Subscription;

  constructor( protected router: Router,
               private registrationDataService: RegistrationDataService ,
               private cacheService: RegCacheService,
               private registerApiService: RegisterApiService,
               private registerRespService: RegisterRespService,
               private logger: LoggerService ) {
    super( router );
  }

  ngOnInit() {

    this.hasParameters$ = this.cacheService.$sysParamList.subscribe( obs => {
        let param = obs.find( x => x.name === RegistrationConstants.SEC_QUEST_CNT );

       if (param) {
          // initialize question/answer arra
          for (let i = this.registrant.secQuestionsAnswer.length; i < Number(param.value); i++) {
            this.registrant.secQuestionsAnswer.push({ name: null, value: null });
          }
        }

        param = obs.find( x => x.name === RegistrationConstants.REG_CLIENTNAME );
        this.registerApiService.clientName = param ? param.value : null;
    } );
  }

  ngOnDestroy() {
    this.hasParameters$.unsubscribe();
  }

  get registrant() {
    return this.registrationDataService.registrant;
  }

  get cache() {
    return this.cacheService;
  }

  isCanada(): boolean {
    return this.registrationDataService.isCanada();
  }

  continue() {

    console.log( 'form: ', this.form );
    if (this.form.invalid) {

      // Errors exist on form
      // Mark all fields as touched to display errors
      this.markAllInputsTouched();
      return;
    }

    this.loading = true;

    // Verify user based on attributes i.e email, userID, mobile phone number
    const subscription = this.registerApiService.verifyUserAttr( {
      email: this.registrant.emailAddress,
      mobile: this.registrant.smsPhone,
      providerCode: this.registrant.providerCode,
      accountID: this.registrant.userAccountName
    } );

    // Trigger the HTTP request
    subscription.subscribe(
      response => {
        this.registerRespService.payload = new UserAttrPayload( response );

        if ( this.registerRespService.payload.success ) {

          this.logger.log({
            event: RegistrationEvent.VALIDATE_USER,
            success: this.registerRespService.payload.success
          });

          // Register User in PRIME
          this.requestRegisterUser();
        } else if ( this.registerRespService.payload.error ) {
          this.nextPage( RegistrationEvent.VALIDATE_USER, false,
                         <string>this.registerRespService.payload.statusMsgs );
        } else {

          // Display errors on page
          this.loading = false;
          console.log( 'Correct issue and try again.' );

          this.logger.log({
            event: RegistrationEvent.VALIDATE_USER,
            success: false,
            errMsg: 'Duplicate email or phone number found.'
          });
        }
      },
      responseError => {
        console.log( 'Error: ', responseError );
        this.nextPage( RegistrationEvent.VALIDATE_USER, false, responseError );
      });
  }

  /**
   * Request to back-end to register the user in PRIME
   */
  private requestRegisterUser() {

    // Register User in PRIME
    const subscription2 = this.registerApiService.registerUser( this.registrant );
    subscription2.subscribe(
      regResp => {
        this.loading = false;
        this.registerRespService.payload = new ServerPayload( regResp );
        this.nextPage(
          RegistrationEvent.REGISTER_USER,
          this.registerRespService.payload.success,
          <string>this.registerRespService.payload.statusMsgs
          );
      },
      regRespError => {
        console.log( 'Error: ', regRespError );
        this.nextPage( RegistrationEvent.REGISTER_USER, false, regRespError );
      });
  }

  private nextPage( event: RegistrationEvent, success: boolean, errMsg: string = null ) {
    const logMessage: LogMessage = {
      event: event,
      success: success
    };

    if ( !success ) {
      logMessage.errMsg = errMsg;
    }

    // Logging
    this.logger.log( logMessage );

    this.loading = false;
    this.navigate( RegistrationConstants.BCSC_REGISTRATION + '/' + RegistrationConstants.CONFIRMATION_PG );
  }
}
