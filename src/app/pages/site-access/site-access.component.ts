import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../core/base-component/base-component.component';

@Component({
  selector: 'app-site-access',
  templateUrl: './site-access.component.html',
  styleUrls: ['./site-access.component.scss']
})
export class SiteAccessComponent extends BaseComponent implements OnInit {

  tableSettings: any = {
    columns: {
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
    }
  };

  tableData: any = [
    {
      id: 1,
      namedCollection: "Leanne Graham",
      siteName: "Bret",
      city: "Sincere@april.biz",
      postal: "V8R 2N9",
      vendor: "???",
      siteType: "Example"
    },
    {
      id: 2,
      namedCollection: "Leanne Graham",
      siteName: "Bret",
      city: "Sincere@april.biz",
      postal: "V8R 2N9",
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
