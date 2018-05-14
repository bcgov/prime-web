import { Component, OnInit } from '@angular/core';
import { MillerItem, MillerColumnConfig } from '../../core/miller-columns/miller-columns.interface';
import { EnrollmentRowItem, EnrollmentRowChild, BadgeLevel } from '../../core/enrollment-row/enrollment-row.interface';
import { EnrollmentStatus } from '../../models/prime.models';

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
          alerts: [
            {
              level: BadgeLevel.Danger,
              status: EnrollmentStatus.Declined,
            },
            {
              level: BadgeLevel.Danger,
              status: EnrollmentStatus.Declined,
            },
          ],
        },
        {
          title: "James Smith",
          alerts: [
            {
              level: BadgeLevel.Warning,
              status: EnrollmentStatus.Incomplete
            },
          ],
        },
        {
          title: "Bob Jones",
          alerts: [
            {
              level: BadgeLevel.Warning,
              status: EnrollmentStatus.Pending
            },
            {
              level: BadgeLevel.Warning,
              status: EnrollmentStatus.Pending
            },
          ],
        }
      ]
      return x;
    })
  }

  ngOnChanges(ev) {
    console.log('DemoPage, ngOnChanges', ev);
  }

}
