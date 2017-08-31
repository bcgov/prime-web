import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../core/base-component/base-component.component';
import { ViewCell } from 'ng2-smart-table';
import { PrimeTableSelectComponent } from '../../core/prime-table-select/prime-table-select.component'
import { Applicant } from '../../models/applicant';
import { ApplicantDataService } from '../../services/applicant-data.service';

@Component({
  selector: 'app-site-access',
  templateUrl: './site-access.component.html',
  styleUrls: ['./site-access.component.scss']
})
export class SiteAccessComponent extends BaseComponent implements OnInit {
  public applicant: Applicant;

  tableSettings: any = {

    columns: {
      namedCollection: {
        title: 'Named Collection of Sites',
        class: 'nowrap',
      },
      siteName: {
        title: 'Site Name'
      },
      city: {
        title: 'City',
        width: '110px',
      },
      postal: {
        title: 'Postal Code',
        width: '90px',
        class: 'nowrap',
      },
      vendor: {
        title: "Vendor"
      },
      siteType: {
        title: "Site Type"
      }
    },
    actions: {
      edit: false,
      add: false,
      delete: false,
    }

  };

  tableData: any;

  constructor(private router: Router,
    private dataStore: ApplicantDataService) {
    super();
    this.applicant = this.dataStore.applicant;
    this.tableData = this.generateTableData(20);
   }

  ngOnInit() {
  }

  canContinue(): boolean {
    return true;
  }

  continue(): void {
    console.log('---------------\ncontinue');
    this.router.navigate(['contact-info']);
  }

  generateTableData(numberOfRows: number){
    const COLLECTIONS = ["Pharmasave", "Walmart", "VIHA", "Island Sexual Health"];
    const SITENAME = ["845 Jacklin", "Royal Jubilee", "Victoria General Hospital", "Pacific Health Clinic", "Island Sexual Health"];
    const CITY = ["Victoria", "Langford", "Saanich", "Sidney", "Colwood", "Oak Bay"];
    const VENDOR = ["GlaxoSmithKline", "Bayer", "Rochester", "Pfizer", "Merck", "Johnson & Johnson"]
    const SITETYPE = ["Clinic", "Hospital", "Pharmacy"];
    const POSTAL = ["V9B 1Z2", "V6R 2YK", "V4T 1UA", "V2S R2M"]

    let result = [];

    for (var index = 0; index < numberOfRows; index++) {
      result.push({
        id: index,
        selected: false,
        // namedCollection: (() => )
        namedCollection: this.getRandomElFromArray(COLLECTIONS),
        siteName: this.getRandomElFromArray(SITENAME),
        city: this.getRandomElFromArray(CITY),
        postal: this.getRandomElFromArray(POSTAL),
        vendor: this.getRandomElFromArray(VENDOR),
        siteType: this.getRandomElFromArray(SITETYPE)
      })
    }

    return result;
  }

  private getRandomElFromArray(arr: any[]) : any {
    return arr[Math.ceil(Math.random() * arr.length) - 1]
  }

}
