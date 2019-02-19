import {Injectable, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR} from '@angular/core';


/**
 * Fake-backend service used to develop front-end without requiring back-end for
 * REST calls.
 *
 * Development/Test case data is setup in this file
 */
@Injectable({
  providedIn: 'root'
})
export class FakeBackendService {

  constructor( ) {
  }
}
