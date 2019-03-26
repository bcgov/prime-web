import { Component, OnInit } from '@angular/core';

// Development purpose
import { DummyDataService } from '@prime-registration/services/dummy-data.service';
import { RegistrationDataService } from '@prime-registration/services/registration-data.service';
import { AbstractForm } from 'moh-common-lib/models';
import { Router } from '@angular/router';
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

  constructor( private dummyDataService: DummyDataService,
               private registrantService: RegistrationDataService,
               private regCacheService: RegCacheService,
               protected router: Router ) {
    super( router );

    // Development purposes
    if ( !registrantService.registrant.firstName ) {
      registrantService.registrant.copy(this.dummyDataService.getBcscRegistrant());
    }
  }

  ngOnInit() {}

  get registrant() {
    return this.registrantService.registrant;
  }

  set registrant( person: Registrant ) {
    this.registrantService.registrant.copy( person );
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
