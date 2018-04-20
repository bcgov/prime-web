import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
  private _user: User;

  constructor() {
    console.log('UserService created user');
    this._user = new User();
  }


  get user(): User {
    return this._user
  }

}
