import { Component, OnInit, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Registrant } from '../../models/registrant.model';
import { CacheService } from '../../../../services/cache.service';
import { CountryList, ProvinceList } from '../address/address.component';
import { PrimeConstants } from '../../../../models/prime-constants';


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
  @Output() dataValid: EventEmitter<boolean> = new EventEmitter<boolean>();

  public defaultCountry = PrimeConstants.CANADA;
  public defaultProvince = PrimeConstants.BRITISH_COLUMBIA;

  public firstNameRequired: boolean = false;

  /**
   * Date of birth error messages
   */
  public dateLabel = 'Birthdate';

  constructor( private primeDataService: PrimeDataService,
               private cache: CacheService,
               private form: NgForm  ) {
  }

  ngOnInit() {
    // Listen for submission of form
    this.form.ngSubmit.subscribe( val => this.validateInfo( val ) );
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

  private validateInfo( val: any ) {
    let valid = false;
    console.log( ' Validate Info - registrant: ', this.registrant );

    if ( this.form.valid ) {

      valid = true;
    }


    /**
     *  TODO: validations pertaining to profile
     *        a) firstname check if missed
     *        b) If optional first name must have legal name
     *
     */

    this.dataValid.emit( valid );
  }
}
