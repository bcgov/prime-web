import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'prime-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  /**
   *
   */
  continueStandardReg() {

    // Get URL prefix
    const idxEndPrefix = this.router.url.lastIndexOf( '/' );
    const prefix = (idxEndPrefix === 0 ) ? this.router.url : this.router.url.slice( 0 , idxEndPrefix );

    // Navigate next page
    this.router.navigate( [prefix + '/' + 'profile'] ) ;
  }

}
