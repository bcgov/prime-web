import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Registrant } from '../../models/registrant.model';
import { CacheService } from '../../../../services/cache.service';
import { CountryList, ProvinceList } from '../address/address.component';
import { PrimeConstants } from '../../models/prime-constants';


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

  public defaultCountry = PrimeConstants.CANADA;
  public defaultProvince = PrimeConstants.BRITISH_COLUMBIA;

  /**
   * Date of birth error messages
   */
  public dateLabel = 'Birthdate';
  public dateErrorMsg = {
    required: this.dateLabel + ' is required.',
    dayOutOfRange: 'Invalid ' + this.dateLabel + '.',
    yearDistantPast: 'Invalid ' + this.dateLabel + '.',
    yearDistantFuture: 'Invalid ' + this.dateLabel + '.',
    noFutureDatesAllowed: 'Invalid ' + this.dateLabel + '.',
    invalidValue: 'Invalid ' + this.dateLabel + '.'
  };

  constructor( private primeDataService: PrimeDataService,
               private cache: CacheService  ) {
  }

  ngOnInit() {
  }

  get registrant(): Registrant {
    return this.primeDataService.registrant;
  }

  toggleCheckBox() {
    this.registrant.identityIsMailingAddress = !this.registrant.identityIsMailingAddress;
  }

  get countryList(): CountryList[] {
    return this.cache.countryList;
  }

  get provinceList(): ProvinceList[] {
    return this.cache.provinceList;
  }
}
