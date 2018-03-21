import { Component, OnInit } from '@angular/core';
import { MillerItem } from '../../core/miller-columns/miller-columns.interface';
import { EnrollmentRowItem } from '../../core/enrollment-row/enrollment-row.interface';
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
    },
    {
      id: "2",
      parentId: null,
      title: "Roman Emperors",
      hasChildren: true,
    },
    {
      id: "3",
      parentId: null,
      title: "Aeneas and Company",
      hasChildren: false,
    },
    {
      id: "4",
      parentId: null,
      title: "Self-Help with Sisyphus",
      hasChildren: false,
    },
    {
      id: "5",
      parentId: null,
      title: "Lorem Ipsum",
      hasChildren: false,
    },
    {
      id: "6",
      parentId: "2",
      title: "Julius Caesar",
      hasChildren: false,
    },
    {
      id: "7",
      parentId: "2",
      title: "Trajan",
      hasChildren: false,
    },
    {
      id: "8",
      parentId: "2",
      title: "Hadrian",
      hasChildren: false,
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

  //TODO: Interface
  public enrollmentListDummyData: EnrollmentRowItem[] = [
    {
      title: "London Drugs - All",
      sites: Array(2),
      users: Array(5),
      expandableChildren: []
    },
    {
      title: "Rexall Vancouver Island - All",
      sites: Array(6),
      users: Array(8),
      expandableChildren: [],
    },
    {
      title: "SDM Vancouver Island",
      sites: Array(3),
      users: Array(8),
      expandableChildren: [],
    }
  ]


  ngOnInit() {
    this.generateDummyData();
  }

  generateDummyData() {
    // Make each of the enrollment rows expandable
    this.enrollmentListDummyData = this.enrollmentListDummyData.map(x => {
      x.expandableChildren = [
        {
          title: "Ellen Hunt",
          hasWarning: false,
          hasAlert: true,
        },
        {
          title: "James Smith",
          hasWarning: true,
          hasAlert: false,
        },
        {
          title: "Bob Jones",
          hasWarning: true,
          hasAlert: false,
        }
      ]
      return x;
    })
  }

  ngOnChanges(ev) {
    console.log('DemoPage, ngOnChanges', ev);
  }

}
