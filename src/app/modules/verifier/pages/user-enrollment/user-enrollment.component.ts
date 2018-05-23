import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MillerColumnConfig } from '../../components/miller-columns/miller-columns.interface';
import { PrimeDataService } from '../../../../services/prime-data.service';

@Component({
  selector: 'prime-user-enrollment',
  templateUrl: './user-enrollment.component.html',
  styleUrls: ['./user-enrollment.component.scss']
})
export class UserEnrollmentComponent implements OnInit {
  public millerColumnByUser: MillerColumnConfig;


  constructor(private dataService: PrimeDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.millerColumnByUser = this.dataService.getMillerColumnDataByUser();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.millerColumnByUser.options.preselectObjectId = id;
    }
  }

}
