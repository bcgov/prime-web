import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { SimpleDate } from 'moh-common-lib';

@Component({
  selector: 'enroll-profile-block',
  templateUrl: './profile-block.component.html',
  styleUrls: ['./profile-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileBlockComponent implements OnInit {
  @Input() name: string = 'Melissa Anderson';
  @Input() preferredName = 'Mel Anderson';
  @Input() dateOfBirth: SimpleDate;

  private _dob: string;

  get dob() {
    return this._dob;
  }

  constructor() {
    console.log(this.preferredName);
  }

  ngOnInit() {
    const dob = this.dateOfBirth;
    this._dob = `${dob.month}/${dob.day}/${dob.year}`;
  }
}
