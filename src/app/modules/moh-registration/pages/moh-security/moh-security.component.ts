import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moh-security',
  templateUrl: './moh-security.component.html',
  styleUrls: ['./moh-security.component.scss']
})
export class MohSecurityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  continue() {
    console.log( 'button pushed' );
  }
}
