import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { Address } from '../../../../shared-core/models/address.model';
import { ControlContainer, NgForm } from '@angular/forms';
import { SimpleDate } from '../../../../shared-core/interfaces/simple-date.interface';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Registrant } from '../../../../models/registrant.model';

@Component({
  selector: 'prime-appl-profile',
  templateUrl: './appl-profile.component.html',
  styleUrls: ['./appl-profile.component.scss'],
     /* Re-use the same ngForm that it's parent is using. The component will show
   * up in its parents `this.form`, and will auto-update `this.form.valid`
   */
  viewProviders: [ { provide: ControlContainer,  useExisting: forwardRef(() => NgForm ) } ]
})
export class ApplProfileComponent implements OnInit {

  @Input() editIdentityInfo: boolean = true;

  public address: Address;
  public mailAddress: Address;


  constructor( private primeDataService: PrimeDataService ) {
  }

  ngOnInit() {
  }

  get registrant(): Registrant {
    return this.primeDataService.registrant;
  }
}
