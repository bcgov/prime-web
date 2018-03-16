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
  public demoDate = { year: 2018, month: 3, day: 15 }

  // Tree shaped
  // TODO: Change IDs to GUIDs
  public millerColumnDummyData: MillerItem[] = [
    {
      id: "1",
      parentId: null,
      title: "Example A",
      hasChildren: false,
      // children: [],
    },
    {
      id: "2",
      parentId: null,
      title: "Roman Emperors",
      hasChildren: true,
      // children: [
        // {
        //   id: "2a",
        //   parentId: "2",
        //   title: "Julius Caesar",
        //   children: []
        // },
        // {
        //   id: "2b",
        //   parentId: "2",
        //   title: "Trajan",
        //   children: []
        // },
        // {
        //   id: "2c",
        //   parentId: "2",
        //   title: "Hadrian",
        //   children: []
        // }
      // ],
    },
    {
      id: "3",
      parentId: null,
      title: "Aeneas and Company",
      hasChildren: false,
      // children: [],
    },
    {
      id: "4",
      parentId: null,
      title: "Self-Help with Sisyphus",
      hasChildren: false,
      // children: [],
    },
    {
      id: "5",
      parentId: null,
      title: "Lorem Ipsum",
      hasChildren: false,
      // children: [],
    },
    {
      id: "6",
      parentId: "2",
      title: "Julius Caesar",
      hasChildren: false,
      // children: []
    },
    {
      id: "7",
      parentId: "2",
      title: "Trajan",
      hasChildren: false,
      // children: []
    },
    {
      id: "8",
      parentId: "2",
      title: "Hadrian",
      hasChildren: false,
      // children: []
    },
    {
      id: "9",
      parentId: "6",
      title: "Augustus",
      hasChildren: false,
    },
    {
      id: "10",
      parentId: "9",
      title: "Agrippa",
      hasChildren: false,
    },
    {
      id: "11",
      parentId: "6",
      title: "Cleopatra",
      hasChildren: false,
    },
    {
      id: "12",
      parentId: "6",
      title: "Diadems",
      hasChildren: false,
    },
  ]


  ngOnInit() {
  }

  ngOnChanges(ev) {
    console.log('DemoPage, ngOnChanges', ev);
  }

  // ngDoCheck(ev){
  //   console.log('DemoPage, ngDoCheck', ev, this.demoDate);
  // }

}
