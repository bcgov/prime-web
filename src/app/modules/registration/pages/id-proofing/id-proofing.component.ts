import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'prime-dashboard',
  templateUrl: './id-proofing.component.html',
  styleUrls: ['./id-proofing.component.scss']
})
export class IdProofingComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  /**
   * Returns the URL with appropriate prefix
   * @param {string} route
   * @returns {string}
   */
  getRoute( route: string ): string {
    const idx = this.router.url.lastIndexOf( '/' );
    const prefix = this.router.url.slice(0 , idx + 1 );
    return prefix + route;
  }

  startVideoChat() {

  }

}
