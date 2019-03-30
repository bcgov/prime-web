import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EnrollmentStateService } from '../../services/enrollment-state.service';
import { MatDialogRef } from '@angular/material/dialog';
import { EnrollmentDataService } from '../../services/enrollment-data.service';
import { Observable, of } from 'rxjs';

const tempArr = ['Health Authority', 'Pharmacy'];
const data = [['data 1', 'data2', 'data3']];
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
  searchResults: Observable<string[]> = new Observable();

  constructor(
    private dataSvc: EnrollmentDataService,
    private stateSvc: EnrollmentStateService,
    public dialogRef: MatDialogRef<SearchOrganizationModalComponent>
  ) {
    this.fg = this.stateSvc.findOrganizationForm;
  }

  ngOnInit() {
    this.dataSvc.organizationTypesInit(tempArr);
    this.types = this.dataSvc.organizationTypes$;
    this.searchResults = of(data[0]);
  }

  cancel() {
    console.log('cancel clicked');
  }
  add() {
    console.log('add clicked');
  }

  find() {
    this.search = false;
  }
}
