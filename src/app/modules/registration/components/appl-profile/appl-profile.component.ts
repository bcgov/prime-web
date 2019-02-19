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

  /** Start - Methods to set data entered by user */
  setFirstName( name: string ) {
      this.registrant.firstName = name;
  }

  setMiddleName( name: string ) {
    this.registrant.middleName = name;
  }

  setLastName( name: string ) {
    this.registrant.lastName = name;
  }

  setPreferredFirstName( name: string ) {
    this.registrant.preferredFirstName = name;
  }

  setPreferredMiddleName( name: string ) {
    this.registrant.preferredMiddleName = name;
  }

  setPreferredLastName( name: string ) {
    this.registrant.preferedLastName = name;
  }
  /** End - Methods to set data entered by user */
}
