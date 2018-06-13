import { Injectable } from '@angular/core';
import { Observable, Subject } from "rx";
import { EnrollmentStatus } from '../models/enrollment-status.enum';


@Injectable()
export class VerifierService {


  private _enrollmentViewTypeSelector  = "All";
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

  /**
   * Returns a subset of EnrollmentStatus
   *
   * @readonly
   * @memberof VerifierService
   */
  get VerifierEnrollmentStatus() {
    return Object.keys(EnrollmentStatus) // Split object into array of keys
    .filter(x => x !== EnrollmentStatus.New) // Filter out keys we don't want
    .reduce((obj, key) => { // Re-construct into an Object key/value pair
      obj[key] = EnrollmentStatus[key]
      return obj;
    }, {});
  }

}
