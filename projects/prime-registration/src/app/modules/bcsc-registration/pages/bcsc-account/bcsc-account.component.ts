import { Component, OnInit } from '@angular/core';
import { AbstractForm } from 'moh-common-lib/models';
import { Router } from '@angular/router';
import { PrimeConstants } from '../../../../models/prime-constants';

@Component({
  selector: 'app-bcsc-account',
  templateUrl: './bcsc-account.component.html',
  styleUrls: ['./bcsc-account.component.scss']
})
export class BcscAccountComponent extends AbstractForm implements OnInit {

  constructor( protected router: Router ) {
    super( router );
  }

  ngOnInit() {
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
  }

  registerAccount( valid: boolean ) {

    if ( valid ) {

      this.loading = true;

      // ! Temporary - this just waits 2.5sec to simulate an HTTP request.
      setTimeout(() => {
        // Navigate to next page
        this.navigate( PrimeConstants.BCSC_REGISTRATION + '/' +
                      PrimeConstants.CONFIRMATION_PG );
        }, 2500);
    }
  }
}
