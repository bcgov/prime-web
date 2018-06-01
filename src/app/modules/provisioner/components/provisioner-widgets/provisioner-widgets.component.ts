import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import * as moment from 'moment';
import { Person } from '../../../../models/person.model';
import { ProvisionerService } from '../../../../services/provisioner.service';
import { SiteAccessProgressSteps, SiteAccess } from '../../../../models/sites.model';
import { EnrollmentStatus } from '../../../../models/enrollment-status.enum';

@Component({
  selector: 'prime-provisioner-widgets',
  templateUrl: './provisioner-widgets.component.html',
  styleUrls: ['./provisioner-widgets.component.scss']
})
export class ProvisionerWidgetsComponent implements OnInit {

  @Input() siteAccess: SiteAccess[] = [];
  @Input() people: Person[] = [];

  public applicationProgressSelector: SiteAccessProgressSteps;

  constructor(private provisionerService: ProvisionerService) { }

  ngOnInit() {
    this.applicationProgressSelector = SiteAccessProgressSteps.Provisioner;

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


  formatDate(date: Date){
    return moment(date).format('DD/MM/YYYY');
  }

  colorScheme = {
    // primary/secondary/etc, from variables.scss
    domain: ['#036', '#fcba19', '#486446', '#96c0e6']
  };

}
