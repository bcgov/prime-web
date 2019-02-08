import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moh-profile',
  templateUrl: './moh-profile.component.html',
  styleUrls: ['./moh-profile.component.scss']
})
export class MohProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  continue() {
    console.log( 'button pushed' );
  }
}
