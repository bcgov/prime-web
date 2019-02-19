import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GeocoderService } from '../../../../shared-core/services/geocoder.service';
import { Base } from '../../../../shared-core/models/base';
import { Address } from '../../../../shared-core/models/address.model';

@Component({
  selector: 'prime-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent extends Base implements OnInit {

  @Input() disabled: boolean = false;
  @Input() address: Address;

  @Output() onDateChange: EventEmitter<Address> = new EventEmitter<Address>();

  constructor( private geocoderService: GeocoderService ) {
    super();
   }

  ngOnInit() {
  }

  /** Start - Methods to set data entered by user */
  setCounty( country: string ) {
    if ( this.address ) {
      this.address.country = country;
      this.onDateChange.emit( this.address );
    }
  }

  setProvince( province: string ) {
    if ( this.address ) {
      this.address.province = province;
      this.onDateChange.emit( this.address );
    }
  }

  setStreet( street: string ) {
    if ( this.address ) {
      this.address.street = street;
      this.onDateChange.emit( this.address );
    }
  }

  setCity( city: string ) {
    if ( this.address ) {
      this.address.city = city;
      this.onDateChange.emit( this.address );
    }
  }

  setPostalCode( postalCode: string ) {
    if ( this.address ) {
      this.address.postal = postalCode;
      this.onDateChange.emit( this.address );
    }
  }
  /** End - Methods to set data entered by user */
}
