import { Component, OnInit, Input } from '@angular/core';
import { growVertical } from '../../animations/animations';


@Component({
  selector: 'prime-enrollment-progress-row',
  templateUrl: './enrollment-progress-row.component.html',
  styleUrls: ['./enrollment-progress-row.component.scss'],
  animations: [growVertical]
})
export class EnrollmentProgressRowComponent implements OnInit {
  @Input() open: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  get openState(): string {
    return open ? "opened" : "closed";
  }

}
