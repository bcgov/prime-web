import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { loadInOut, openState, openStateChild, openStateDisable } from '../../../../animations/animations';
import {Site, SiteAccess} from '../../../../models/sites.model';
import {Collection} from '../../../../models/collections.model';
import {EnrollmentRow, EnrollmentRowChild, RowState} from '../../../../core/enrollment-row/enrollment-row.class';

export interface EnrollmentRowItem {
  title: string;
  // TODO: Replace any with new interfaces
  sites: Site[];
  users?: any[];

  /** associatedObjectId and title both refer to the same underlying object. By
   * having an id, we can lookup from the EnrollmentRow -> item, e.g. when
   * navigating between pages */
  associatedObjectId: string;

  /** Optional and only used in one config. */
  collections?: Collection[];
  expandableRows?: SiteAccess[];
}

@Component({
  selector: 'prime-enrollment-row',
  templateUrl: './enrollment-row.component.html',
  styleUrls: ['./enrollment-row.component.scss'],
  animations: [openState, openStateChild, loadInOut, openStateDisable]
})
export class EnrollmentRowComponent extends EnrollmentRow implements OnInit, OnDestroy {

  @Input() rowData: EnrollmentRowItem;
  @Input() primaryType: "User"|"Site" = "Site";

  constructor(private router: Router) {
    super();
  }

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

  ngOnDestroy(){
    // Set all child rows to closed.
    this.siteAccessRequiringAttention.map(x => x.open = false);
  }

  // Abstract function
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

   goToEnrollmentPage(){
    //If user selects details from verifier dash, then go to verifier details
    if (this.router.url.indexOf('/verifier/') > -1) {
      const link = '/verifier/details/' + this.primaryType.toLowerCase();
      this.router.navigate([link, this.rowData.associatedObjectId]);
    //Else if user selects details from provisioner dash, then go to provisioner details
    } else if (this.router.url.indexOf('/provisioner/') > -1) {
       const link = '/provisioner/details/' + this.primaryType.toLowerCase();
       this.router.navigate([link, this.rowData.associatedObjectId]);
     }
    }
  }
