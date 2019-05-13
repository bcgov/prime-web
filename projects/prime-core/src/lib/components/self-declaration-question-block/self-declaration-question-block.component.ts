import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { CommonImage } from 'moh-common-lib/images/src/images';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'lib-prime-self-declaration-question-block',
  templateUrl: './self-declaration-question-block.component.html',
  styleUrls: ['./self-declaration-question-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelfDeclarationQuestionBlockComponent implements OnInit {
  @Input() question: string;
  @Input() answer: boolean;
  @Input() details: string;
  @Input() documents: Array<CommonImage>;

  documents$: Observable<string>;
  yesNo: string;

  constructor() {}

  ngOnInit() {
    if (this.answer) this.yesNo = 'Yes';
    else this.yesNo = 'No';
    if (this.documents) {
      const res = this.documents
        .map(obj => obj.name)
        .reduce((a, b, i, arr) => a + ', ' + b);

      this.documents$ = of(res);
    }
  }
}
