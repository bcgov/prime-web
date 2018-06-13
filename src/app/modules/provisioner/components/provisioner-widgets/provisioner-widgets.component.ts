import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import * as moment from 'moment';
import { Person } from '../../../../models/person.model';
import { ProvisionerService } from '../../../../services/provisioner.service';
import { SiteAccessProgressSteps, SiteAccess } from '../../../../models/sites.model';
import { EnrollmentStatus } from '../../../../models/enrollment-status.enum';

@Component({
  selector: 'prime-provisioner-widgets',
  templateUrl: './provisioner-widgets.component.html',
  styleUrls: ['./provisioner-widgets.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProvisionerWidgetsComponent implements OnInit {

  @Input() siteAccess: SiteAccess[] = [];
  @Input() people: Person[] = [];
  public applicationProgressSelector: SiteAccessProgressSteps;
  public pieChartData;

  @ViewChild('pieChartContainer') pieChartContainer: ElementRef;

  constructor(private provisionerService: ProvisionerService) { }

  //Current max width, but doesn't really play nice with mobile views
  public pieChartDimension: number[] = [];

  ngOnInit() {
    this.applicationProgressSelector = SiteAccessProgressSteps.Provisioner;
    this.pieChartData = this.calculatePieChartData();

    // Very hacky and should be for prototype only! Possibly remove/replace
    // entire chart library because this one does not play nicely and on re-size
    // it continually breaks / infinitely grows.  The height value determines if
    // the entire legend is visible.
    this.pieChartDimension = [
      this.pieChartContainer.nativeElement.offsetWidth,
      this.pieChartContainer.nativeElement.offsetHeight,
    ]
  }

  // Make enum accessible to template
  get SiteAccessProgressSteps() {
    return Object.keys(SiteAccessProgressSteps);
  }

  // Make enum iterable strings accessible in template
  get EnrollmentStatus() {
    return Object.keys(EnrollmentStatus);
  }


  applicationProgress(){
    let selection: SiteAccessProgressSteps = this.applicationProgressSelector;

    // Copy the array so our sorting doesn't mess up other places
    let result: SiteAccess[] = this.siteAccess.concat();
    // Filter to only show 'problem' results, to match enrollment list
    result = result.filter(x => x.alert);

    return result.filter(sa => sa.progress === selection);
  }

  calculatePieChartData() : {name: string, value: number}[] {
    const validStatusNamesArr = [EnrollmentStatus.Active.valueOf(), EnrollmentStatus.Declined.valueOf(), EnrollmentStatus.New.valueOf()]

    const statusArr = this.EnrollmentStatus.map(status => {
      return {
        name: status,
        value: this.siteAccess.filter(sa => sa.status === status ).length
      }
    })

    return statusArr.filter(itm => {
      return validStatusNamesArr.indexOf(itm.name) > -1;
    });
  }

  onPieChartClick($event){
    // console.log('onPieChartClick', $event);
    this.provisionerService.enrollmentViewTypeSelector = $event.name;
  }

  formatDate(date: Date){
    return moment(date).format('DD/MM/YYYY');
  }

  colorScheme = {
    // primary/secondary/etc, from variables.scss
    domain: ['#036', '#fcba19', '#486446', '#96c0e6']
  };

}
