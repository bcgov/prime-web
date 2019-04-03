import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractForm } from 'moh-common-lib/models';
import { Router } from '@angular/router';
import { RegCacheService } from '@prime-registration/services/reg-cache.service';
import { RegistrationDataService } from '@prime-registration/services/registration-data.service';
import { RegistrationConstants } from '@prime-registration/modules/registration/models/registration-constants.model';
import { RegisterApiService } from '@prime-registration/modules/registration/services/register-api.service';
import { RegisterRespService } from '@prime-registration/modules/registration/services/register-resp.service';
import { ProviderCode } from '@prime-core/models/prime-constants';
import { UserAttrPayload, CheckUserAttr } from '@prime-registration/modules/registration/models/register-api.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-moh-account',
  templateUrl: './moh-account.component.html',
  styleUrls: ['./moh-account.component.scss']
})
export class MohAccountComponent extends AbstractForm implements OnInit, OnDestroy {

  public nameList: string[] = [];
  private hasParameters$: Subscription;

  constructor( protected router: Router,
               private registrationDataService: RegistrationDataService ,
               private cacheService: RegCacheService,
               private registerApiService: RegisterApiService,
               private registerRespService: RegisterRespService ) {
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

    this.nameList = Object.keys(this.registrant).map( x => {
      if ( x.includes( 'Name' ) ) {
        return this.registrant[x];
      }
    }).filter( item => item );
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
        this.loading = false;

        if ( this.registerRespService.payload.success ) {

          // Register User can continue with registration
          this.navigate( RegistrationConstants.MOH_REGISTRATION + '/' +
                         RegistrationConstants.SECURITY_PG );

        } else if ( this.registerRespService.payload.warning ) {
          console.log( 'Correct issue and try again.' );
        } else {
          this.navigate( RegistrationConstants.MOH_REGISTRATION + '/' +
                         RegistrationConstants.CONFIRMATION_PG );
        }
      },
      responseError => {
        this.loading = false;
        console.log( 'Error occurred: ', responseError );
      });
  }
}
