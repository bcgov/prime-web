import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { mergeMap, delay } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { Injectable } from '@angular/core';
import { FakeBackendService } from './fake-backend.service';
import { Base } from 'moh-common-lib/models';
import {
  ApiStatusCodes,
  PayloadInterface,
  StatusMsgInterface,
  CacheInterface
} from 'prime-core';

@Injectable()
export class FakeBackendInterceptor extends Base implements HttpInterceptor {
  private _processDate: string = new Date().toDateString();
  private _clientName: string = 'regweb';

  constructor(private fakebackendService: FakeBackendService) {
    super();
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // wrap in delayed observable to simulate server API calls
    return of(null).pipe(
      mergeMap(() => {
        console.log('Request (fakeBackend interceptor)', request);

        if ('POST' === request.method) {
          console.log('Post request');

          const payload = null;

          if (payload) {
            return of(new HttpResponse({ status: 200, body: payload })).pipe(
              delay(1000)
            );
          }
        } else if ('GET' === request.method) {
          let response = null;

          if (request.url.endsWith('/getCache')) {
            console.log('Get cache ', request.params);
            response = this.getCache(request.params.get('param'));
          }

          if (response) {
            return of(new HttpResponse({ status: 200, body: response })).pipe(
              delay(1000)
            );
          }
        }

        // Pass through to actual service
        return next.handle(request);
      })
    );
  }

  // Methods to handle API calls

  private getCache(param: string): any {
    const cacheResp: CacheInterface = {
      clientName: this._clientName,
      processDate: this._processDate,
      statusCode: ApiStatusCodes.SUCCESS,
      statusMsgs: []
    };

    switch (param) {
      case 'countries':
        cacheResp.country = this.fakebackendService.countryList;
        break;

      case 'provinces':
        cacheResp.province = this.fakebackendService.provinceList;
        break;

      case 'messages':
        cacheResp.messages = this.fakebackendService.messageList;
        break;

      case 'securityQues':
        cacheResp.secQues = this.fakebackendService.secQuestionList;
        break;

      case 'docTypes':
        cacheResp.documentType = this.fakebackendService.docTypes;
        break;

      case 'sysParams':
        cacheResp.sysParam = this.fakebackendService.sysParams;
        break;

      default:
        cacheResp.statusCode = ApiStatusCodes.ERROR;
        console.log( 'don\'t know the param: ', param);
        break;
    }

    return cacheResp;
  }

  /**
   * Return canned response (Success)
   * @param request
   */
  getRespRegister(request: HttpRequest<any>): PayloadInterface {
    const msg: StatusMsgInterface[] = [];

    msg.push(this.fakebackendService.messageList.find(x => x.msgID === '1'));
    const resp: PayloadInterface = {
      clientName: request.body.clientName,
      processDate: request.body.processDate,
      statusCode: ApiStatusCodes.SUCCESS,
      statusMsgs: msg
    };
    return resp;
  }
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
