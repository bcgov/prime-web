import { Injectable } from '@angular/core';
import { StateOptions } from '../data/state.enum';
import { ActivatedRoute } from '@angular/router';

const stateOpts = StateOptions;

@Injectable({
  providedIn: 'root'
})
export class EnrollmentStateService {
  currentIndex: any;
  constructor(private route: ActivatedRoute) {
    this.route.url.subscribe(obs => {
      // TODO: come back to this function to state match once routing is done.
      // @ts-ignore
      this.currentIndex = stateOpts[obs];
    });
  }
}
