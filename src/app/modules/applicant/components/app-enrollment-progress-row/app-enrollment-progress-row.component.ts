import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
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

   constructor() {
    super();
  }

  get accessReasons() {
    return Object.keys(AccessReasons);
  }

  get accessReason() {
    return this.data.accessReason;
  }

  set accessReason(value: string) {
     console.log('access reason: ', value);
    this.data.accessReason = value;
  }
}
