import { Component, OnInit } from '@angular/core';

// Development purpose

import { BCSCDummyResponseService } from '../../services/bcsc-dummy-response.service';
import { RegistrationDataService } from '@prime-registration/services/registration-data.service';
import { AbstractForm } from 'moh-common-lib/models';
import { Router } from '@angular/router';
import { RegCacheService } from '@prime-registration/services/reg-cache.service';
import { RegistrationConstants } from '@prime-registration/modules/registration/models/registration-constants.model';
import { AssuranceLevel, ProviderCode } from '@prime-core/models/prime-constants';

@Component({
  selector: 'app-bcsc-profile',
  templateUrl: './bcsc-profile.component.html',
  styleUrls: ['./bcsc-profile.component.scss']
})
export class BcscProfileComponent extends AbstractForm implements OnInit {

  constructor( private dummyDataService: BCSCDummyResponseService,
               private registrantService: RegistrationDataService,
               private regCacheService: RegCacheService,
               protected router: Router ) {
    super( router );

    // Development purposes
    if ( !registrantService.registrant.firstName ) {
      registrantService.registrant.copy(this.dummyDataService.getBcscRegistrant());
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
