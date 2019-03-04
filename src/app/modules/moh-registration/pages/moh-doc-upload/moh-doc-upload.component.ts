import { Component, OnInit } from '@angular/core';
import { AbstractForm } from 'moh-common-lib/models';
import { Router } from '@angular/router';
import { PrimeConstants } from '../../../../models/prime-constants';

@Component({
  selector: 'app-moh-doc-upload',
  templateUrl: './moh-doc-upload.component.html',
  styleUrls: ['./moh-doc-upload.component.scss']
})
export class MohDocUploadComponent extends AbstractForm implements OnInit {

  constructor(protected router: Router) {
    super(router);
  }

  ngOnInit() {
  }

  continue() {
    console.log(`form valid? ${this.form.valid}`, this.form);

    if (this.form.valid) {
      // Navigate to next page
      this.navigate( PrimeConstants.MOH_REGISTRATION + '/account' );
    } else {
      // Errors exist on form
      // Mark all fields as touched to display errors
      // TODO - Make this a method on AbstractForm
      Object.keys(this.form.form.controls).forEach(x => {
        this.form.form.get(x).markAsTouched();
      });
    }
  }
}
