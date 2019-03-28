import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'enroll-action-block',
  templateUrl: './action-block.component.html',
  styleUrls: ['./action-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionBlockComponent implements OnInit {
  @Input() action: () => any;
  @Input() label: string = 'Click me';
  @Input() text: string = 'Click below';

  constructor() {
    console.log(this);
  }

  ngOnInit() {}
}
