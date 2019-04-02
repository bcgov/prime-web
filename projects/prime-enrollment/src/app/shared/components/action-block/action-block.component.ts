import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'enroll-action-block',
  templateUrl: './action-block.component.html',
  styleUrls: ['./action-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionBlockComponent implements OnInit {
  @Output() clicked = new EventEmitter<boolean>();
  @Input() label: string = 'Click me';
  @Input() text: string = 'Click below';

  constructor() {}

  ngOnInit() {}
}
