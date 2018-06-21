import { Component, OnInit, Input } from '@angular/core';
import { growVertical } from '../../animations/animations';
import { SiteAccess, SiteAccessProgressSteps } from '../../models/sites.model';
import {RowState} from '../enrollment-row/enrollment-row.class';
import { EnrollmentStatus } from '../../models/enrollment-status.enum';


@Component({
  selector: 'prime-enrollment-progress-row',
  templateUrl: './enrollment-progress-row.component.html',
  styleUrls: ['./enrollment-progress-row.component.scss'],
  animations: [growVertical]
})
export class EnrollmentProgressRowComponent implements OnInit {
  @Input() open: boolean = false;
  @Input() data: SiteAccess;

  get description(): string {
    if (!this.data) { return }

    const status = this.data.status.toLowerCase();
    let stage = this.data.progress.toString();
    if (stage === SiteAccessProgressSteps.Provisioner) {
      stage = "PoS Provisioning"
    }

    if (this.data.status === EnrollmentStatus.Declined) {
      return "Applicant declined access to this site."
    }
    else if (this.data.status === EnrollmentStatus.Expired){
      return `Request has ${status} and is waiting for ${stage}`
    }

    return `Request has been ${status} and is awaiting ${stage}`;
  }

  constructor() { }

  ngOnInit() {
    if (!this.data ) { return; }
  }

  get openState(): string {
    return open ? RowState.Opened : RowState.Closed;
  }

  // Makes it easy to iterate over an enum in the template. Only for use in the
  // template. Used in conjunction with activeStepIndex
  get iterableNumberOfSteps(): Array<any> {
    return Array(Object.keys(SiteAccessProgressSteps).length);
  }

  get activeStepIndex(): number {
    if (!this.data) { return; }
    return Object.keys(SiteAccessProgressSteps).indexOf(this.data.progress);
  }

  // TODO: Remove! This is for development only. The important bit is that it
  // changes this.data.progress
  incrementStatusDevOnly(){
      const arr = Object.keys(SiteAccessProgressSteps);
      let newIndex = arr.indexOf(this.data.progress) + 1;
      if (newIndex >= arr.length) { newIndex = 0 }
      const newStatus = arr[newIndex];
      this.data.progress = SiteAccessProgressSteps[newStatus]
  }

}
