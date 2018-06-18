import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {EnrollmentProgressRowComponent} from '../../../../core/enrollment-progress-row/enrollment-progress-row.component';
import {growVertical} from '../../../../animations/animations';
import {AccessReasons} from '../../../../models/sites.model';
import {isNullOrUndefined} from "util";

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
     const list = Object.keys(AccessReasons);
     return list.map( x => {return AccessReasons[x]; });
  }

  get accessReason() {
     if (isNullOrUndefined(this.data.accessReason)) {
       return 'Please Select';
     }
     return this.data.accessReason;
  }

  onSelect($event){
     this.data.accessReason = $event;
  }
}
