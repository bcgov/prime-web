import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class ApplicantDataService {

  private _enrollmentViewTypeSelector  = 'View All';
  set enrollmentViewTypeSelector(type: string){
    this._enrollmentViewTypeSelector = type;
    this.viewTypeSubject.next(type);
  }

  public $enrollmentViewType: Observable<string>;
  private viewTypeSubject: Subject<string>;

  constructor() {
    this.viewTypeSubject = new Subject<string>();
    this.$enrollmentViewType = this.viewTypeSubject.asObservable();
  }

  getPageProgressSteps() {
    return [
      {
        title: 'Contact',
        route: 'contact',
      },
      {
        title: 'Professional',
        route: 'professional',
      },
      {
        title: 'Self Declaration',
        route: 'self-declaration'
      }
    ];
  }
}
