import { Component, OnInit } from '@angular/core';
import { ApiStatusCodes } from '../../../../models/api-status-codes.enum';

@Component({
  selector: 'app-moh-confirmation',
  templateUrl: './moh-confirmation.component.html',
  styleUrls: ['./moh-confirmation.component.scss']
})
export class MohConfirmationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get statusCode() {
    // TODO: build logic to retrieve code from message
    return ApiStatusCodes.SUCCESS;
  }

}
