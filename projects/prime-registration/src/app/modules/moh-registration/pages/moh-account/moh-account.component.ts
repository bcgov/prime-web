import { Component, OnInit } from '@angular/core';
import { AbstractForm } from 'moh-common-lib/models';
import { Router } from '@angular/router';
import { PrimeConstants } from '../../../../models/prime-constants';

@Component({
  selector: 'app-moh-account',
  templateUrl: './moh-account.component.html',
  styleUrls: ['./moh-account.component.scss']
})
export class MohAccountComponent extends AbstractForm implements OnInit {



  constructor( protected router: Router ) {
    super( router );
  }

  ngOnInit() {
  }

  continue() {

    if (this.form.invalid) {

      // Errors exist on form
      // Mark all fields as touched to display errors
      this.markAllInputsTouched();
      return;
    }
    this.loading = true;
  }

  continueRegister( valid: boolean ) {

    console.log( 'onValidation: ', valid );


    console.log( 'form: ', this.form );


    this.loading = false;
    if ( valid ) {
      // Navigate to next page
      this.navigate( PrimeConstants.MOH_REGISTRATION + '/' +
                      PrimeConstants.SECURITY_PG );
    }
  }
}
