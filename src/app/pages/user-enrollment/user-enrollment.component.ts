import { Component, OnInit } from '@angular/core';
import { PrimeDataService } from '../../services/prime-data.service';
import { MillerColumnConfig } from '../../core/miller-columns/miller-columns.interface';

@Component({
  selector: 'prime-user-enrollment',
  templateUrl: './user-enrollment.component.html',
  styleUrls: ['./user-enrollment.component.scss']
})
export class UserEnrollmentComponent implements OnInit {
  public millerColumnByUser: MillerColumnConfig;


  constructor(private dataService: PrimeDataService) { }

  ngOnInit() {
    this.millerColumnByUser = this.dataService.getMillerColumnDataByUser();
    // this.millerColumnByUser = this.dataService.getMillerColumnDataByCollection();
  }

}
