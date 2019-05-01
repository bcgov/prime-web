import { Injectable } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { of, Observable } from 'rxjs';
import { organizations } from './mocks/organizations';
import { IOrganization } from '@prime-prov/core/interfaces/i-organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationStateService {
  searchControl = new FormControl(null, [Validators.required]);
  provisionerGroupControl = new FormControl(null, [Validators.required]);
  searchResults: Observable<IOrganization[]>;

  orgOptions = of(['All', 'Some']);

  constructor() {
    this.searchResults = of(organizations);
  }
}
