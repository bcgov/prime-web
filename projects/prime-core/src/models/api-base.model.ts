export enum ApiStatusCodes {
  SUCCESS = '0',
  ERROR = '1',
  WARNING = '2'
}

/** Screen section identifiers */
export enum ScreenAreaID {
  CONFIRMATION = 'CONFIRMATION',
  QRCODE = 'QR',
  NEXT_STEPS = 'NEXT STEPS',
  INTERIM = 'INTERIM',
  FINAL = 'FINAL'
}

/**
 *  Structure for confirmation page to display messages in correct
 *  screen area
 */
export interface StatusMsgInterface {
  msgID: string;
  msgText: string;
  msgType: string;
  scrArea: ScreenAreaID;
  appLayer: string;
}
export interface PayloadInterface {

  /**
   * Default application name
   */
  clientName: string;

  /**
   * Date the JSON message was created. Date format dictated by value in DB System
   * Parameter table for DATE_FORMAT (i.e. YYYYMMDD) parameter
   */
  processDate: string;

  /**
   * Returned status code values: 0 = success, continue, 1 = error,
   * do not continue, 2 = warning.
   */
  statusCode: string;

  /**
   * Contains the list of Enhanced Message related to the process execution
   */
  statusMsgs: StatusMsgInterface[] | string | string[];
}

export class ServerPayload implements PayloadInterface {
  clientName: string;
  processDate: string;
  statusCode: string;
  statusMsgs: StatusMsgInterface[] | string | string[];


  constructor(payload: PayloadInterface) {
    this.clientName = payload.clientName;
    this.processDate = payload.processDate;
    this.statusCode = payload.statusCode;
    this.statusMsgs = payload.statusMsgs;
  }

  get success(): boolean {
    return this.statusCode === ApiStatusCodes.SUCCESS;
  }

  get error(): boolean {
    return this.statusCode === ApiStatusCodes.ERROR;
  }

  get warning(): boolean {
    return this.statusCode === ApiStatusCodes.WARNING;
  }
}


