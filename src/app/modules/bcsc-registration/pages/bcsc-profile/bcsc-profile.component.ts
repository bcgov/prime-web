import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bcsc-profile',
  templateUrl: './bcsc-profile.component.html',
  styleUrls: ['./bcsc-profile.component.scss']
})
export class BcscProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  continue() {
    console.log( 'button pushed' );
  }

}
