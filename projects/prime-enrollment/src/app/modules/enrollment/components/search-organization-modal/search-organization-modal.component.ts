import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EnrollmentStateService } from '../../services/enrollment-state.service';
import { MatDialogRef } from '@angular/material/dialog';
import { EnrollmentDataService } from '../../services/enrollment-data.service';
import { Observable, of } from 'rxjs';
import { IOrganization } from '@prime-enrollment/core/interfaces';

const tempArr = ['Health Authority', 'Pharmacy'];
// const data = [['data 1', 'data2', 'data3']];
const headers = ['Organization Name', 'Type', 'City'];
@Component({
  selector: 'enroll-search-organization-modal',
  templateUrl: './search-organization-modal.component.html',
  styleUrls: ['./search-organization-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchOrganizationModalComponent implements OnInit {
  fg: FormGroup;
  search = true;
  types: Observable<string[]>;
  searchResults: Observable<Array<IOrganization>>;
  searchResultsHeaders: Observable<string[]> = new Observable();
  headers: string[];

  constructor(
    private dataSvc: EnrollmentDataService,
    public stateSvc: EnrollmentStateService,
    public dialogRef: MatDialogRef<SearchOrganizationModalComponent>
  ) {
    this.fg = this.stateSvc.findOrganizationForm;
    this.headers = headers;
  }

  ngOnInit() {
    this.dataSvc.organizationTypesInit(tempArr);
    this.types = this.dataSvc.organizationTypes$;
    // this.searchResults = this.dataSvc.searchResults;
    this.searchResultsHeaders = of(this.headers);
  }
  selectedResults(evt: boolean, data: IOrganization) {
    evt
      ? this.stateSvc.addOrgResults(data)
      : this.stateSvc.removeOrgResults(data);
  }
  cancel() {
    this.dialogRef.close();
  }

  add() {
    const res = this.stateSvc.orgResults;
    if (res.length < 1) return console.log('no results to add');
    this.stateSvc
      .orgResultsForm(res)
      // .then(fga => (this.stateSvc.organizationForm = fga))
      .then(fga => this.dialogRef.close(fga));
  }

  find() {
    const data = this.fg.value;
    this.search = false;
    const res = this.dataSvc.findOrganizations(data);
    this.searchResults = res;
  }
}
