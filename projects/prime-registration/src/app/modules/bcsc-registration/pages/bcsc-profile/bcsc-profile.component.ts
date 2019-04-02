import { Component, OnInit } from '@angular/core';

// Development purpose

import { BCSCDummyResponseService } from '../../services/bcsc-dummy-response.service';
import { RegistrationDataService } from '@prime-registration/services/registration-data.service';
import { AbstractForm } from 'moh-common-lib/models';
import { Router, ActivatedRoute } from '@angular/router';
import { PrimeConstants } from '@prime-core/models/prime-constants';
import { RegCacheService } from '@prime-registration/services/reg-cache.service';
import { PrimePerson } from '../../../../../../../../src/app/models/prime-person.model';
import { Registrant } from '../../../registration/models/registrant.model';

@Component({
  selector: 'app-bcsc-profile',
  templateUrl: './bcsc-profile.component.html',
  styleUrls: ['./bcsc-profile.component.scss']
})
export class BcscProfileComponent extends AbstractForm implements OnInit {
  
  constructor( private dummyDataService: BCSCDummyResponseService,
               private registrantService: RegistrationDataService,
               private regCacheService: RegCacheService,
               protected router: Router,
               private activatedroute: ActivatedRoute ) {
    super( router );


    // Development purposes
    if (!registrantService.registrant.firstName) {
      registrantService.registrant.copy(this.dummyDataService.getBcscRegistrant());

      // TODO - REMOVE! FOR TESTERS ONLY
      // This lets the user overwrite the BCSC response via query params. Left in for test only.
      this.activatedroute.queryParams.subscribe(params => {
        if (Object.keys(params).length) {
          const now = new Date();
          const expiry = new Date('15 March 2019');
          // REMOVE ONCE EXPIRED! CODE SHOULD NEVER BE IN A PROD BUILD!
          if (now > expiry) {
            alert('BCSC overwriting via query params has expired');
            return;
          }
          console.log('DEV ONLY! Updating Registrant via query params');
          Object.keys(params).map(key => {
            registrantService.registrant[key] = params[key];
          });
        }
      });


    }

  }

  ngOnInit() {}

  get registrant() {
    return this.registrantService.registrant;
  }

  get cache() {
    return this.regCacheService;
  }
  continue() {
    // Errors exist on form
    if (this.form.invalid) {
      // Mark all fields as touched to display errors
      this.markAllInputsTouched();
      return;
    }

    if ( this.form.valid ) {
      this.navigate( PrimeConstants.BCSC_REGISTRATION + '/' + PrimeConstants.ACCOUNT_PG );
    }
  }
}
