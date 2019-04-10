import { Injectable } from '@angular/core';
import { CommonLogger, CommonLogMessage } from 'moh-common-lib/services';
import { HttpClient } from '@angular/common/http';
import { UUID } from 'angular2-uuid';
import { environment } from '../../environments/environment';

export interface LogMessage {
  /** The type of event being logged. */
  event: 'BCSC Account' | 'navigation';
  [key: string]: any;
}

@Injectable()
export class LoggerService extends CommonLogger {

  constructor( protected http: HttpClient ) {
    super( http );

    this._headers = this._headers.set( 'program', 'prime-registration' );

    this.setURL( environment.loggingURL );
  }

  /**
   * Overrided function - must have event within the interface
   * @param message
   */
  public log( message: LogMessage ) {
    this._log( message as CommonLogMessage );
  }

  /**
   * Overrided function - must have event within the interface
   * @param errorMessage
   */
  public logError( errorMessage: LogMessage ) {
    this._logError( errorMessage as CommonLogMessage );
  }
}
