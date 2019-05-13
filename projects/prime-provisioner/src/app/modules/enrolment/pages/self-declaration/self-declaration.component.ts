import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';
import { EnrolmentStateService } from '../../services/enrolment-state.service';
import { IPreferredContactInput } from '@prime-prov/core/interfaces/ipreferred-contact-input';
import { FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'prov-self-declaration',
  template: `
    <common-page-framework layout="blank">
      <prov-page-header
        [title]="title"
        [helperText]="helperText"
      ></prov-page-header>
      <form [formGroup]="fg">
        <div class="form-group">
          <label></label>
          <ng-container *ngFor="let control of controls">
            <label>{{ control.label }}</label>
            <prov-radio-control
              id="conviction"
              [controls]="control.radioOpts"
              (selection)="updateSelection($event, control.fcName, fg)"
              formControlName="{{ control.fcName }}"
            ></prov-radio-control>
            <prov-error
              label="This field"
              [touched]="fg.controls[control.fcName].touched || touched"
              [valid]="
                fg.controls[control.fcName].valid ||
                fg.controls[control.fcName].disabled
              "
            ></prov-error>
            <div class="row"></div>
            <prov-details
              *ngIf="fg.controls[control.fcName].value"
              fc="{{ control.fcName }}Desc"
              docFc="{{ control.fcName }}Docs"
              [fg]="fg"
            ></prov-details>
            <prov-error
              label="A description"
              [touched]="
                fg.controls[control.fcName + 'Desc'].touched || touched
              "
              [valid]="
                fg.controls[control.fcName + 'Desc'].valid ||
                fg.controls[control.fcName + 'Desc'].disabled
              "
            ></prov-error>
            <div class="row"></div>
          </ng-container>
        </div>
      </form>
    </common-page-framework>
  `,
  styleUrls: ['./self-declaration.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelfDeclarationComponent implements OnInit, OnDestroy {
  title = 'Self Declaration';
  helperText = 'Self Declaration - helper text';
  fg = this.stateSvc.selfDeclarationForm;
  urlSub: Subscription[];
  controls: any;
  touched: boolean;
  constructor(
    public stateSvc: EnrolmentStateService,
    private route: ActivatedRoute
  ) {
    this.controls = [
      {
        radioOpts: [
          this.generateRadioOpts('c', false),
          this.generateRadioOpts('c', true)
        ],
        label:
          'Have you ever been the subject of an order or a conviction for an information contravention?',
        fcName: 'conviction'
      },
      {
        radioOpts: [
          this.generateRadioOpts('rs', false),
          this.generateRadioOpts('rs', true)
        ],
        label:
          'Have you ever had your registration with a governing body of a health profession suspended or cancelled?',
        fcName: 'regSuspension'
      },
      {
        radioOpts: [
          this.generateRadioOpts('tc', false),
          this.generateRadioOpts('tc', true)
        ],
        label:
          'Have you ever had Terms and Conditions imposed on your license as a result of disciplinary actions taken by a governing body?',
        fcName: 'tAndC'
      },
      {
        radioOpts: [
          this.generateRadioOpts('ps', false),
          this.generateRadioOpts('ps', true)
        ],
        label:
          'Have you ever had your access to PharmaNet Suspended or revoked?',
        fcName: 'pharmaSuspension'
      }
    ];
  }

  ngOnInit() {
    this.urlSub = [
      this.route.url.subscribe(obs => this.stateSvc.findIndex(obs))
    ];
    this.urlSub.push(
      this.stateSvc.touched$.subscribe(obs => (this.touched = obs))
    );
  }

  ngOnDestroy() {
    this.urlSub.forEach(itm => itm.unsubscribe());
  }

  updateSelection(bool: any, fcName: string, fg: FormGroup) {
    if (typeof bool === undefined) return;
    const controlName = `${fcName}Desc`;
    bool
      ? fg.controls[controlName].setValidators(Validators.required)
      : fg.controls[controlName].clearValidators();
    fg.updateValueAndValidity({ emitEvent: true });
    this.stateSvc.selfDeclarationForm = fg;
  }

  generateRadioOpts(name, value: boolean) {
    name = value ? `${name}yes` : `${name}no`;
    const label = value ? 'Yes' : 'No';
    return {
      value,
      name,
      label,
      id: name
    };
  }
}
