import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import * as moment from 'moment';
import { Person } from '../../../../models/person.model';
import { VerifierService } from '../../../../services/verifier.service';
import { SiteAccessProgressSteps, SiteAccess } from '../../../../models/sites.model';
import { EnrollmentStatus } from '../../../../models/enrollment-status.enum';
@Component({
  selector: 'prime-site-access-widgets',
  templateUrl: './site-access-widgets.component.html',
  styleUrls: ['./site-access-widgets.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SiteAccessWidgetsComponent implements OnInit {
  @Input() siteAccess: SiteAccess[] = [];
  @Input() people: Person[] = [];
  public renewalDateCutoff: number = 30;
  public applicationProgressSelector: SiteAccessProgressSteps;
  public pieChartData;

  @ViewChild('pieChartContainer') pieChartContainer: ElementRef;


  constructor(private verifierService: VerifierService) { }

  //Current max width, but doesn't really play nice with mobile views
  public pieChartDimension: number[] = [];

  ngOnInit() {
    this.applicationProgressSelector = SiteAccessProgressSteps.Verifier;
    this.pieChartData = this.calculatePieChartData();

    // Very hacky and should be for prototype only! Possibly remove/replace
    // entire chart library because this one does not play nicely and on re-size
    // it continually breaks / infinitely grows.  The height value determines if
    // the entire legend is visible.
    this.pieChartDimension = [
      // HACKFIX! Changing the first value here necessary for UX changes and adding site-wide container. Need to fix and do CSS changes later when there's time.
      this.pieChartContainer.nativeElement.offsetWidth - 50,
      this.pieChartContainer.nativeElement.offsetHeight,
    ]
  }

  // Make enum accessible to template
  get SiteAccessProgressSteps() {
    return Object.keys(SiteAccessProgressSteps);
  }

  // Make enum iterable strings accessible in template
  // get EnrollmentStatus() {
  //   return Object.keys(EnrollmentStatus);
  // }
  get EnrollmentStatus(){
    return Object.keys(this.verifierService.VerifierEnrollmentStatus);
  }

  //days: 30/60/90
  // TODO: CHange this so it filters on PEOPLE RENEWAL DATE! Not SA daysUntilExpiry
  upcomingRenewals(days: number){
    // Copy the array so our sorting doesn't mess up other places
    // Don't get records that have a null renewal date
    let people = this.people.concat().filter(p => p.renewalDate);

    // Expiring soon = Beginning of array
    people.sort((a, b) => {
      return a.renewalDate.getTime() - b.renewalDate.getTime();
    });

    return people.filter(person => person.daysUntilRenewalDate <= days);
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
    return this.EnrollmentStatus.map(status => {
      return {
        name: status,
        value: this.siteAccess.filter(sa => sa.status === status).length
      }
    })
  }

  onPieChartClick($event){
    // console.log('onPieChartClick', $event);
    this.verifierService.enrollmentViewTypeSelector = $event.name;
  }

  formatDate(date: Date){
    return moment(date).format('DD/MM/YYYY');
  }


  colorScheme = {
    // primary/secondary/etc, from variables.scss
    domain: ['#036', '#fcba19', '#486446', '#96c0e6']
  };

}
