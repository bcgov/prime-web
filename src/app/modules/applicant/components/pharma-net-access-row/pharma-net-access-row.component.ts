import { Component, OnInit, Input } from '@angular/core';
import { EnrollmentRow, RowState } from '../../../../core/enrollment-row/enrollment-row.class';
import { openState, openStateChild, loadInOut, openStateDisable, rotate180, growVertical, growHorizontal } from '../../../../animations/animations';
import { SiteAccess } from '../../../../models/sites.model';
import { PharmaNetOrganization } from '../../../../models/organization.model';

/** An interface */
export interface PharmaNetRow extends PharmaNetOrganization {
  open: boolean;
}

@Component({
  selector: 'prime-pharma-net-access-row',
  templateUrl: './pharma-net-access-row.component.html',
  styleUrls: ['./pharma-net-access-row.component.scss'],
  // TODO - REmove unused animations here (loadinOut?, openSTATe/ openStatedisable?)
  animations: [openState, openStateChild, loadInOut, rotate180, growVertical, growHorizontal]
})
export class PharmaNetAccessRowComponent extends EnrollmentRow implements OnInit {

  @Input() rowData: PharmaNetOrganization;
  // @Output() onChange = new EventEmitter<ApplEnrollmentRowItem>(); //todo - use same type as above

  /** A copy of rowData */
  private _data; 

  // TODO!
  public accessType = ['Personal Access', 'Test', 'Todo'];

  constructor() { 
    super();
  }

  ngOnInit() {
    console.log('pharmanet row init, openState -', this.openState);
  }

  // Replace the inheritied method as our behaviour diverges
  toggleRow(){
    this.openState = this.openState === RowState.Opened ? RowState.Closed : RowState.Opened;

    if (this.openState === RowState.Opened) {
      this.onRowOpened.emit(this);
    }

    console.log('toggleRow, now', this.openState);
  }

  get siteAccessRequiringAttention(): any[] {

    if (!this._data || !this._data.expandableRows) {
      return [];
    }

    return this._data.expandableRows.map(siteAccess => {
      siteAccess.title = `${siteAccess.site.name}`;
      return siteAccess;
    });
  }

}
