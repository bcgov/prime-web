import {
  Component,
  OnInit,
  Input,
  forwardRef,
  Output,
  EventEmitter
} from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { RegistrationDataService } from '@prime-registration/services/registration-data.service';
import { Registrant } from '../../models/registrant.model';
import { CountryList, ProvinceList } from '../address/address.component';
import { PrimeConstants } from '@prime-core/models/prime-constants';
import { BsModalService } from 'ngx-bootstrap';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { RegCacheService } from '@prime-registration/services/reg-cache.service';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'prime-appl-profile',
  templateUrl: './appl-profile.component.html',
  styleUrls: ['./appl-profile.component.scss'],
  /* Re-use the same ngForm that it's parent is using. The component will show
   * up in its parents `this.form`, and will auto-update `this.form.valid`
   */
  viewProviders: [
    { provide: ControlContainer, useExisting: forwardRef(() => NgForm) }
  ]
})
export class ApplProfileComponent extends ProfileComponent<Registrant>
  implements OnInit {
  @Input() editIdentityInfo: boolean = true;

  public defaultCountry = PrimeConstants.CANADA;
  public defaultProvince = PrimeConstants.BRITISH_COLUMBIA;

  /**
   * Date of birth error messages
   */
  public dateLabel = 'Birthdate';

  form: NgForm;

  constructor(
    private primeDataService: RegistrationDataService,
    private regCache: RegCacheService,
    public cntrlContainer: ControlContainer
  ) {
    super(cntrlContainer);
  }

  ngOnInit() {
    this.form = this.cntrlContainer as NgForm;

    // Listen for submission of form
    this.form.ngSubmit.subscribe(val => this.validateInfo(val));
    super.ngOnInit();
  }

  get registrant(): Registrant {
    return this.primeDataService.registrant;
  }

  toggleCheckBox() {
    this.registrant.identityIsMailingAddress = !this.registrant
      .identityIsMailingAddress;
  }

}
