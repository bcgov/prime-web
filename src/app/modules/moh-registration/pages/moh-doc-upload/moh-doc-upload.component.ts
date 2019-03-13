import { Component, OnInit } from '@angular/core';
import { AbstractForm } from 'moh-common-lib/models';
import { Router } from '@angular/router';
import { PrimeConstants } from '../../../../models/prime-constants';

@Component({
  selector: 'app-moh-doc-upload',
  templateUrl: './moh-doc-upload.component.html',
  styleUrls: ['./moh-doc-upload.component.scss']
})
export class MohDocUploadComponent extends AbstractForm implements OnInit {

  constructor(protected router: Router) {
    super(router);
  }

  ngOnInit() {
  }

  continue() {
    console.log('MoH form', {valid: this.form.valid, submitted: this.form.submitted}, this.form);

    if (this.form.invalid) {

      // Errors exist on form
      // Mark all fields as touched to display errors
      this.markAllInputsTouched();
    }
  }

  continueRegistration( valid: boolean ) {

    console.log( 'Continue Registration:', valid );

    if ( valid ) {

      // Navigate to next page
      this.navigate( PrimeConstants.MOH_REGISTRATION + '/' +
                     PrimeConstants.ACCOUNT_PG );
    }
  }
}
