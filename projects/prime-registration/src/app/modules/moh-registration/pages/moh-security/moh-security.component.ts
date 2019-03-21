import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AbstractForm } from 'moh-common-lib/models';
import { PrimeConstants } from '@prime-core/models/prime-constants';
import { Router } from '@angular/router';
import { RegistrationDataService } from '../../../../services/registration-data.service';

@Component({
  selector: 'app-moh-security',
  templateUrl: './moh-security.component.html',
  styleUrls: ['./moh-security.component.scss']
})
export class MohSecurityComponent extends AbstractForm implements OnInit {

  constructor( protected router: Router,
               private dataService: RegistrationDataService ) {
    super(router);
  }

  ngOnInit() {

    if ( !this.registrant.mfaSMSphone ) {
      this.registrant.mfaSMSphone = this.registrant.smsPhone;
    }
  }

  get registrant() {
    return this.dataService.registrant;
  }

  isFormSubmitted(): boolean {
    return this.form.submitted;
  }

  isCanada(): boolean {
    return this.dataService.isCanada();
  }

  continue() {
    console.log('button pushed', this.form.valid, this.form);

    if ( this.registrant.hasMfaMethod() ) {

      this.loading = true;
      // ! Temporary - this just waits 2.5sec to simulate an HTTP request.
      setTimeout(() => {
        this.loading = false;
        this.navigate( PrimeConstants.MOH_REGISTRATION + '/' + PrimeConstants.CONFIRMATION_PG );
        }, 2500);
    }

  }
}
