import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiStatusCodes } from '../../../models/api-base.model';

@Component({
  selector: 'lib-prime-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  @Input() displayIcon: ApiStatusCodes = ApiStatusCodes.SUCCESS;
  @Input() hasQrCode: boolean = false;
  @Input() btnLabel: string = 'Login';

  @Output() btnClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  // Status codes
  get successCode() {
    return ApiStatusCodes.SUCCESS;
  }

  get errorCode() {
    return ApiStatusCodes.ERROR;
  }

  get warningCode() {
    return ApiStatusCodes.WARNING;
  }

  onClick($event) {
    this.btnClick.emit($event);
    $event.stopPropagation();
    return false;
  }
}
