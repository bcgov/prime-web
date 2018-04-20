import { Base } from '../core/base/base.class';
import { EnrollmentRowItem, EnrollmentRowChild, BadgeLevel } from '../core/enrollment-row/enrollment-row.interface';
import { EnrollmentStatus } from './prime.models';


/** Main class for the active user's session. */
export class User extends Base {

  //TODO: High priority, move away from this! Just useful while pumping in dummy data.
  data: any = {};

  _enrollmentListData: EnrollmentRowItem[];

  get enrollmentBySite(): EnrollmentRowItem[] {
    return this._enrollmentListData;
  }

  get enrollmentByUser(): EnrollmentRowItem[] {
    //TODO:
    return [];
  }

  // TODO: High priority move away from this and towards proper data structure.
  debugSetEnrollmentBySite(data){
    // this.data['enrollmentBySite'] = data;
    this._enrollmentListData = data;
  }
}
