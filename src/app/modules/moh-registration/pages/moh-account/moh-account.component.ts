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
   *
   * TODO: Figure out RegExp for achieving this using pattern, else need validation
   *       to be added to password component
   */
  private upperChars = '(?=.*[A-Z])';
  private lowerChars = '(?=.*[a-z])';
  private numerals = '(?=.*\d)';
  private symbolChars = '(?=.*[\[\]?/\.<~#`!@#$%\^&*()-+=|:"\',>{}])';

  constructor( protected router: Router ,
               private primeDataService: PrimeDataService ) {
    super( router );
  }

  ngOnInit() {
  }

  continue() {
    console.log( 'form: ', this.form );

    // Errors exist on form
    if ( this.form.invalid ) {

      // Mark all fields as touched to display errors
      Object.keys(this.form.form.controls).forEach( x => {
        this.form.form.get( x ).markAsTouched();
      });
      return;
    }

    if ( this.validPassword() ) {

      // Navigate to next pag
      this.navigate( PrimeConstants.MOH_REGISTRATION + '/security' );
    }
  }


  private validPassword(): boolean {
    console.log( 'Validate password' );

    const pwdCriteria = RegExp(
      '^(' +
      this.symbolChars +
      ').*$'
    );

   // '^((?=.*[^a-zA-Z\s])(?=.*[a-z])(?=.*[A-Z])|(?=.*[^a-zA-Z0-9\s])(?=.*\d)(?=.*[a-zA-Z])).*$'

    const password = this.primeDataService.registrant.password;
    console.log( pwdCriteria.test( password ) );

    Object.keys(this.form.form.controls).map( x => {
      const control = this.form.form.get( x );
      console.log( 'control.get(name) ', control.get('name') );
    });


    return true;
  }
}
