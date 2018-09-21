import {Component, OnInit, TemplateRef} from '@angular/core';
import {Router} from '@angular/router';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Person } from '../../../../models/person.model';
import { Address } from '../../../../models/addresses.model';

@Component({
  selector: 'prime-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {

  constructor( private router: Router, private primeDataService: PrimeDataService) { }

  ngOnInit() {
  }

  /**
   *
   */
  continueStandardReg() {
    // Reset the user to a non BCSC user
    this.primeDataService.user = new Person();
    this.primeDataService.user.address = new Address();
    this.primeDataService.user.pairingCode = undefined;
    // NOTE - This new user is NOT in the user list for provisoiner as it's not in dataService.people

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

  bcscLogin() {
    // Navigate to the bcsc registration
    this.router.navigate( [this.getUrlPrefix( this.router.url ) + '/' + 'bcsc-login'] );
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
