import { Component, OnInit } from '@angular/core';

// Development purpose
import { DummyDataService } from '../../../../services/dummy-data.service';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { AbstractForm } from 'moh-common-lib/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bcsc-profile',
  templateUrl: './bcsc-profile.component.html',
  styleUrls: ['./bcsc-profile.component.scss']
})
export class BcscProfileComponent extends AbstractForm implements OnInit {

  constructor( private dummyDataService: DummyDataService,
               private primeDataServie: PrimeDataService ,
               protected router: Router ) {
    super( router );

    // Development purposes
    primeDataServie.registrant.copy( this.dummyDataService.getBcscRegistrant() );
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


    // Navigate to next page
    this.navigate( 'bcsc-registration/account' );
  }

}
