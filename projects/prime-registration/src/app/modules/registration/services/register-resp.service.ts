import { Injectable } from '@angular/core';
import { UserAttrPayload } from '../models/register-api.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterRespService {

  public payload: UserAttrPayload ;



  constructor() { }


}
