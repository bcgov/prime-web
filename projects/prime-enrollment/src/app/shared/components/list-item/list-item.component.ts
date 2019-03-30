import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
  OnDestroy
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'enroll-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent implements OnInit, OnDestroy {
  @Input() data: string[];
  @Output() selected: EventEmitter<boolean> = new EventEmitter<boolean>();
  fc: FormControl;
  sub: Subscription;

  constructor() {
    this.fc = new FormControl('');
  }

  ngOnInit() {
    this.sub = this.fc.valueChanges.subscribe();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  toggled(bool: boolean) {
    console.log(bool);
    return this.selected.emit(bool);
  }
}
