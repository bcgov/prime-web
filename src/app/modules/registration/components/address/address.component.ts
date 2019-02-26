import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { GeocoderService, Base, Address } from 'moh-common-lib';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'prime-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  /* Re-use the same ngForm that it's parent is using. The component will show
   * up in its parents `this.form`, and will auto-update `this.form.valid`
   */
  viewProviders: [ { provide: ControlContainer, useExisting: forwardRef(() => NgForm ) } ]
})
export class AddressComponent extends Base implements OnInit {

  @Input() disabled: boolean = false;
  @Input() address: Address;

  @Output() addressChange: EventEmitter<Address> = new EventEmitter<Address>();

  constructor( private geocoderService: GeocoderService ) {
    super();
   }

  ngOnInit() {
  }

  /**
   * Passes the value entered back to the calling component
   * @param value value the was entered by
   */
  setName( value: Address ) {
    this.addressChange.emit( value );
  }

  // TODO: Add geocoder to this module for BC addresses only
}
