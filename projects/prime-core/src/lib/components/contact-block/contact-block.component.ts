import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'lib-prime-contact-block',
  templateUrl: './contact-block.component.html',
  styleUrls: ['./contact-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactBlockComponent implements OnInit {
  @Input() phone: string = '-';
  @Input() email: string = '-';
  @Input() voicePhone: string = '-';
  @Input() preferredContact: string = '-';
  @Input() ext: string = '-';
  // @Input() contactMethod: string = 'Email';
  constructor() {}

  ngOnInit() {}
}
