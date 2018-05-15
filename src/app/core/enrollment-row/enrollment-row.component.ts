import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { EnrollmentRowItem, EnrollmentRowChild } from './enrollment-row.interface';
import { Router } from '@angular/router'
import { openState, openStateChild, loadInOut, openStateDisable } from '../../animations/animations';
import { Base } from '../base/base.class';


const TIMING = "250ms";
@Component({
  selector: 'prime-enrollment-row',
  templateUrl: './enrollment-row.component.html',
  styleUrls: ['./enrollment-row.component.scss'],
  animations: [openState, openStateChild, loadInOut, openStateDisable]
})
export class EnrollmentRowComponent extends Base implements OnInit {
  @Input() rowData: EnrollmentRowItem;
  @Input() primaryType: "User"|"Site" = "Site";

  @Output() onRowOpened = new EventEmitter<any>();
  public openState: string = 'closed';

  constructor(private router: Router) {
    super();
  }

  ngOnInit() {
    this.siteAccessRequiringAttention.map(x => x.open = false);
  }

  @HostBinding('@loadInOut') true;

  toggleRow() {

    if (this.canOpen()){
      this.openState = this.openState === 'opened' ? 'closed' : 'opened';

      if (this.openState === 'opened'){
        this.onRowOpened.emit(this);
        // First row is open by default
        this.siteAccessRequiringAttention[0].open = open;
      }

    }
  }

  closeRow() {
    this.openState = 'closed';
  }

  expandedRowClick(row: EnrollmentRowChild){;
    this.siteAccessRequiringAttention.map(x => x.open = false);
    row.open = !row.open;
  }

  ngOnDestroy(){
    // Set all child rows to closed.
    this.siteAccessRequiringAttention.map(x => x.open = false);
  }

  /** This function is responsible for generating site access row titles depending on dashboard type */
  get siteAccessRequiringAttention(): any[] {

    if ( !this.rowData.expandableRows ){
      return [];
    }

    // All this function does is generate titles for Site Access rows.
    if (this.primaryType === "Site"){
      return this.rowData.expandableRows.map(siteAccess => {
        siteAccess.title = `${siteAccess.site.name} / ${siteAccess.person.name}`
        return siteAccess;
      });
    }
    else {
      return this.rowData.expandableRows.map(siteAccess => {
        siteAccess.title = `${siteAccess.site.name}`
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

  goToEnrollmentPage(rowData){
    const link = '/enrollment/' + this.primaryType.toLowerCase();
    this.router.navigate([link]);
  }

}
