import { Component, OnInit } from '@angular/core';
import { AbstractForm } from 'moh-common-lib/models';
import { Router } from '@angular/router';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { PrimeConstants } from '../../../../models/prime-constants';

@Component({
  selector: 'app-moh-account',
  templateUrl: './moh-account.component.html',
  styleUrls: ['./moh-account.component.scss']
})
export class MohAccountComponent extends AbstractForm implements OnInit {

  /**
   * At least 3 of the following categories:
   *  a) Upper case characters (A-Z)
   *  b) Lower case characters (a-z)
   *  c) Numeral (0-9)
   *  d) Non-alphanumeric characters e.g. []?/\.<~#`!@#$%^&*()-+=|:"',>{}
   */

  constructor( protected router: Router,
               private primeDataService: PrimeDataService ) {
    super( router );
  }

  ngOnInit() {
  }

  continue() {

    console.log(`form`, {valid: this.form.valid, submitted: this.form.submitted}, this.form);

   // if (this.form.valid) {


      this.validPassword();

      // Navigate to next page
    //  this.navigate( PrimeConstants.MOH_REGISTRATION + '/' +
     //                PrimeConstants.SECURITY_PG );

   // } else {
      // Errors exist on form
      // Mark all fields as touched to display errors
   //   this.markAllInputsTouched();
   // }
  }

  /**
   * At least 3 of the following categories:
   *  a) Upper case characters (A-Z)
   *  b) Lower case characters (a-z)
   *  c) Numeral (0-9)
   *  d) Non-alphanumeric characters e.g. []?/\.<~#`!@#$%^&*()-+=|:"',>{}
   */
  private validPassword(): boolean {
    const pwdCriteria = RegExp(
      '^((?=.*[^a-zA-Z\S])(?=.*[a-z])(?=.*[A-Z])|(?=.*[^a-zA-Z0-9\S])(?=.*\d)(?=.*[a-zA-Z])).*$'
    );
    console.log( 'Validate password criteria: ', pwdCriteria );

   //
    const password = this.primeDataService.registrant.password;


    console.log( 'Validate password password: ', password );
    console.log('Validate password: ', pwdCriteria.test( password ) );


    return false;
  }
}
