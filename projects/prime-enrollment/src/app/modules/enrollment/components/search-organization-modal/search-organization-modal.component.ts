import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EnrollmentStateService } from '../../services/enrollment-state.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'enroll-search-organization-modal',
  templateUrl: './search-organization-modal.component.html',
  styleUrls: ['./search-organization-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchOrganizationModalComponent implements OnInit {
  fg: FormGroup;
  search = true;

  constructor(
    private stateSvc: EnrollmentStateService,
    public dialogRef: MatDialogRef<SearchOrganizationModalComponent>
  ) {
    this.fg = this.stateSvc.findOrganizationForm;
  }

  ngOnInit() {}

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
