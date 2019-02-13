import { Component, OnInit, OnChanges } from '@angular/core';
import { AbstractForm } from '../../../../shared-core/models/abstract-form';
import { Router } from '@angular/router';

@Component({
  selector: 'prime-moh-profile',
  templateUrl: './moh-profile.component.html',
  styleUrls: ['./moh-profile.component.scss']
})
export class MohProfileComponent  extends AbstractForm implements OnInit {

  constructor( protected router: Router ) {
    super( router );
  }

  ngOnInit() {
  }

  continue() {
    console.log( 'form: ', this.form );
  }
}
