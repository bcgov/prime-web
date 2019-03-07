import { Component, OnInit } from '@angular/core';
import { ApiStatusCodes } from '../../../../models/api-status-codes.enum';

@Component({
  selector: 'app-bcsc-confirmation',
  templateUrl: './bcsc-confirmation.component.html',
  styleUrls: ['./bcsc-confirmation.component.scss']
})
export class BcscConfirmationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get statusCode() {
    // TODO: build logic to retrieve code from message
    return ApiStatusCodes.ERROR;
  }
}
