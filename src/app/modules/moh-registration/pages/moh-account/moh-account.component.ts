import { Component, OnInit } from '@angular/core';
import { AbstractForm } from '../../../../shared-core/models/abstract-form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moh-account',
  templateUrl: './moh-account.component.html',
  styleUrls: ['./moh-account.component.scss']
})
export class MohAccountComponent extends AbstractForm implements OnInit {

  constructor( protected router: Router ) {
    super( router );
  }

  ngOnInit() {
  }

  continue() {
    console.log( 'form: ', this.form );
  }
}
