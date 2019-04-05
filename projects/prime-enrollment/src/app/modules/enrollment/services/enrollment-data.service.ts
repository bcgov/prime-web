import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
  IOrganizationForm,
  IDeclaration,
  IOrganization
} from '@prime-enrollment/core/interfaces';
import { orgResults } from '../mocks/organization.mock';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentDataService {
  private licenseOptions: BehaviorSubject<any> = new BehaviorSubject(null);
  private searchResults$: Observable<IOrganization[]> = new Observable();
  private organizationTypes: Observable<string[]>;
  private organizationSelection$: Observable<IOrganizationForm[]>;

  organizationTypesInit(arr: string[]) {
    this.organizationTypes = of(arr);
  }

  get organizationTypes$() {
    return this.organizationTypes;
  }

  get searchResults() {
    return this.searchResults$;
  }

  organizationSelection(selection: IOrganizationForm[]) {
    this.organizationSelection$ = of(selection);
  }

  public licenseOptions$(): Observable<any> {
    return this.licenseOptions.asObservable();
  }
  setLicenseOptions(data) {
    this.licenseOptions.next(data);
  }
  constructor() {}

  findOrganizations(obj: IOrganization) {
    const results = orgResults;
    // setTimeout(() => {
    this.searchResults$ = of(results);
    // }, 1000);
    return this.searchResults$;
  }
}
