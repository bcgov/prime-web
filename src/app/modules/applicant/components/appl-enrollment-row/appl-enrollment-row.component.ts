import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {EnrollmentRowChild, EnrollmentRowItem} from '../../../verifier/components/enrollment-row/enrollment-row.interface';
import {Base} from '../../../../core/base/base.class';
import {loadInOut, openState, openStateChild, openStateDisable} from '../../../../animations/animations';

const TIMING = "250ms";

@Component({
  selector: 'prime-appl-enrollment-row',
  templateUrl: './appl-enrollment-row.component.html',
  styleUrls: ['./appl-enrollment-row.component.scss'],
  animations: [openState, openStateChild, loadInOut, openStateDisable]
})
export class ApplEnrollmentRowComponent extends Base implements OnInit {

  @Input() rowData: EnrollmentRowItem;
  @Input() primaryType: "User" | "Site" = "Site";

  @Output() onRowOpened = new EventEmitter<any>();
  public openState: string = 'closed';

  constructor(private router: Router) {
    super();
  }

  ngOnInit() {
    if (!this.rowData) {
      return;
    }
    this.siteAccessRequiringAttention.map(x => x.open = false);
  }

  @HostBinding('@loadInOut') true;

  toggleRow() {

    if (this.canOpen()) {
      this.openState = this.openState === 'opened' ? 'closed' : 'opened';

      if (this.openState === 'opened') {
        this.onRowOpened.emit(this);
        // First row is open by default
        this.siteAccessRequiringAttention[0].open = open;
      }

    }
  }

  closeRow() {
    this.openState = 'closed';
  }

  expandedRowClick(row: EnrollmentRowChild) {
    this.siteAccessRequiringAttention.map(x => x.open = false);
    row.open = !row.open;
  }

  /*
  ngOnDestroy() {
    // Set all child rows to closed.
    this.siteAccessRequiringAttention.map(x => x.open = false);
  }
  */

  /** This function is responsible for generating site access row titles depending on dashboard type */
  get siteAccessRequiringAttention(): any[] {

    if (!this.rowData || !this.rowData.expandableRows) {
      return [];
    }

    // All this function does is generate titles for Site Access rows.
    return this.rowData.expandableRows.map(siteAccess => {
      siteAccess.title = `${siteAccess.site.name} / ${siteAccess.person.name}`
      return siteAccess;
    });
  }


  get allChildAlerts() {
    return this.siteAccessRequiringAttention.map(x => x.alert);
  }

  canOpen() {
    return this.siteAccessRequiringAttention.length >= 1;
  }

  /*
  goToEnrollmentPage() {
    const link = '/verifier/enrollment/' + this.primaryType.toLowerCase();
    this.router.navigate([link, this.rowData.associatedObjectId]);
  }
*/
}


