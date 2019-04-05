import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EnrollmentStateService } from '../../services/enrollment-state.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewComponent implements OnInit {
  df: FormGroup;

  constructor(public stateSvc: EnrollmentStateService) {
    this.df = this.stateSvc.declarationForm;
  }

  ngOnInit() {}

  get sdForm() {
    const conviction = {
      question:
        'Have you ever been the subject of an order or a conviction for an information contravention?',
      value: this.dfValues('conviction')
    };

    return [conviction];
  }

  dfValues(name: string) {
    return this.df.controls[name].value;
  }

  formValue(fg: string, name: string) {
    console.log(this.stateSvc[fg].controls[name].value);
    return this.stateSvc[fg].controls[name].value;
  }
}
