import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'enroll-contact-block',
  templateUrl: './contact-block.component.html',
  styleUrls: ['./contact-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactBlockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
