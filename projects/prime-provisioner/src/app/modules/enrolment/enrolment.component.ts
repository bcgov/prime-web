import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prov-enrolment',
  template: `
    <p>
      enrolment works!
    </p>
  `,
  styleUrls: ['./enrolment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnrolmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
