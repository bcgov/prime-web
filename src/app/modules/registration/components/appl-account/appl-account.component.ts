import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Registrant } from '../../models/registrant.model';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'prime-appl-account',
  templateUrl: './appl-account.component.html',
  styleUrls: ['./appl-account.component.scss'],
  /* Re-use the same ngForm that it's parent is using. The component will show
   * up in its parents `this.form`, and will auto-update `this.form.valid`
   */
  viewProviders: [ { provide: ControlContainer, useExisting: forwardRef(() => NgForm ) } ]
})
export class ApplAccountComponent implements OnInit {

  @Input() mohCredientials: boolean = true;

  /** TODO: Figure out how to set this correctly to validate NFR in section 3.3.10 of SRQ */
  public passwordCriteria: string =
  '^((?=.*[^a-zA-Z\s])(?=.*[a-z])(?=.*[A-Z])|(?=.*[^a-zA-Z0-9\s])(?=.*\d)(?=.*[a-zA-Z])).*$';

  constructor( private primeDataService: PrimeDataService ) { }

  ngOnInit() {
  }

  get registrant(): Registrant {
    return this.primeDataService.registrant;
  }
}
