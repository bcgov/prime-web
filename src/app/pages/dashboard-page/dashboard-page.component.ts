import { Component, OnInit } from '@angular/core';
import { PrimeDataService } from '../../services/prime-data.service';
import { SiteAccess } from '../../models/sites.model';

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
