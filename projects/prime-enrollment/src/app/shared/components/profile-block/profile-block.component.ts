import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'enroll-profile-block',
  templateUrl: './profile-block.component.html',
  styleUrls: ['./profile-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileBlockComponent implements OnInit {
  @Input() name: string = 'Melissa Anderson';
  @Input() preferredName = 'Mel Anderson';
  @Input() birthDate = '04/07/1981';
  constructor() {}

  ngOnInit() {}
}
