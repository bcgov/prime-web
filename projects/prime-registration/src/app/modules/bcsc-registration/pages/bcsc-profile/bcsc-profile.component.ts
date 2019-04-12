import { Component, OnInit } from '@angular/core';

// Development purpose

import { BCSCDummyResponseService } from '../../services/bcsc-dummy-response.service';
import { RegistrationDataService } from '@prime-registration/services/registration-data.service';
import { AbstractForm } from 'moh-common-lib/models';
import { Router, ActivatedRoute } from '@angular/router';
import { RegCacheService } from '@prime-registration/services/reg-cache.service';
import { RegistrationConstants } from '@prime-registration/modules/registration/models/registration-constants.model';
import { AssuranceLevel, ProviderCode } from '@prime-core/models/prime-constants';

@Component({
  selector: 'reg-bcsc-profile',
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

      // TODO - REMOVE! FOR TESTERS ONLY. SHOULD NEVER EVER EVER BE IN PROD.
      // This lets the user overwrite the BCSC response via query params.
      // Currently this code checks the URL to ensure it's not in prod. But this
      // code should be removed entirely after TEST is done with it. Kristin has
      // said that TEST only needs this temporarily during setup and will not
      // need it during test for stablization fixes.
      const VALID_HOSTNAMES = ['localhost', 'maximus-prime-dev.pathfinder.gov.bc.ca', 'maximus-prime-test.pathfinder.gov.bc.ca'];

      this.activatedroute.queryParams.subscribe(params => {
        if (Object.keys(params).length) {

          if (!VALID_HOSTNAMES.includes(location.hostname)){
            alert('BCSC overwriting is not allowed');
            return;
          }
          console.log('DEV ONLY! Updating Registrant via query params');
          Object.keys(params).map(key => {
            // console.log(`${key} === ${params[key]}`);
            let value = params[key];
            try {
              const isJSON = JSON.parse(params[key]);
              if (isJSON){
                value = isJSON;
              }

            } catch (err) { }
            registrantService.registrant[key] = value;
          });
        }
      });


    }

    // Set providerCode and assurance level for registrant
    registrantService.registrant.providerCode = ProviderCode.BCSC;
    registrantService.registrant.assuranceLevel = AssuranceLevel.LEVEL_3;
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
      this.navigate( RegistrationConstants.BCSC_REGISTRATION + '/' + RegistrationConstants.ACCOUNT_PG );
    }
  }
}
