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
import { CountryList, ProvinceList } from '@prime-core/prime-shared/components/address/address.component';
import { of, Observable, Subscription } from 'rxjs';
import { PrimeConstants } from '@prime-core/models/prime-constants';
import { Base } from 'moh-common-lib/models';
import { PrimePerson } from '@prime-core/models/prime-person.model';

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
export class ProfileComponent extends Base implements OnInit, OnDestroy {
  @Input() data: PrimePerson;
  @Input() countryList: CountryList[] = [];
  @Input() provinceList: ProvinceList[] = [];
  @Input() editIdentityInfo: boolean = true;
  @Output() changes: EventEmitter<PrimePerson> = new EventEmitter<PrimePerson>();

  public defaultCountry = PrimeConstants.CANADA;
  public defaultProvince = PrimeConstants.BRITISH_COLUMBIA;

  /**
   * Date of birth error messages
   */
  public dateLabel = 'Birthdate';

  form: NgForm;
  subscriptions: Subscription[];

  constructor( private cntrlContainer: ControlContainer) {
    super();
    this.form = this.cntrlContainer as NgForm;
  }

  emitChanges( itm: PrimePerson ) {
    this.changes.emit( itm );
  }

  ngOnInit() {

    // Listen for submission of form
    let newObs = new Observable();
    newObs = of(this.data);
    newObs.subscribe(obs => console.log(obs));
    this.subscriptions = [
      this.cntrlContainer.valueChanges.subscribe(obs => this.emitChanges(obs))
    ];
  }

  ngOnDestroy() {
 //   this.subscriptions.forEach(itm => itm.unsubscribe());
  }

  toggleCheckBox() {
    this.data.identityIsMailingAddress = !this.data.identityIsMailingAddress;
  }
}
