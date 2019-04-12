import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'enroll-self-declaration-question-block',
  templateUrl: './self-declaration-question-block.component.html',
  styleUrls: ['./self-declaration-question-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelfDeclarationQuestionBlockComponent implements OnInit {
  @Input() question: string;
  @Input() answer: boolean;
  @Input() details: string;
  @Input() documents: string;
  yesNo: string;

  constructor() {}

  ngOnInit() {
    if (this.answer) this.yesNo = 'Yes';
    else this.yesNo = 'No';
  }
}
