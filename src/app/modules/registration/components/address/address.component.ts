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
}
