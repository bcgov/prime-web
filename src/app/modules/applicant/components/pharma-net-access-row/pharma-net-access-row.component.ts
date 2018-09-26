import { Component, OnInit, Input } from '@angular/core';
import { EnrollmentRow, RowState } from '../../../../core/enrollment-row/enrollment-row.class';
import { openState, openStateChild, loadInOut, openStateDisable, rotate180, growVertical, growHorizontal } from '../../../../animations/animations';
import { SiteAccess, PersonalAccessType } from '../../../../models/sites.model';
import { EnrollmentStatus } from '../../../../models/enrollment-status.enum';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { PharmaNetOrganization } from '../../../../models/organizations.model';
import { OrganizationAccess } from '../../../../models/organization-access.model';


@Component({
  selector: 'prime-pharma-net-access-row',
  templateUrl: './pharma-net-access-row.component.html',
  styleUrls: ['./pharma-net-access-row.component.scss'],
  animations: [openState, openStateChild, loadInOut, rotate180, growVertical, growHorizontal]
})
export class PharmaNetAccessRowComponent extends EnrollmentRow implements OnInit {

  @Input() rowData: PharmaNetOrganization;

  /** If true, hide all sites and only display orgs. For the prototype, this
   * simulates that the Org has not yet had sites provisioned for the user. */
  public orgsOnly: boolean = true;

  public subRowData: SiteAccess[];

  public accessType = Object.keys(PersonalAccessType);

  constructor(private dataService: PrimeDataService) {
    super();
  }

  ngOnInit() {
    // ! Ideally we shouldn't be configuring our data here, but it's fine for prototype.
    this.subRowData = this.rowData.setupNewEnrollments(this.dataService.user);

    // We only need to update on init
    this.orgsOnly = this.calculateOrgOnly();

    if (this.hasActionableSites()){
      this.openRow();
    }
  }

  /** Determines if we should restrict the row to orgOnly - i.e. before the Provisoiner has selected sites */
  calculateOrgOnly(): boolean {
    return this.rowData.members.filter(site => {
      return site.siteAccess.length && site.siteAccess[0].status !== null;
    }).length === 0;
  }

  /**
   * The OrgAccess for the Org for this row.
   */
  getOrgAccess(): OrganizationAccess{

    const result = this.rowData.organizationAccess.find(oa => oa.person === this.dataService.user);
    // if (!result){
    //   throw new Error('Unable to find OrganizationAccess for organization with objID - ' + this.rowData.objectId)
    // }
    return result;
  }

  isOpen(): boolean {
    return this.openState === RowState.Opened;
  }

  hasActionableSites(): boolean {
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
      if (this.isActionableRow(sa)){
        sa.startDate = newDate;
      }
      return sa;
    });
    this.getOrgAccess().startDate = newDate;
  }

  onOrgEndDate(newDate: Date) {
    this.subRowData = this.subRowData.map(sa => {
      if (this.isActionableRow(sa)){
        sa.endDate = newDate;
      }
      return sa;
    });
    this.getOrgAccess().endDate = newDate;
  }

  // Remove the org, which removes the entire row and destroys the component
  removeOrg(){
    // ! TODO Bug - This does not (but should) delete/change the status of the SiteAccess too, currently they're orphaned.
    this.dataService.user.organizationAccess = this.dataService.user.organizationAccess.filter(oa => {
      return oa.organization.objectId !== this.rowData.objectId;
    });
  }


  // public accessType = ['Personal Access', 'Test', 'Todo']; // replace with PharmaNetOrgType

  onAcceptSite(sa: SiteAccess){
    sa.status = EnrollmentStatus.Active;
  }

  onRejectSite(sa: SiteAccess){
    sa.status = EnrollmentStatus.Declined;
  }

  onAcceptOrg(org: PharmaNetOrganization){
    this.subRowData = this.subRowData.map(siteAccess => {
      if (siteAccess.status === EnrollmentStatus.New){
        this.onAcceptSite(siteAccess);
      }
      return siteAccess;
    });
  }

  onRejectOrg(org: PharmaNetOrganization) {
    this.subRowData = this.subRowData.map(siteAccess => {
      if (siteAccess.status === EnrollmentStatus.New) {
        this.onRejectSite(siteAccess);
      }
      return siteAccess;
    });
  }


  get siteAccessRequiringAttention(): any[] {

    if (!this.rowData){
      return [];
    }

    return this.rowData.allSiteAccess;
  }

}
