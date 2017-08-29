import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../core/base-component/base-component.component';
import { ViewCell } from 'ng2-smart-table';
import { PrimeTableSelectComponent } from '../../core/prime-table-select/prime-table-select.component'

@Component({
  selector: 'app-site-access',
  templateUrl: './site-access.component.html',
  styleUrls: ['./site-access.component.scss']
})
export class SiteAccessComponent extends BaseComponent implements OnInit {

  tableSettings: any = {
    // hideSubHeader: true,

    columns: {
      // selected: {
      //   width: '20px',

      //   title: 'Selected',
      //   type: 'custom',
      //   renderComponent: PrimeTableSelectComponent,
      //   onComponentInitFunction(instance) {
      //     instance.save.subscribe(row => {
      //       console.log(row.namedCollection + (row.selected ? " selected" : " unselected"));
      //       console.log('row', row.namedCollection, row);
      //     });
      //   }
      // },

      namedCollection: {
        title: 'Named Collection of Sites'
      },
      siteName: {
        title: 'Site Name'
      },
      city: {
        title: 'City'
      },
      postal: {
        title: 'Postal Code'
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

  tableData: any = [
    {
      id: 1,
      selected: false,
      namedCollection: "VIHA",
      siteName: "Royal Jubilee",
      city: "Victoria",
      postal: "V8R 2N9",
      vendor: "???",
      siteType: "Example"
    },
    {
      id: 2,
      selected: true,
      namedCollection: "Pharmasave",
      siteName: "845 Yates",
      city: "Victoria",
      postal: "V9B 1Z2",
      // vendor: "???",
      // siteType: "Example"
    },
    {
      id: 3,
      selected: false,
      namedCollection: "Pharmasave",
      siteName: "845 Jacklin",
      city: "Langford",
      postal: "V9B 1Z2",
      // vendor: "???",
      // siteType: "Example"
    },
  ]

  constructor(private router: Router) {
    super();
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

}
