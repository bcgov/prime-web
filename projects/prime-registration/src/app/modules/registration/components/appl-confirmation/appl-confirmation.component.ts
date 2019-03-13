import { Component, OnInit, Input } from '@angular/core';
import { ApiStatusCodes } from '@prime-core/models/api-status-codes.enum';

@Component({
  selector: 'prime-appl-confirmation',
  templateUrl: './appl-confirmation.component.html',
  styleUrls: ['./appl-confirmation.component.scss']
})
export class ApplConfirmationComponent implements OnInit {

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
