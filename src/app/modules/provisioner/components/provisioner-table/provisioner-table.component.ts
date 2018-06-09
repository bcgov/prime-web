import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Base} from '../../../../core/base/base.class';
import {Router} from '@angular/router';
import {loadInOut, openState, openStateChild, openStateDisable} from '../../../../animations/animations';
import {EnrollmentAlert, Site} from '../../../../models/sites.model';

@Component({
  selector: 'prime-provisioner-table',
  templateUrl: './provisioner-table.component.html',
  styleUrls: ['./provisioner-table.component.scss'],
  animations: [openState, openStateChild, loadInOut, openStateDisable]
})
export class ProvisionerTableComponent extends Base implements OnInit {

  @Input() rowData: Site;
  @Input() primaryType: 'User'|'Site'= 'Site';

  @Output() onRowOpened = new EventEmitter<any>();
  openState: String = 'closed';

  siteNumber: String;
  siteName: string;
  alert: EnrollmentAlert[] = [];
  siteStatus: string ;



  constructor( private router: Router) {
    super()
  }

  ngOnInit() {
    if (!this.rowData ) {return}
    const name =   this.rowData.name;
    this.siteName = name.substring(0, name.lastIndexOf(' ') - 1);
    this.siteNumber = 'Site ' + name.substring(name.lastIndexOf(' ') + 1);
    console.log(' site is ', this.rowData);
    console.log('prodate ' ,this.rowData.provisionedDate);

  }


  get siteAlert() {
    if (this.alert.length < 1) {
      const randomStatusString: string = this.getRandomElFromArray(Object.keys(EnrollmentStatus));
      const status = EnrollmentStatus[randomStatusString];
      this.siteStatus = status;
      this.alert.push(new EnrollmentAlert(status));
    }
    return this.alert;
  }

  private getRandomElFromArray<T>(arr: T[]): T {
    return arr[Math.ceil(Math.random() * arr.length) - 1];
  }



  /*

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

    get siteAccessRequiringAttention(): any[] {

      if ( !this.rowData || !this.rowData.expandableRows ){
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




    canOpen() {
      return this.siteAccessRequiringAttention.length >= 1;
    }
  */
}

enum EnrollmentStatus {
  active = 'Active',
  new = 'New',
  declined = 'Declined',
}
