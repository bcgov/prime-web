import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EnrollmentProgressRowComponent} from '../../../../core/enrollment-progress-row/enrollment-progress-row.component';
import {growVertical} from '../../../../animations/animations';
import {AccessReasons} from '../../../../models/sites.model';

@Component({
  selector: 'prime-app-enrollment-progress-row',
  templateUrl: './app-enrollment-progress-row.component.html',
  styleUrls: ['./app-enrollment-progress-row.component.scss'],
  animations: [growVertical]
})
export class AppEnrollmentProgressRowComponent extends EnrollmentProgressRowComponent {

  @Input() disableReason: boolean = true;

  @Output() updated = new EventEmitter<any>();

  constructor() {
    super();
  }

  get accessReason() {
    return [
      AccessReasons.PERSONAL_ACCESS,
      AccessReasons.NOT_PERSONAL_ACCESS
    ];
  }
}
