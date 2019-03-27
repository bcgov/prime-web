import { Component, OnInit } from '@angular/core';
import { RegisterRespService } from '../../services/register-resp.service';
import { ServerPayload, StatusMsgInterface, ScreenAreaID } from '@prime-core/models/api-base.model';

@Component({
  selector: 'app-confirmation',
  templateUrl: './appl-confirmation.component.html',
  styleUrls: ['./appl-confirmation.component.scss']
})
export class ApplConfirmationComponent implements OnInit {

  // Base class
  private respPayLoad: ServerPayload;
  private statusMessage: StatusMsgInterface[];

  constructor( private registerRespService: RegisterRespService ) {
    this.respPayLoad = this.registerRespService.payload;
    this.statusMessage = <StatusMsgInterface[]>this.respPayLoad.statusMsgs;
  }

  ngOnInit() {
  }

  get statusCode() {
    return this.respPayLoad.statusCode;
  }

  hasQRCode(): boolean {
    // Change to boolean
    return !!this.getMessage( ScreenAreaID.QRCODE );
  }

  get confirmationMessage() {
    return this.getMessage( ScreenAreaID.CONFIRMATION );
  }

  get QRCode() {
    return this.getMessage( ScreenAreaID.QRCODE );
  }

  get nextStepMessage() {
    return this.getMessage( ScreenAreaID.NEXT_STEPS );
  }

  /**
   * Retreive message for screen area
   * @param scrArea
   */
  private getMessage( scrArea: ScreenAreaID ): string {
    if ( this.statusMessage ) {
      const msg = this.statusMessage.find( x => x.scrArea === scrArea );
      return msg ? msg.msgText : null;
    }
    return null;
  }
}
