import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Output
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EnrollmentStateService } from '../../services/enrollment-state.service';
import { EnrollmentDataService } from '../../services/enrollment-data.service';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { IOrganization } from '@prime-enrollment/core/interfaces';

const tempArr = ['Health Authority', 'Pharmacy'];
// const data = [['data 1', 'data2', 'data3']];
const headers = ['Organization Name', 'Type', 'City'];
@Component({
  selector: 'enroll-search-organization-modal',
  templateUrl: './search-organization-modal.component.html',
  styleUrls: ['./search-organization-modal.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchOrganizationModalComponent implements OnInit {
  @Output() submit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() result: EventEmitter<any> = new EventEmitter<any>();
  fg$: BehaviorSubject<FormGroup>;
  fg: FormGroup;
  search = true;
  types: Observable<string[]>;
  searchResults: Observable<Array<IOrganization>>;
  searchResultsHeaders: Observable<string[]> = new Observable();
  headers: string[];

  constructor(
    private dataSvc: EnrollmentDataService,
    public stateSvc: EnrollmentStateService
  ) {
    this.fg = this.stateSvc.findOrganizationForm$.value;
    this.headers = headers;
  }

  ngOnInit() {
    this.dataSvc.organizationTypesInit(tempArr);
    this.types = this.dataSvc.organizationTypes$;
    this.searchResultsHeaders = of(this.headers);
  }
  selectedResults(evt: boolean, data: IOrganization) {
    evt
      ? this.stateSvc.addOrgResults(data)
      : this.stateSvc.removeOrgResults(data);
  }

  add() {
    const res = this.stateSvc.orgResults;
    if (res.length < 1) return console.log('no results to add');
    this.stateSvc
      .orgResultsForm(res)
      .then(fga => this.stateSvc.organizationForm$.next(fga))
      .then(() => this.result.emit(this.stateSvc.organizationForm$.value))
      .then(() => this.submit.emit(true));
  }

  find() {
    this.touchForm();
    this.doSearch();
  }

  doSearch() {
    const data = this.fg.value as any;
    this.search = false;
    const res = this.dataSvc.findOrganizations(data);
    this.searchResults = res;
  }

  touchForm() {
    const changed = this.stateSvc.touchForm(this.fg);
  }
}
