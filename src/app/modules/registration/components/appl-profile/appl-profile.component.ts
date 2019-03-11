import { Component, OnInit, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Registrant } from '../../models/registrant.model';
import { CacheService } from '../../../../services/cache.service';
import { CountryList, ProvinceList } from '../address/address.component';
import { PrimeConstants } from '../../../../models/prime-constants';
import { BsModalService } from 'ngx-bootstrap';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';


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
  public preferredIsRequired: boolean = false;

  /**
   * Date of birth error messages
   */
  public dateLabel = 'Birthdate';

  constructor( private primeDataService: PrimeDataService,
               private cache: CacheService,
               private form: NgForm,
               private modalService: BsModalService ) {
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

  // Cache items
  get countryList(): CountryList[] {
    return this.cache.countryList;
  }

  get provinceList(): ProvinceList[] {
    return this.cache.provinceList;
  }

  private validateInfo( val: any ) {

    // If either of these fields contain data, then required.
    this.preferredIsRequired = !!((this.registrant.preferredFirstName
      || this.registrant.preferredLastName) && this.registrant.firstName ) ||
      !!(this.registrant.preferredFirstName);

    // Store list of names to be used by password check method
    this.primeDataService.userNameList = Object.keys(this.form.value).map( x => {
      if ( x.match( 'name' ) ) {
        return this.form.form.get( x ).value;
      }
    }).filter( item => item );

    if ( !this.registrant.firstName ) {
      this.confirm( 'Did you forget your legal first name?' );
    }

    this.dataValid.emit( this.form.valid );
  }

  confirm( message: string ) {
    const modal = this.modalService.show(
              ConfirmModalComponent,
              {
                initialState: {message: message},
                class: 'modal-sm'
              } );

    modal.content.result.subscribe( result => this.firstNameRequired = result );
  }

}
