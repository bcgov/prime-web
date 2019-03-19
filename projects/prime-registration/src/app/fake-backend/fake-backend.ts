import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {mergeMap, delay} from 'rxjs/operators';
import {of} from 'rxjs/internal/observable/of';
import {Injectable} from '@angular/core';
import { FakeBackendService } from './fake-backend.service';
import { ApiStatusCodes } from '../../../../../src/app/models/api-base.model';
import { Base } from 'moh-common-lib/models';

@Injectable()
export class FakeBackendInterceptor extends Base implements HttpInterceptor  {

  private _processDate: string = new Date().toDateString();
  private _clientName: string = 'regweb';

  constructor(private fakebackendService: FakeBackendService ) {
    super();
   }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // wrap in delayed observable to simulate server API calls
    return of( null ).pipe(mergeMap(() => {

      console.log( 'Request (fakeBackend interceptor)', request );

      if ( 'POST' === request.method ) {
        console.log( 'Post request' );

        // if (request.url.endsWith('/??')) { }

        /*if ( payload ) {
          return of(new HttpResponse({ status: 200, body: payload }))
            .pipe(delay(1000));
        }*/

      } else if ( 'GET' === request.method ) {
        let response = null;

          if ( request.url.endsWith( '/getCache' ) ) {
            console.log( 'Get cache ', request.params );
            response = this.getCache(  request.params.get( 'param' ) );
          }

         if ( response ) {
          return of( new HttpResponse( {status: 200, body: response} ) )
            .pipe(delay(1000));
         }

      }

      // Pass through to actual service
      return next.handle( request );
    } ));
  }

  // Methods to handle API calls

  private getCache( param: string ) : any {

    switch( param ) {
      case 'countries':
        return {
          eventUUID: 'cache-' + this.objectId,
          clientName: this._clientName,
          processDate: this._processDate,
          statusCode: ApiStatusCodes.SUCCESS,
          statusMsgs:[],
          country: this.fakebackendService.countryList
        }

      case 'province':
        return {
          eventUUID: 'cache-' + this.objectId,
          clientName: this._clientName,
          processDate: this._processDate,
          statusCode: ApiStatusCodes.SUCCESS,
          statusMsgs:[],
          province: this.fakebackendService.provinceList
        }

      default:
       console.log( 'don\'t know the param: ', param );
    }
  }
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};

