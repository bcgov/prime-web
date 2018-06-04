import { Component, OnInit } from '@angular/core';
import { SiteAccess } from '../../../../models/sites.model';
import { PrimeDataService } from '../../../../services/prime-data.service';
import { Person } from '../../../../models/person.model';

@Component({
  selector: 'prime-provisioner-dashboard',
  templateUrl: './provisioner-dashboard.component.html',
  styleUrls: ['./provisioner-dashboard.component.scss']
})
export class ProvisionerDashboardComponent implements OnInit {

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
