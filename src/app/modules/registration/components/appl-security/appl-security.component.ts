import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Registrant } from '../../models/registrant.model';
import { CacheService } from '../../../../services/cache.service';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'prime-appl-security',
  templateUrl: './appl-security.component.html',
  styleUrls: ['./appl-security.component.scss']
})
export class ApplSecurityComponent implements OnInit {

  phoneNumber = "1-555-555-5555"

  constructor( private primeDataService: PrimeDataService,
               private cache: CacheService  ) {

  }

  ngOnInit() {
  }

  get registrant(): Registrant {
    return this.primeDataService.registrant;
  }

}
