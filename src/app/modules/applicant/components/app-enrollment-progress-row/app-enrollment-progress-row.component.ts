import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {EnrollmentProgressRowComponent} from '../../../../core/enrollment-progress-row/enrollment-progress-row.component';
import {growVertical} from '../../../../animations/animations';
import {AccessReasons, SiteAccess} from '../../../../models/sites.model';
import {isNullOrUndefined} from 'util';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'prime-app-enrollment-progress-row',
  templateUrl: './app-enrollment-progress-row.component.html',
  styleUrls: ['./app-enrollment-progress-row.component.scss'],
  animations: [growVertical]
})
export class AppEnrollmentProgressRowComponent extends EnrollmentProgressRowComponent implements OnInit{

  @Input() disableReason: boolean = true;
  @Output() onPendingChange = new EventEmitter<SiteAccess>();

  private _data; // copy of data

   constructor() {
    super();
  }

  ngOnInit() {
    if (this.data) {
      this._data = cloneDeep( this.data );
    }
  }

  get accessReasons() {
     const list = Object.keys(AccessReasons);
     return list.map( x => {return AccessReasons[x]; });
  }

  get accessReason() {
     if (isNullOrUndefined(this._data.accessReason) || 0 === this._data.accessReason.length) {
       return 'Please Select';
     }
     return this._data.accessReason;
  }

  set accessReason( reason: string ) {
     console.log( 'accessReason: ' + reason );
     this._data.accessReason = reason;
     this.onPendingChange.emit( this._data );
  }
}
