import { Component, OnInit } from '@angular/core';
import { AbstractForm } from 'moh-common-lib/models';
import { Router } from '@angular/router';
import { RegCredTypes } from '@prime-core/models/prime-constants';
import { RegistrationDataService } from '@prime-registration/services/registration-data.service';
import { RegCacheService } from '@prime-registration/services/reg-cache.service';
import { UserAttrPayload } from '@prime-registration/modules/registration/models/register-api.model';
import { RegisterApiService } from '@prime-registration/modules/registration/services/register-api.service';
import { RegisterRespService } from '@prime-registration/modules/registration/services/register-resp.service';

@Component({
  selector: 'app-bcsc-account',
  templateUrl: './bcsc-account.component.html',
  styleUrls: ['./bcsc-account.component.scss']
})
export class BcscAccountComponent extends AbstractForm implements OnInit {

  constructor( protected router: Router,
               private registrationDataService: RegistrationDataService ,
               private cacheService: RegCacheService,
               private registerApiService: RegisterApiService,
               private registerRespService: RegisterRespService ) {
    super( router );
  }

  ngOnInit() {

    if (!this.registrant.secQuestionsAnswer.length) {
      // initialize question/answer array
      for (let i = 0; i < this.cache.numSecQuestion; i++) {
        this.registrant.secQuestionsAnswer.push({ name: null, value: null });
      }
    }
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
    this.registrant.credType = RegCredTypes.BCSC;
     const subscription = this.registerApiService.verifyUserAttr(
       this.registrant, this.registrationDataService.eventUUID
       );

    // Trigger the HTTP request
    subscription.subscribe(
      response => {
        this.registerRespService.payload = new UserAttrPayload( response );
        this.loading = false;

        if ( this.registerRespService.payload.success ) {

          // Register User in PRIME
          console.log( 'Can attempt to register user in PRIME.' );

        } else {
          console.log( 'Correct issue and try again.' );
        }
      },
      responseError => {
        this.loading = false;
        console.log( 'Error occurred: ', responseError );
      });
  }
}


//  this.navigate( RegistrationConstants.BCSC_REGISTRATION + '/' + RegistrationConstants.CONFIRMATION_PG );
