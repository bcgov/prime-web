import { Component, OnInit } from '@angular/core';

// Development purpose
import { DummyDataService } from '../../../../services/dummy-data.service';
import { PrimeDataService } from '../../../../services/prime-data.service';

@Component({
  selector: 'app-bcsc-profile',
  templateUrl: './bcsc-profile.component.html',
  styleUrls: ['./bcsc-profile.component.scss']
})
export class BcscProfileComponent implements OnInit {

  constructor( private dummyDataService: DummyDataService,
               private primeDataServie: PrimeDataService ) {
    // Development purposes
    primeDataServie.registrant.copy( this.dummyDataService.getBcscRegistrant() );
  }

  ngOnInit() {
  }

  continue() {
    console.log( 'button pushed' );
  }

}
