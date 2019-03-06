import { Component, OnInit } from '@angular/core';
import { AbstractForm } from 'moh-common-lib/models';
import { PrimeConstants } from '../../../../models/prime-constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moh-security',
  templateUrl: './moh-security.component.html',
  styleUrls: ['./moh-security.component.scss']
})
export class MohSecurityComponent extends AbstractForm implements OnInit {

  constructor( protected router: Router ) {
    super( router );
  }

  ngOnInit() {
  }

  continue() {
    console.log( 'button pushed' , this.form.valid, this.form);

    // Navigate to next page
    // this.navigate( PrimeConstants.MOH_REGISTRATION + '/' +
    //                PrimeConstants.CONFIRMATION_PG );
  }
}
