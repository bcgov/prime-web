import { Component, OnInit } from '@angular/core';
import { AbstractForm } from 'moh-common-lib/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bcsc-account',
  templateUrl: './bcsc-account.component.html',
  styleUrls: ['./bcsc-account.component.scss']
})
export class BcscAccountComponent extends AbstractForm implements OnInit {

    constructor( protected router: Router ) {
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

    }
}
