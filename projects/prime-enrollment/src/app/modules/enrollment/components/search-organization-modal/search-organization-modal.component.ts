import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EnrollmentStateService } from '../../services/enrollment-state.service';
import { MatDialogRef } from '@angular/material/dialog';
import { EnrollmentDataService } from '../../services/enrollment-data.service';
import { Observable, of } from 'rxjs';

const tempArr = ['Health Authority', 'Pharmacy'];
const data = [['data 1', 'data2', 'data3']];
const headers = ['Type', 'Organization Name', 'City'];
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
  searchResults: Observable<Array<string[]>> = new Observable();
  searchResultsHeaders: Observable<string[]> = new Observable();
  headers: string[];

  constructor(
    private dataSvc: EnrollmentDataService,
    private stateSvc: EnrollmentStateService,
    public dialogRef: MatDialogRef<SearchOrganizationModalComponent>
  ) {
    this.fg = this.stateSvc.findOrganizationForm;
    this.headers = headers;
  }

  ngOnInit() {
    this.dataSvc.organizationTypesInit(tempArr);
    this.types = this.dataSvc.organizationTypes$;
    console.log(headers);
    this.searchResults = of(data);
    this.searchResultsHeaders = of(this.headers);
  }
  results(evt: boolean, data: any) {
    console.log(evt, data);
  }
  cancel() {
    this.dialogRef.close();
  }

  add() {
    console.log('add clicked');
  }

  find() {
    this.search = false;
  }
}
