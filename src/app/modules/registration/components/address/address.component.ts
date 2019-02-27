import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { GeocoderService, Base, Address } from 'moh-common-lib';
import { ControlContainer, NgForm } from '@angular/forms';

/** Interface for countries */
export interface CountryList {
  countryCode: string;
  description: string;
}

export interface ProvinceList {
  country: string;
  provCode: string;
  description: string;
}

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
  @Input() isRequired: boolean = false;
  @Input() address: Address;
  @Input() countryList: CountryList[];
  @Input() defaultCountry: string;
  @Input() provinceList: ProvinceList[];
  @Input() defaultProvince: string;

  @Output() addressChange: EventEmitter<Address> = new EventEmitter<Address>();

  constructor( private geocoderService: GeocoderService ) {
    super();
   }

  ngOnInit() {
    if ( this.address ) {

      if ( !this.address.country ) {
        /**
         * Set country to default
         * Search uses country code or country name to find item is list.
         */
        const countryObj = !this.countryList ? null : this.countryList.find(
          val => val.countryCode === this.defaultCountry || val.description === this.defaultCountry
          );
        this.address.country = (countryObj ? countryObj.countryCode : null );
      }

      if ( !this.address.province ) {
        this.address.province = this.setDefaultProvinceAsOption( this.address.country );
      }
    }
  }

  /**
   * Passes the value entered back to the calling component
   * @param value value the was entered by
   */
  setName( value: Address ) {
    this.addressChange.emit( value );
  }

  /**
   * Set country province blank
   * @param value
   */
  setCountry( value: string ) {
    this.address.province = this.setDefaultProvinceAsOption( value );
    this.address.country = value;
  }

  isCanada(): boolean {
    return (this.address && 'CAN' === this.address.country);
  }

  isCanadaUSA(): boolean {
    return (this.address && 'USA' === this.address.country) || this.isCanada();
  }

  /** Constains provinces and states */
  get provList(): ProvinceList[] {
    return this.provinceList.map( prov => {
      if ( prov.country === this.address.country ) {
        return prov;
      }
    }).filter( x => x );
  }

 /**
   * Upper cases letters in string
   * @param {string} text
   * @returns {string}
   */
  upperCasePipe( text: string ) {
    return text.toUpperCase();
  }

  /**
   * Sets the default province option value
   */
  private setDefaultProvinceAsOption( country: string ): string {
    const provObj = !this.provinceList ? null : this.provinceList.find(
      val => (val.provCode === this.defaultProvince ||
             val.description === this.defaultProvince) &&
             val.country === country
    );
    return (provObj ? provObj.provCode : null );
  }


  // TODO: Add geocoder to this module for BC addresses only
}
