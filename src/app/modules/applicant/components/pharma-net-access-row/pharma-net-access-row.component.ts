import { Component, OnInit, Input } from '@angular/core';
import { EnrollmentRow, RowState } from '../../../../core/enrollment-row/enrollment-row.class';
import { openState, openStateChild, loadInOut, openStateDisable, rotate180, growVertical, growHorizontal } from '../../../../animations/animations';
import { PharmaNetOrganization } from '../../../../models/organization.model';
import { SiteAccess } from '../../../../models/sites.model';
import { EnrollmentStatus } from '../../../../models/enrollment-status.enum';
import { PrimeDataService } from '../../../../services/prime-data.service';

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
  // @Output() onChange = new EventEmitter<PharmaNetOrganization>(); //todo - use same type as above

  /** A copy of rowData */
  private _data; 

  public subRowData: SiteAccess[];

  // TODO!
  public accessType = ['Personal Access', 'Test', 'Todo'];

  public orgStartDate: Date = new Date();
  public orgEndDate: Date;

  constructor(private dataService: PrimeDataService) { 
    super();
  }

  ngOnInit() {
    this.subRowData = this.rowData.setupNewEnrollments(this.dataService.user);
    console.log('pharmaNetRow data', {rowData: this.rowData, subRowData: this.subRowData}); 
  }

  isOpen(): boolean {
    return this.openState === RowState.Opened;
  }

  shouldShowOrgActionButtons(): boolean {
    // The org row is actionable if any of its children are actionable
    return this.subRowData
      .map(this.isActionableRow)
      .filter(x => x === true)
      .length >= 1;
  }

  isActionableRow(sa: SiteAccess): boolean{
    return sa.status === EnrollmentStatus.New;
  }

  // Replace the inheritied method as our behaviour diverges
  toggleRow(){
    this.openState = this.openState === RowState.Opened ? RowState.Closed : RowState.Opened;

    if (this.openState === RowState.Opened) {
      this.onRowOpened.emit(this);
    }

  }

  onOrgStartDate(newDate: Date){
    this.subRowData = this.subRowData.map(sa => { 
      sa.startDate = newDate;
      return sa;
    });
    this.orgStartDate = newDate;
  }

  onOrgEndDate(newDate: Date) {
    this.subRowData = this.subRowData.map(sa => {
      sa.endDate = newDate;
      return sa;
    });
    this.orgEndDate = newDate;
  }

  // These will only be necessary when returning for multiple times.  Might be
  // splitting that to a separate component.

  // onAcceptSite(sa: SiteAccess){
  //   sa.status = EnrollmentStatus.Active;
  // }

  // onRejectSite(sa: SiteAccess){
  //   sa.status = EnrollmentStatus.Declined;
  // }

  // onAcceptOrg(org: PharmaNetOrganization){ 
  //   org.me
  // }

  // onRejectOrg(org: PharmaNetOrganization){}


  // TODO - Remove? Pretty sure it's not being used at all.
  get siteAccessRequiringAttention(): any[] {

    if (!this.rowData){
      return [];
    }

    return this.rowData.allSiteAccess();
  }

}
