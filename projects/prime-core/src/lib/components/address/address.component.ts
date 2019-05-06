import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  forwardRef,
  OnChanges
} from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Base, Address } from 'moh-common-lib/models';
import { GeoAddressResult } from 'moh-common-lib/services/geocoder.service';
import { CountryList , ProvinceList, CANADA, UNITED_STATES, BRITISH_COLUMBIA  } from 'moh-common-lib';


@Component({
  selector: 'lib-prime-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: forwardRef(() => NgForm) }
  ],
})
export class AddressComponent extends Base implements OnChanges {

  @Input() disabled: boolean = false;
  @Input() isRequired: boolean = false;
  @Input() address: Address = new Address();
  @Input() countryList: CountryList[];
  @Input() defaultCountry: string;
  @Input() provinceList: ProvinceList[];
  @Input() defaultProvince: string;

  @Output() addressChange: EventEmitter<Address> = new EventEmitter<Address>();

  public provList: ProvinceList[];

  constructor() {
    super();
  }

  /**
   * Set country province blank
   * @param value
   */
  setCountry(value: string) {
    this.address.province = this.setDefaultProvinceAsOption(value);
    this.address.country = value;
    this.updateProvList();
    this.addressChange.emit(this.address);
  }

  setProvince(value: string) {
    this.address.province = value;
    this.addressChange.emit(this.address);
  }

  setStreetAddress(value: string) {
    this.address.street = value;
    this.addressChange.emit(this.address);
  }

  setCity(value: string) {
    this.address.city = value;
    this.addressChange.emit(this.address);
  }

  /**
   * Sets string after converted upper case
   * @param text
   */
  setPostalCode(value: string) {
    this.address.postal = value;
    this.addressChange.emit(this.address);
  }

  isCanada(): boolean {
    return this.address && CANADA === this.address.country;
  }

  isCanadaUSA(): boolean {
    return (this.address && UNITED_STATES === this.address.country) || this.isCanada();
  }

  ngOnChanges(changes) {
    if (changes['countryList'] && changes['countryList'].currentValue) {

      if ( !this.address.country ) {
        // Set defaults
        this.address.country = this.setDefaultCountryAsOption();

        // Set defaults
        this.address.province = this.setDefaultProvinceAsOption( this.address.country );
      }
      this.updateProvList();
    }
    if (changes['provinceList'] && changes['provinceList'].currentValue) {
      if ( !this.address.province ) {
        // Set defaults
        this.address.province = this.setDefaultProvinceAsOption( this.address.country );
      }
      this.updateProvList();
    }
  }

  /**
   * Updates the provList variable. Values must be stored in a variable and not
   * accessed via function invocation for performance.
   */
  private updateProvList() {
    if (!this.provinceList) { return; } // When data is async and hasn't loaded
    this.provList = this.provinceList
      .map(prov => {
        if (prov.country === this.address.country) {
          return prov;
        }
      })
      .filter(x => x);
  }

  /**
   * Sets the default province option value
   */
  private setDefaultProvinceAsOption( country: string ): string {
    const provObj = !this.provinceList ? null : this.provinceList.find(
      val => (val.provinceCode === this.defaultProvince ||
             val.description === this.defaultProvince) &&
             val.country === country
    );
    return (provObj ? provObj.provinceCode : null );
  }

  /**
   * Set country to default
   * Search uses country code or country name to find item is list.
   */
  private setDefaultCountryAsOption(): string {
    const countryObj = !this.countryList
    ? null
    : this.countryList.find(
        val =>
          val.countryCode === this.defaultCountry ||
          val.description === this.defaultCountry
      );
    return countryObj ? countryObj.countryCode : null;
  }

  // GeoCoder

  /**
   * GeoCoder only is applicable when address is BC, Canada.
   */
  useGeoCoder(): boolean {
    return this.isCanada() && BRITISH_COLUMBIA === this.address.province;
  }

  // Only BC addresses therefore no need to copy province into structure.
  setAddress(data: GeoAddressResult) {
    console.log('setAddress: ', data );
    this.address.street = data.street;
    this.address.city = data.city;
    this.address.province = data.province;
    this.address.country = data.country;
    this.addressChange.emit(this.address);
  }
}
