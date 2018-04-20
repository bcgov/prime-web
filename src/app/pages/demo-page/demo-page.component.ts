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

  public millerColumnDummyDataV2: MillerColumnConfig = {
    data: {
      collections: [
        {
          id: "2",
          associationId: null,
          title: "London Drugs - North",
          hasChildren: true,
          hasAlert: true,
          hasWarning: true,
          // open: true,
        },
        {
          id: "1",
          associationId: null,
          title: "London Drugs - South",
          hasChildren: true,
          hasAlert: true,
          hasWarning: false,
        },
      ],
      sites: [
        {
          associationId: "2",
          id: "6",
          title: "London Drugs - 5314",
          hasChildren: true,
          hasAlert: true,
          hasWarning: true,
          // open: true,
        },
        {
          id: "7",
          associationId: "2",
          title: "London Drugs - 6358",
          hasChildren: false,
          hasAlert: false,
          hasWarning: false,
        },
        {
          id: "8",
          associationId: "2",
          title: "Longon Drugs - 9435",
          hasChildren: false,
          hasAlert: false,
          hasWarning: false,
        },
        {
          id: "9",
          associationId: "2",
          title: "Longon Drugs - 1225",
          hasChildren: false,
          hasAlert: false,
          hasWarning: false,
        },
      ],
      people: [
        {
          id: "11",
          associationId: "6",
          title: "James Smith",
          hasChildren: false,
          hasAlert: false,
          hasWarning: false,
          isActive: true,
          checked: true,
        },
        {
          id: "12",
          associationId: "6",
          title: "Mike Chan",
          hasChildren: false,
          hasAlert: false,
          hasWarning: false,
          isActive: true,
        },
        {
          id: "13",
          associationId: "6",
          title: "Liz Montgomery",
          hasChildren: false,
          hasAlert: true,
          hasWarning: false,
        },
        {
          id: "14",
          associationId: "6",
          title: "Ellen Hunt",
          hasChildren: false,
          hasAlert: false,
          hasWarning: true,
        },
      ],
    },
    options: {
      //FIXME: Improve? Change to passing in the array! Just make sure strings always match.
      // primaryColumn: 'People'
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
