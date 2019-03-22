import { Component, OnInit } from '@angular/core';
import { AbstractForm } from 'moh-common-lib/models';
import { Router } from '@angular/router';
import { PrimeConstants } from '@prime-core/models/prime-constants';
import { RegCacheService } from '../../../../services/reg-cache.service';
import { RegistrationDataService } from '../../../../services/registration-data.service';

@Component({
  selector: 'app-moh-account',
  templateUrl: './moh-account.component.html',
  styleUrls: ['./moh-account.component.scss']
})
export class MohAccountComponent extends AbstractForm implements OnInit {

  public nameList: string[] = [];

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

    this.nameList = Object.keys(this.registrant).map( x => {
      if ( x.includes( 'Name' ) ) {
        return this.registrant[x];
      }
    }).filter( item => item );
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
      this.navigate( PrimeConstants.MOH_REGISTRATION + '/' +
                    PrimeConstants.SECURITY_PG );
      }, 2500);
  }
}
