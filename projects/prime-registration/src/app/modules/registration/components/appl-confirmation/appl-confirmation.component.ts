import { Component, OnInit } from '@angular/core';
import { RegisterRespService } from '../../services/register-resp.service';
import { ServerPayload, StatusMsgInterface, ScreenAreaID, ApiStatusCodes } from '@prime-core/models/api-base.model';
import { RegCacheService } from '@prime-registration/services/reg-cache.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './appl-confirmation.component.html',
  styleUrls: ['./appl-confirmation.component.scss']
})
export class ApplConfirmationComponent implements OnInit {

  // Base class
  private respPayLoad: ServerPayload;
  private statusMessage: StatusMsgInterface[];

  constructor( private registerRespService: RegisterRespService,
               private cacheService: RegCacheService ) {
  }

  ngOnInit() {

    this.respPayLoad = this.registerRespService.payload;
    if ( this.respPayLoad ) {
      this.statusMessage = <StatusMsgInterface[]>this.respPayLoad.statusMsgs;
    } else {  // Empty payload

      const respMsg: StatusMsgInterface[] = [];
      this.cacheService.$enhancedMsgList.subscribe( obs => {
        const msg = obs.find( x => x.msgID === '9999' );
        if ( msg ) {
          respMsg.push(msg);
        } else {
          // No cache loaded hard coded message to display to user
          respMsg.push( {
            msgID: null,
            msgText: 'This error occurred because the system encountered an unanticipated situation which forced it to stop.',
            msgType: ApiStatusCodes.ERROR,
            scrArea: ScreenAreaID.CONFIRMATION,
            appLayer: null
          });
        }
      });
      this.statusMessage = respMsg;
    }
  }

  get statusCode() {
    return this.respPayLoad ? this.respPayLoad.statusCode : ApiStatusCodes.ERROR;
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

  onButtonClick($event) {
    console.log( 'button clicked' );
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
