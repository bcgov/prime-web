import {Component, OnInit, TemplateRef} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'prime-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  /**
   *
   */
  continueStandardReg() {

    // Navigate next page
    this.router.navigate( [this.getUrlPrefix( this.router.url ) + '/' + 'profile'] );
  }

  /**
   *
   */
  continueIdProofing() {
    // Navigate next page
    this.router.navigate( [this.getUrlPrefix( this.router.url ) + '/' + 'id-proofing'] );
  }

  /**
   *
   * @param {string} url
   * @returns {string}
   */
  private getUrlPrefix( url: string ): string {
    // Get URL prefix
    const idxEndPrefix = this.router.url.lastIndexOf( '/' );
    return (idxEndPrefix === 0 ) ? this.router.url : this.router.url.slice( 0 , idxEndPrefix );
  }
}
