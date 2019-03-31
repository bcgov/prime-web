import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'enroll-list-item-header',
  templateUrl: './list-item-header.component.html',
  styleUrls: ['./list-item-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemHeaderComponent implements OnInit {
  @Input() headers: string[];
  constructor() {
    console.log(this);
  }

  ngOnInit() {
    console.log(this);
  }
}
