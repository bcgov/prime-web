import { Component, OnInit } from '@angular/core';
import { AbstractForm } from 'moh-common-lib/models';
import { Router } from '@angular/router';
import { PrimeConstants } from '@prime-core/models/prime-constants';
import { RegistrationDataService } from '../../../../services/registration-data.service';
import { RegCacheService } from '../../../../services/reg-cache.service';

@Component({
  selector: 'app-bcsc-account',
  templateUrl: './bcsc-account.component.html',
  styleUrls: ['./bcsc-account.component.scss']
})
export class BcscAccountComponent extends AbstractForm implements OnInit {

  constructor( protected router: Router,
               private registrationDataService: RegistrationDataService ,
               private cacheService: RegCacheService ) {
    super( router );
  }

  ngOnInit() {

    if (!this.registrant.secQuestionsAnswer.length) {
      // initialize question/answer array
      for (let i = 0; i < this.cache.numSecQuestion; i++) {
        this.registrant.secQuestionsAnswer.push({ name: null, value: null });
      }
    }
  }

  get registrant() {
    return this.registrationDataService.registrant;
  }

  get cache() {
    return this.cacheService;
  }

  isCanada(): boolean {
    return this.registrationDataService.isCanada();
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

    // ! Temporary - this just waits 2.5sec to simulate an HTTP request.
    setTimeout(() => {
      this.loading = false;
      // Navigate to next page
      this.navigate( PrimeConstants.BCSC_REGISTRATION + '/' +
                    PrimeConstants.CONFIRMATION_PG );
      }, 2500);
  }
}
