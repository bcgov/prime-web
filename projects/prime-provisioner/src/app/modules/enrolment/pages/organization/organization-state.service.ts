import { Injectable } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizationStateService {
  searchControl = new FormControl(null, [Validators.required]);
  provisionerGroupControl = new FormControl(null, [Validators.required]);
  searchResults: any;

  orgOptions = of(['All', 'Some']);

  constructor() {}
}
