import { Component, OnInit, Input, forwardRef, Output, EventEmitter, TemplateRef } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Registrant } from '../../models/registrant.model';
import { CacheService } from '../../../../services/cache.service';
import { CountryList, ProvinceList } from '../address/address.component';
import { PrimeConstants } from '../../../../models/prime-constants';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';


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

  public modalRef: BsModalRef;

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

  openModal( template: TemplateRef<any> ) {
    this.modalRef = this.modalService.show( template, {class: 'modal-sm'} );
  }

  hasNoLegalFirstName() {
    this.firstNameRequired = false;
    this.modalRef.hide();
  }

  hasLegalFirstName() {
    this.firstNameRequired = true;
    this.modalRef.hide();
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

  /**
   *  TODO: validations pertaining to profile
   *        a) firstname check if missed ( modal dialog requried)
   *
   */

    this.dataValid.emit( this.form.valid );
  }
}
