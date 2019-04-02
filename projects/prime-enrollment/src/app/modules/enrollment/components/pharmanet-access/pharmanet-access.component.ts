import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormArray } from '@angular/forms';
import { EnrollmentStateService } from '../../services/enrollment-state.service';
import { SearchOrganizationModalComponent } from '../search-organization-modal/search-organization-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pharmanet-access',
  templateUrl: './pharmanet-access.component.html',
  styleUrls: ['./pharmanet-access.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PharmanetAccessComponent implements OnInit {
  fa: FormArray;

  constructor(
    private stateSvc: EnrollmentStateService,
    public dialog: MatDialog
  ) {
    this.fa = this.stateSvc.organizationForm;
  }

  ngOnInit() {}

  addOrganization() {
    return this.openModal();
  }

  openModal() {
    const dialog = this.dialog;
    const ref = dialog.open(SearchOrganizationModalComponent, {
      panelClass: 'test'
    });
  }
}
