import { Component, OnInit, Input } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Registrant } from '../../models/registrant.model';

@Component({
  selector: 'prime-appl-account',
  templateUrl: './appl-account.component.html',
  styleUrls: ['./appl-account.component.scss']
})
export class ApplAccountComponent implements OnInit {

  @Input() mohCredientials: boolean = true;

  /** TODO: Figure out how to set this correctly */
  public passwordCriteria: string =
  '^((?=.*[^a-zA-Z\s])(?=.*[a-z])(?=.*[A-Z])|(?=.*[^a-zA-Z0-9\s])(?=.*\d)(?=.*[a-zA-Z])).*$';

  constructor( private primeDataService: PrimeDataService ) { }

  ngOnInit() {
  }

  get registrant(): Registrant {
    return this.primeDataService.registrant;
  }
}
