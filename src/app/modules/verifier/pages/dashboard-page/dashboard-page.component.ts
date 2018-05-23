import { Component, OnInit } from '@angular/core';
import { SiteAccess } from '../../../../models/sites.model';
import { PrimeDataService } from '../../../../services/prime-data.service';
@Component({
  selector: 'prime-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  constructor(private dataService: PrimeDataService) { }

  ngOnInit() {
  }

  get siteAccesses(): SiteAccess[] {
    return this.dataService.siteAccesses;
  }

}
