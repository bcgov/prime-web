import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  Optional,
  Host,
  forwardRef
} from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { of, Observable, Subscription } from 'rxjs';
import { Base } from 'moh-common-lib/models';
import { PrimePerson } from '../../../models/prime-person.model';
import {
  CountryList,
  ProvinceList,
  CANADA,
  BRITISH_COLUMBIA
} from 'moh-common-lib';

@Component({
  selector: 'lib-prime-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  /* Re-use the same ngForm that it's parent is using. The component will show
   * up in its parents `this.form`, and will auto-update `this.form.valid`
   */
  viewProviders: [
    { provide: ControlContainer, useExisting: forwardRef(() => NgForm) }
  ]
})
export class ProfileComponent extends Base implements OnDestroy {
  @Input() data: PrimePerson = new PrimePerson();
  @Input() countryList: CountryList[] = [];
  @Input() provinceList: ProvinceList[] = [];
  @Input() editIdentityInfo: boolean = true;
  @Input() pageTitle: string = 'Profile Information';
  @Output() dataChange: EventEmitter<PrimePerson> = new EventEmitter<
    PrimePerson
  >();

  public defaultCountry = CANADA;
  public defaultProvince = BRITISH_COLUMBIA;

  /**
   * Date of birth error messages
   */
  public dateLabel = 'Birthdate';

  subscriptions: Subscription[];
  newObs = new Observable();

  constructor(@Optional() @Host() public parent: ControlContainer) {
    super();

    this.newObs = of(this.data);
    this.subscriptions = [this.newObs.subscribe(obs => console.log(obs))];

    if (parent) {
      this.subscriptions.push(
        parent.valueChanges.subscribe(obs => {
          console.log('(profile) parent change values: ', obs);
          this.dataChange.emit(obs);
        })
      );
      this.subscriptions.push(
        parent.statusChanges.subscribe(x => {
          console.log('(profile) parent change status: ', parent.status);
        })
      );
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(itm => itm.unsubscribe());
  }

  toggleCheckBox() {
    this.data.identityIsMailingAddress = !this.data.identityIsMailingAddress;
  }

  onBlur(event) {
    if (
      event.srcElement.id === this._preferredFirstNameCtrl ||
      event.srcElement.id === this._preferredLastNameCtrl ||
      event.srcElement.id === this._firstNameCtrl
    ) {
      const hasPreferFirstName = !!this.form.controls[
        this._preferredFirstNameCtrl
      ].value;
      const hasPreferLastName = !!this.form.controls[
        this._preferredLastNameCtrl
      ].value;
      const hasFirstName = !!this.form.controls[this._firstNameCtrl].value;

      // If either preferred name is entered and user has firstname, both must be entered.
      if (hasFirstName) {
        if (hasPreferFirstName && !hasPreferLastName) {
          this.setCntrolError(this._preferredLastNameCtrl, this._requiredError);
        } else if (!hasPreferFirstName && hasPreferLastName) {
          this.setCntrolError(
            this._preferredFirstNameCtrl,
            this._requiredError
          );
        } else {
          this.setCntrolError(this._preferredLastNameCtrl, null);
          this.setCntrolError(this._preferredFirstNameCtrl, null);
        }
      }
    }
  }

  private setCntrolError(ctrlName: string, error: any) {
    this.form.controls[ctrlName].setErrors(error);
    this.form.controls[ctrlName].markAsTouched();
  }
}
