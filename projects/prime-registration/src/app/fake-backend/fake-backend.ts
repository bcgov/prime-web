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

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor  {

  constructor(private fakebackendService: FakeBackendService ) { }

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
        console.log( 'Get request' );
      }

      // Pass through to actual service
      return next.handle( request );
    } ));
  }

  // Methods to handle API calls
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};

