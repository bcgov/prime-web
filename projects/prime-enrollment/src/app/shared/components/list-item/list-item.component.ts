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
import { IOrganization } from '@prime-enrollment/core/interfaces';

@Component({
  selector: 'enroll-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent implements OnInit, OnDestroy {
  @Input() data: IOrganization;
  @Output() selected: EventEmitter<boolean> = new EventEmitter<boolean>();
  fc: FormControl;
  sub: Subscription;

  constructor() {
    this.fc = new FormControl('');
  }

  ngOnInit() {
    this.sub = this.fc.valueChanges.subscribe(obs => {
      this.selected.emit(obs);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  toggled(bool: boolean) {
    return this.selected.emit(bool);
  }
}
