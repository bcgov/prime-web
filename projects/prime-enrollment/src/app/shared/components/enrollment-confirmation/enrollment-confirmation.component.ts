import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'enroll-enrollment-confirmation',
  template: `
    <prime-confirmation btnLabel="Continue">
      <p message>Your application has been submitted</p>
      <p nextSteps>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </prime-confirmation>
  `,
  styleUrls: ['./enrollment-confirmation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnrollmentConfirmationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
