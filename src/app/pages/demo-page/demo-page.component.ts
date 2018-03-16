import { Component, OnInit } from '@angular/core';
import { MillerItem } from '../../core/miller-columns/miller-columns.interface';
@Component({
  selector: 'prime-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss']
})
export class DemoPageComponent implements OnInit {

  constructor() { }

  // The Ides of March!
  public demoDate = {year: 2018, month: 3, day: 15}

  // Tree shaped
  public millerColumnDummyData: MillerItem[] = [
    {
      title: "Example A",
      children: [],
    },
    {
      title: "Roman Emperors",
      children: [
        {
          title: "Julius Caesar",
          children: []
        },
        {
          title: "Trajan",
          children: []
        },
        {
          title: "Hadrian",
          children: []
        }
      ],
    },
    {
      title: "Aeneas and Company",
      children: [],
    },
    {
      title: "Self-Help with Sisyphus",
      children: [],
    },
    {
      title: "Lorem Ipsum",
      children: [],
    }
  ]

  ngOnInit() {
  }

  ngOnChanges(ev){
    console.log('DemoPage, ngOnChanges', ev);
  }

  // ngDoCheck(ev){
  //   console.log('DemoPage, ngDoCheck', ev, this.demoDate);
  // }

}
