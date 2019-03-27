import { Component, OnInit } from '@angular/core';
import { AbstractForm } from 'moh-common-lib/models';
import { Router } from '@angular/router';
import { RegCacheService } from '@prime-registration/services/reg-cache.service';
import { RegistrationDataService } from '@prime-registration/services/registration-data.service';
import { RegistrationConstants } from '../../../registration/models/registration-constants.model';
import { RegisterApiService } from '../../../registration/services/register-api.service';
import { RegisterRespService } from '../../../registration/services/register-resp.service';
import { RegCredTypes } from '../../../../../../../../src/app/models/prime-constants';
import { UserAttrPayload } from '../../../registration/models/register-api.model';

@Component({
  selector: 'app-moh-account',
  templateUrl: './moh-account.component.html',
  styleUrls: ['./moh-account.component.scss']
})
export class MohAccountComponent extends AbstractForm implements OnInit {

  public nameList: string[] = [];

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

    this.nameList = Object.keys(this.registrant).map( x => {
      if ( x.includes( 'Name' ) ) {
        return this.registrant[x];
      }
    }).filter( item => item );
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
    this.registrant.credType = RegCredTypes.MOH;
     const subscription = this.registerApiService.verifyUserAttr(
       this.registrant, this.registrationDataService.eventUUID
       );

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
