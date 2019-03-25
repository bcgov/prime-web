import { Component, OnInit, Input } from '@angular/core';
import { ApiStatusCodes } from '@prime-core/models/api-base.model';

@Component({
  selector: 'prime-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  @Input() displayIcon: ApiStatusCodes = ApiStatusCodes.SUCCESS;
  @Input() hasQrCode: boolean = false;

  constructor() { }

  ngOnInit() {
  }

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
}
