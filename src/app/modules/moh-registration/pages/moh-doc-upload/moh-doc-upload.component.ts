import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moh-doc-upload',
  templateUrl: './moh-doc-upload.component.html',
  styleUrls: ['./moh-doc-upload.component.scss']
})
export class MohDocUploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  continue() {
    console.log( 'button pushed' );
  }
}
