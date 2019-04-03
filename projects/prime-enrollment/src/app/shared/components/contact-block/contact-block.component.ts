import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'enroll-contact-block',
  templateUrl: './contact-block.component.html',
  styleUrls: ['./contact-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactBlockComponent implements OnInit {
  @Input() phone: string = '1-250-555-5555';
  @Input() email: string = 'mail@mail.com';
  @Input() preferredContact: string = 'Email';
  constructor() {}

  ngOnInit() {}
}
