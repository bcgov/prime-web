import { Component, OnInit, forwardRef } from '@angular/core';
import { ProfileComponent } from '../../../../../../prime-registration/src/app/modules/registration/components/profile/profile.component';
import { Registrant } from '../../../../../../prime-registration/src/app/modules/registration/models/registrant.model';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'enroll-enrollment-profile',
  templateUrl: './enrollment-profile.component.html',
  styleUrls: ['./enrollment-profile.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: forwardRef(() => NgForm) }
  ]
})
export class EnrollmentProfileComponent extends ProfileComponent<Registrant>
  implements OnInit {
  constructor(ctrlContainer: ControlContainer) {
    super(ctrlContainer);
  }

  ngOnInit() {}
}
