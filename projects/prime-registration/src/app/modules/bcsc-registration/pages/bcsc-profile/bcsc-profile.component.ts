import { Component, OnInit } from '@angular/core';

// Development purpose
import { DummyDataService } from '../../../../services/dummy-data.service';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { AbstractForm } from 'moh-common-lib/models';
import { Router } from '@angular/router';
import { PrimeConstants } from '../../../../models/prime-constants';

@Component({
  selector: 'app-bcsc-profile',
  templateUrl: './bcsc-profile.component.html',
  styleUrls: ['./bcsc-profile.component.scss']
})
export class BcscProfileComponent extends AbstractForm implements OnInit {

  constructor( private dummyDataService: DummyDataService,
               private primeDataServie: PrimeDataService ,
               protected router: Router ) {
    super( router );

    // Development purposes
    primeDataServie.registrant.copy( this.dummyDataService.getBcscRegistrant() );
  }

  ngOnInit() {
  }

  continue() {
    // Errors exist on form
    if (this.form.invalid) {

      // Mark all fields as touched to display errors
      this.markAllInputsTouched();
      return;
    }
  }


  continueRegistration( valid: boolean ) {
    this.loading = true;

    if ( valid ) {
      // Navigate to next page
      this.navigate( PrimeConstants.BCSC_REGISTRATION + '/' +
                     PrimeConstants.ACCOUNT_PG );
    }
  }
}
