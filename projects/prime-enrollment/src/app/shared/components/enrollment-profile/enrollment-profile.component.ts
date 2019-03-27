import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { SharedProfileComponent } from '../shared-profile/shared-profile.component';
import { Registrant } from '../../../../../../prime-registration/src/app/modules/registration/models/registrant.model';

@Component({
  selector: 'enroll-enrollment-profile',
  templateUrl: './enrollment-profile.component.html',
  styleUrls: ['./enrollment-profile.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: forwardRef(() => NgForm) }
  ]
})
export class EnrollmentProfileComponent
  extends SharedProfileComponent<Registrant>
  implements OnInit {
  constructor(ctrlContainer: ControlContainer) {
    super(ctrlContainer);
  }

  ngOnInit() {}
}
