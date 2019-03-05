import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Registrant } from '../../models/registrant.model';
import { CacheService } from '../../../../services/cache.service';
import { ControlContainer, NgForm } from '@angular/forms';
import { PrimeConstants } from '../../../../models/prime-constants';

@Component({
  selector: 'prime-appl-security',
  templateUrl: './appl-security.component.html',
  styleUrls: ['./appl-security.component.scss']
})
export class ApplSecurityComponent implements OnInit {

  public useMobile;

  constructor( private primeDataService: PrimeDataService,
               private cache: CacheService  ) {

  }

  ngOnInit() {
  }

  get registrant(): Registrant {
    return this.primeDataService.registrant;
  }

  isCanada(): boolean {
    if ( !this.registrant.address ) {
      return true; // Default to Canada
    } 
    else if ( this.registrant.identityIsMailingAddress ) {
      return (this.registrant.address.country === PrimeConstants.CANADA);
    }
    return (this.registrant.mailAddress.country === PrimeConstants.CANADA);
  }
}
