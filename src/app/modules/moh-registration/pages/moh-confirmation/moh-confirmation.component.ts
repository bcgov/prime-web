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

  hasQRCode(): boolean {
    // TODO: build logic to determine whether or not QR code is displayed
    return true;
  }

  get statusCode() {
    // TODO: build logic to retrieve code from message
    return ApiStatusCodes.SUCCESS;
  }

  get confirmationMessage() {
    // TODO: build logic to retrieve confirmation messages
    return 'Account successfully created.';
  }

  get QRCode() {
    // TODO: build logic to retrieve confirmation messages
    return 'QR Code image to be displayed';
  }

  get nextStepMessage() {
    // TODO: build logic to retrieve confirmation messages
    return 'Please log on to complete to ID Proofing.';
  }
}
