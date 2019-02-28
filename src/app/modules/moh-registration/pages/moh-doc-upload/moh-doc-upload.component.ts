import { Component, OnInit } from '@angular/core';
import { AbstractForm } from 'moh-common-lib/models';
import { Router } from '@angular/router';

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
  }
}
