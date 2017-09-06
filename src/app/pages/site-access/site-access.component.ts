import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../core/base-component/base-component.component';
import { ViewCell } from 'ng2-smart-table';
import { Applicant } from '../../models/applicant.model';
import { ApplicantDataService } from '../../services/applicant-data.service';
import { Colleges } from '../../models/colleges.enum';
import { NamedCollection } from '../../models/named-collections.interface';

@Component({
  selector: 'app-site-access',
  templateUrl: './site-access.component.html',
  styleUrls: ['./site-access.component.scss']
})
export class SiteAccessComponent extends BaseComponent implements OnInit {
  public applicant: Applicant;
  public Colleges: typeof Colleges = Colleges;
  public tableData: NamedCollection[];

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

  constructor(private router: Router,
    private dataStore: ApplicantDataService) {
    super();
    this.applicant = this.dataStore.applicant;
    this.tableData = this.generateTableData(20);
    this.applicant.namedCollections = this.tableData;
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

  back(): void {
    this.router.navigate(['professional-info']);
  }

  /**
   * Randomly generate NamedCollections, useful during development.
   * Each cell is randomized, so the whole row may not be cohesive.
   *
   * @param numberOfRows Number of NamedCollections to generate
   */
  generateTableData(numberOfRows: number) : NamedCollection[]{
    const COLLECTIONS = ["Pharmasave", "Walmart", "VIHA", "Island Sexual Health"];
    const SITENAME = ["845 Jacklin", "Royal Jubilee", "Victoria General Hospital", "Pacific Health Clinic", "Island Sexual Health"];
    const CITY = ["Victoria", "Langford", "Saanich", "Sidney", "Colwood", "Oak Bay"];
    const VENDOR = ["GlaxoSmithKline", "Bayer", "Rochester", "Pfizer", "Merck", "Johnson & Johnson"]
    const SITETYPE = ["Medical Practice", "Emergency Department", "Clinic", "Hospital", "Pharmacy"];
    const POSTAL = ["V9B 1Z2", "V6R 2YK", "V4T 1UA", "V2S R2M"]

    let result = [];

    for (var index = 0; index < numberOfRows; index++) {
      result.push({
        id: index,
        selected: false,
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
