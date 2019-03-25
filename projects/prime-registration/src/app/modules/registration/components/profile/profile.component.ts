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
import { CacheService } from '../../../../services/cache.service';
import { CountryList, ProvinceList } from '../address/address.component';
// import { PrimeConstants } from '@prime-core/models/prime-constants';
import { BsModalService } from 'ngx-bootstrap';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { of, from, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'prime-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  /* Re-use the same ngForm that it's parent is using. The component will show
   * up in its parents `this.form`, and will auto-update `this.form.valid`
   */
  viewProviders: [
    { provide: ControlContainer, useExisting: forwardRef(() => NgForm) }
  ]
})
export class ProfileComponent<T> implements OnInit, OnDestroy {
  @Input() data: T;
  @Input() countries;
  @Input() provinces;
  @Input()
  editIdentityInfo: boolean = true;
  @Output() dataValid: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() changes: EventEmitter<T> = new EventEmitter<T>();

  public defaultCountry = 'CAN';
  public defaultProvince = 'BC';

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
    newObs.subscribe(obs => console.log(obs));
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
  get countryList(): CountryList[] {
    console.log(this);
    return this.countries;
  }

  get provinceList(): ProvinceList[] {
    return this.provinces;
  }
  get test() {
    console.log(this.registrant);
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
