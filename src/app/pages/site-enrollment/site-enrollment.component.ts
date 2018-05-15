import { Component, OnInit } from '@angular/core';
import { PrimeDataService } from '../../services/prime-data.service';
import { MillerColumnConfig } from '../../core/miller-columns/miller-columns.interface';


@Component({
  selector: 'prime-site-enrollment',
  templateUrl: './site-enrollment.component.html',
  styleUrls: ['./site-enrollment.component.scss']
})
export class SiteEnrollmentComponent implements OnInit {
  public millerColumnByCollection: MillerColumnConfig;

  constructor(private dataService: PrimeDataService) { }

  ngOnInit() {
    this.millerColumnByCollection = this.dataService.getMillerColumnDataByCollection();
  }

}
