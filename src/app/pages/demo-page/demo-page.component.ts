import { Component, OnInit } from '@angular/core';
import { MillerColumnConfig } from '../../core/miller-columns/miller-columns.interface';

@Component({
  selector: 'prime-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss']
})
export class DemoPageComponent implements OnInit {

  constructor() { }

  // The Ides of March!
  public demoDate = { year: 2018, month: 3, day: 15 }

  // TODO: Get data from DummyDataService
  public millerColumnDummyDataV2: MillerColumnConfig = {
    data: {
      sites: [],
      collections: [],
      people: [],
    }
  }



  ngOnInit() {
  }


  ngOnChanges(ev) {
    console.log('DemoPage, ngOnChanges', ev);
  }

}
