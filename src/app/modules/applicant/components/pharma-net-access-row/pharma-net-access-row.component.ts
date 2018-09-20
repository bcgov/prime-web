import { Component, OnInit, Input } from '@angular/core';
import { EnrollmentRow, RowState } from '../../../../core/enrollment-row/enrollment-row.class';
import { openState, openStateChild, loadInOut, openStateDisable, rotate180, growVertical, growHorizontal } from '../../../../animations/animations';
import { SiteAccess } from '../../../../models/sites.model';
import { EnrollmentStatus } from '../../../../models/enrollment-status.enum';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { PharmaNetOrganization } from '../../../../models/organizations.model';


@Component({
  selector: 'prime-pharma-net-access-row',
  templateUrl: './pharma-net-access-row.component.html',
  styleUrls: ['./pharma-net-access-row.component.scss'],
  animations: [openState, openStateChild, loadInOut, rotate180, growVertical, growHorizontal]
})
export class PharmaNetAccessRowComponent extends EnrollmentRow implements OnInit {

  @Input() rowData: PharmaNetOrganization;

  /** If true, hide all sites and only display orgs. */
  @Input() orgsOnly: boolean;

  /** A copy of rowData */
  private _data;

  public subRowData: SiteAccess[];


  public orgStartDate: Date = new Date();
  public orgEndDate: Date;

  constructor(private dataService: PrimeDataService) {
    super();
  }

  ngOnInit() {
    // TODO - calling this overwrites SiteAccess status - need to only write if not already setup?
    this.subRowData = this.rowData.setupNewEnrollments(this.dataService.user);
    // have to handle case where user has just wiped their orgs.
    this.subRowData = this.rowData.allSiteAccess;
    // console.log('pharmaNetRow data', {rowData: this.rowData, subRowData: this.subRowData});
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

  // Remove the org, which removes the entire row and destroys the component
  removeOrg(){
    this.dataService.user.selectedPharmaNetOrgs = this.dataService.user.selectedPharmaNetOrgs
      .filter(x => x !== this.rowData);
  }

  // BELOW LINES ONLY NECESSARY WHEN USER IS RETURNING AFTER FIRST VISIT
  // may split into separate component?

  // public accessType = ['Personal Access', 'Test', 'Todo']; // replace with PharmaNetOrgType

  onAcceptSite(sa: SiteAccess){
    sa.status = EnrollmentStatus.Active;
  }

  onRejectSite(sa: SiteAccess){
    sa.status = EnrollmentStatus.Declined;
  }

  onAcceptOrg(org: PharmaNetOrganization){
    // org.me
    console.log('Accept org');
  }

  onRejectOrg(org: PharmaNetOrganization){
    console.log('Reject org');
  }


  get siteAccessRequiringAttention(): any[] {

    if (!this.rowData){
      return [];
    }

    return this.rowData.allSiteAccess;
  }

}
