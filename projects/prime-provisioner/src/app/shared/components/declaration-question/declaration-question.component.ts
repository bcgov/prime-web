import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  forwardRef
} from '@angular/core';
import { IPreferredContactInput } from '@prime-prov/core/interfaces/ipreferred-contact-input';
import { FormControl, ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'prov-declaration-question',
  template: `
    <label for="{{ id }}">{{ question }}</label>
  `,
  styleUrls: ['./declaration-question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    { provide: ControlContainer, useExisting: forwardRef(() => NgForm) }
  ]
})
export class DeclarationQuestionComponent implements OnInit {
  @Input() radioConfig: IPreferredContactInput = null;
  @Input() question: string = null;
  @Input() id: string = null;
  @Input() fc: FormControl;

  constructor() {}

  ngOnInit() {}

  updateSelection(itm: string, fc: FormControl) {
    console.log(this.fc);
    console.log(itm);
  }
}
