import {
  Component,
  OnInit,
  Input,
  forwardRef,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
// import { RegistrationDataService } from '@prime-registration/services/registration-data.service';
// import { CacheService } from '../../../../services/cache.service';
// import { CountryList, ProvinceList } from '../address/address.component';
// import { PrimeConstants } from 'prime-core';
import { BsModalService } from 'ngx-bootstrap';
// import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { of, from, Observable, Subscription } from 'rxjs';
import { BRITISH_COLUMBIA, CANADA } from 'moh-common-lib';

@Component({
  selector: 'enroll-profile',
  templateUrl: './shared-profile.component.html',
  styleUrls: ['./shared-profile.component.scss'],
  /* Re-use the same ngForm that it's parent is using. The component will show
   * up in its parents `this.form`, and will auto-update `this.form.valid`
   */
  viewProviders: [
    { provide: ControlContainer, useExisting: forwardRef(() => NgForm) }
  ]
})
export class SharedProfileComponent<T> implements OnInit, OnDestroy {
  @Input() data: T;
  @Input() countries;
  @Input() provinces;
  @Input()
  editIdentityInfo: boolean = true;
  @Output() dataValid: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() changes: EventEmitter<T> = new EventEmitter<T>();

  public defaultCountry = CANADA;
  public defaultProvince = BRITISH_COLUMBIA;

  public firstNameRequired: boolean = false;
  public preferredIsRequired: boolean = false;

  /**
   * Date of birth error messages
   */
  public dateLabel = 'Birthdate';

  form: NgForm;
  userNameList: string[] = [];
  subscriptions: Subscription[];

  emitChanges(itm: T) {
    this.changes.emit(itm);
  }

  constructor(public cntrlContainer: ControlContainer) {}

  ngOnInit() {
    this.form = this.cntrlContainer as NgForm;

    // Listen for submission of form
    this.form.ngSubmit.subscribe(val => this.validateInfo(val));
    let newObs = new Observable();
    newObs = of(this.registrant);
    this.subscriptions = [
      this.cntrlContainer.valueChanges.subscribe(obs => this.emitChanges(obs))
    ];
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.forEach(itm => itm.unsubscribe());
    }
  }

  get registrant(): any {
    return this.data;
  }

  toggleCheckBox() {
    this.registrant.identityIsMailingAddress = !this.registrant
      .identityIsMailingAddress;
  }

  // Cache items
  get countryList() {
    return this.countries;
  }

  get provinceList() {
    return this.provinces;
  }
  get test() {
    return this.registrant;
  }

  public validateInfo(val: any) {
    // If either of these fields contain data, then required.
    this.preferredIsRequired =
      !!(
        (this.registrant.preferredFirstName ||
          this.registrant.preferredLastName) &&
        this.registrant.firstName
      ) || !!this.registrant.preferredFirstName;

    // Store list of names to be used by password check method
    this.userNameList = Object.keys(this.form.value)
      .map(x => {
        if (x.includes('name')) {
          return this.form.form.get(x).value;
        }
      })
      .filter(item => item);

    // Display confirmation box only if the legal name is editable
    if (!this.registrant.firstName && this.editIdentityInfo) {
      this.confirm('Did you forget your legal first name?');
    }

    this.dataValid.emit(this.form.valid);
  }
  // TODO: re-work this modal service
  confirm(message: string) {
    // const modal = this.modalService.show(ConfirmModalComponent, {
    //   initialState: { message: message },
    //   class: 'modal-sm',
    //   ignoreBackdropClick: true,
    //   keyboard: false
    // });
    // modal.content.result.subscribe(result => (this.firstNameRequired = result));
  }
}
