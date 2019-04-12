import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'enroll-device-provider',
  templateUrl: './device-provider.component.html',
  styleUrls: ['./device-provider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeviceProviderComponent implements OnInit {
  @Input() fc: FormControl;
  @Input() enableDelete: boolean;
  @Output() remove: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit() {}
}
