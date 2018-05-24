import { Component, OnInit } from '@angular/core';
import { SiteAccess } from '../../../../models/sites.model';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Person } from '../../../../models/prime.models';
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

  get people(): Person[] {
    return this.dataService.people;
  }

}
