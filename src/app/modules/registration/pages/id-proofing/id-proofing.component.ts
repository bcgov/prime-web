import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PrimeDataService} from "../../../../services/prime-data.service";
import {Person} from "../../../../models/person.model";

@Component({
  selector: 'prime-dashboard',
  templateUrl: './id-proofing.component.html',
  styleUrls: ['./id-proofing.component.scss']
})
export class IdProofingComponent implements OnInit {

  constructor( private router: Router, private primeDataService: PrimeDataService) { }

  ngOnInit() {
  }

  get registrant(): Person {
    return this.primeDataService.user;
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

  get usedBCSC(): boolean {
    return !!this.registrant.pairingCode;
  }

}
