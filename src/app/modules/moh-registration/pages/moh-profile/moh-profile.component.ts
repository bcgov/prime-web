import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'prime-moh-profile',
  templateUrl: './moh-profile.component.html',
  styleUrls: ['./moh-profile.component.scss']
})
export class MohProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log( 'profile' );
  }

  continue() {
    console.log( 'button pushed' );
  }
}
