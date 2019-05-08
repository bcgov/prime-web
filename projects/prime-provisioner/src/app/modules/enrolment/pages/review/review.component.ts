import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnrolmentStateService } from '../../services/enrolment-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'prov-review',
  template: `
    <common-page-framework layout="blank">
      <prov-page-header
        [title]="title"
        [helperText]="helperText"
      ></prov-page-header>
    </common-page-framework>
  `,
  styleUrls: ['./review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewComponent implements OnInit, OnDestroy {
  urlSub: Subscription;
  title = 'Application Review';
  helperText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit..';
  constructor(
    private route: ActivatedRoute,
    private stateSvc: EnrolmentStateService
  ) {}

  ngOnInit() {
    this.urlSub = this.route.url.subscribe(obs => this.stateSvc.findIndex(obs));
  }

  ngOnDestroy() {
    this.urlSub.unsubscribe();
  }
}
