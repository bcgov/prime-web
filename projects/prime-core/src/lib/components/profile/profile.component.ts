import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { of, Observable, Subscription } from 'rxjs';
import { Base } from 'moh-common-lib/models';
import { PrimePerson } from '../../../models/prime-person.model';
import { PrimeConstants } from '../../../models/prime-constants';
import { CountryList } from 'moh-common-lib/lib/components/country/country.component';
import { ProvinceList } from 'moh-common-lib/lib/components/province/province.component';

@Component({
  selector: 'lib-prime-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  /* Re-use the same ngForm that it's parent is using. The component will show
   * up in its parents `this.form`, and will auto-update `this.form.valid`
   */
  viewProviders: [
    { provide: ControlContainer, useExisting: NgForm }
  ]
})
export class ProfileComponent extends Base implements OnInit, OnDestroy {
  @Input() data: PrimePerson = new PrimePerson();
  @Input() countryList: CountryList[] = [];
  @Input() provinceList: ProvinceList[] = [];
  @Input() editIdentityInfo: boolean = true;
  @Input() pageTitle: string = 'Profile Information';
  @Output() dataChange: EventEmitter<PrimePerson> = new EventEmitter<
    PrimePerson
  >();

  public defaultCountry = PrimeConstants.CANADA;
  public defaultProvince = PrimeConstants.BRITISH_COLUMBIA;

  /**
   * Date of birth error messages
   */
  public dateLabel = 'Birthdate';

  subscriptions: Subscription[];

  constructor(private cntrlContainer: ControlContainer) {
    super();
  }

  emitChanges(itm: PrimePerson) {
    this.dataChange.emit(itm);
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
    this.subscriptions.forEach(itm => itm.unsubscribe());
  }

  toggleCheckBox() {
    this.data.identityIsMailingAddress = !this.data.identityIsMailingAddress;
  }
}
