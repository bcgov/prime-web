import { Component, OnInit, OnChanges } from '@angular/core';
import { AbstractForm } from 'moh-common-lib/models';
import { Router } from '@angular/router';
import { PrimeConstants } from '@prime-core/models/prime-constants';

@Component({
  selector: 'prime-moh-profile',
  templateUrl: './moh-profile.component.html',
  styleUrls: ['./moh-profile.component.scss']
})
export class MohProfileComponent extends AbstractForm implements OnInit {

  constructor( protected router: Router ) {
    super( router );
  }

  ngOnInit() {
  }

  continue() {

    console.log(`form`, {valid: this.form.valid, submitted: this.form.submitted}, this.form);

    if (this.form.invalid) {

      // Errors exist on form
      // Mark all fields as touched to display errors
      this.markAllInputsTouched();
      return;
    }
    this.loading = true;
  }


  continueRegistration( valid: boolean ) {
    this.loading = false;

    if ( valid ) {
      // Navigate to next page
      this.navigate( PrimeConstants.MOH_REGISTRATION + '/' +
                     PrimeConstants.DOC_UPLD_PG );
    }
  }
}
