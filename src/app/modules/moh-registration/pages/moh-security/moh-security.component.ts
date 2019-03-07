import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AbstractForm } from 'moh-common-lib/models';
import { PrimeConstants } from '../../../../models/prime-constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moh-security',
  templateUrl: './moh-security.component.html',
  styleUrls: ['./moh-security.component.scss']
})
export class MohSecurityComponent extends AbstractForm implements OnInit {

  constructor(protected router: Router, private cd: ChangeDetectorRef) {
    super(router);
  }

  ngOnInit() {
  }

  continue() {
    console.log('button pushed', this.form.valid, this.form);

    if (this.form.valid) {
      this.loading = true;
    }
  }

  registerAccount( valid: boolean ) {

    // TODO: Make REST call REG_20 to register user
    if ( valid ) {
      // ! Temporary - this just waits 2.5sec to simulate an HTTP request.
      setTimeout(() => {
        this.navigate( PrimeConstants.MOH_REGISTRATION + '/' +
                      PrimeConstants.CONFIRMATION_PG );
        }, 2500);
    }
    this.loading = false;
  }
}
