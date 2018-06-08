import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Base} from '../../../../core/base/base.class';
import {Router} from '@angular/router';
import {loadInOut, openState, openStateChild, openStateDisable} from '../../../../animations/animations';
// import {EnrollmentRowChild, EnrollmentRowItem} from '../../../verifier/components/enrollment-row/enrollment-row.interface';
import {EnrollmentStatus} from '../../../../models/enrollment-status.enum';
import {EnrollmentAlert, Site} from '../../../../models/sites.model';
import { EnrollmentRow, RowState, EnrollmentRowChild } from '../../../../core/enrollment-row/enrollment-row.class';
import { EnrollmentRowItem } from '../../../verifier/components/enrollment-row/enrollment-row.component';

@Component({
  selector: 'prime-provisioner-table',
  templateUrl: './provisioner-table.component.html',
  styleUrls: ['./provisioner-table.component.scss'],
  animations: [openState, openStateChild, loadInOut, openStateDisable]
})
// TODO: RENAME FILE!
export class ProvisionerEnrollmentRowComponent extends EnrollmentRow implements OnInit {

  // @Input() rowData: Site;
  @Input() rowData: EnrollmentRowItem;
  @Input() primaryType: "User"|"Site" = "Site";

  @Output() onRowOpened = new EventEmitter<any>();

  siteNumber: String;
  siteName: string;
  status: EnrollmentStatus;

  constructor( private router: Router) {
    super();
  }

  //ORIG
  // ngOnInit() {
  //   if (!this.rowData ) {return}
  //   const name =   this.rowData.name;
  //   this.siteName = name.substring(0, name.lastIndexOf(' ') - 1);
  //   this.siteNumber = 'Site ' + name.substring(name.lastIndexOf(' ') + 1);
  //   console.log(' site is ', this.rowData);
  //   //this.siteAccessRequiringAttention.map(x => x.open = false);
  // }


  ngOnInit() {
    if (!this.rowData ) { return; }
    this.siteAccessRequiringAttention.map(x => x.open = false);
  }

  toggleRow() {

    if (this.canOpen()){
      this.openState = this.openState === RowState.Opened ? RowState.Closed  : RowState.Opened;

      if (this.openState === RowState.Opened ){
        this.onRowOpened.emit(this);
        // First row is open by default
        this.siteAccessRequiringAttention[0].open = open;
      }

    }
  }

  expandedRowClick(row: EnrollmentRowChild){
    this.siteAccessRequiringAttention.map(x => x.open = false);
    row.open = !row.open;
  }

  ngOnDestroy(){
    // Set all child rows to closed.
    this.siteAccessRequiringAttention.map(x => x.open = false);
  }

  /** This function is responsible for generating site access row titles depending on dashboard type */
  get siteAccessRequiringAttention(): any[] {

    if ( !this.rowData || !this.rowData.expandableRows ){
      return [];
    }

    // All this function does is generate titles for Site Access rows.
    if (this.primaryType === "Site"){
      return this.rowData.expandableRows.map(siteAccess => {
        siteAccess.title = `${siteAccess.site.name} / ${siteAccess.person.name}`;
        return siteAccess;
      });
    }
    else {
      return this.rowData.expandableRows.map(siteAccess => {
        siteAccess.title = `${siteAccess.site.name}`;
        return siteAccess;
      });
    }

  }


  get allChildAlerts() {
    return this.siteAccessRequiringAttention.map(x => x.alert);
  }

  canOpen() {
    return this.siteAccessRequiringAttention.length >= 1;
  }
}

enum SiteStatus {
  active = "Active",
  new = "New",
  declined = "Declined",
}
