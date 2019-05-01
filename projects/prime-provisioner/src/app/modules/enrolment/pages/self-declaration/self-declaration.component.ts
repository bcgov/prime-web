import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EnrolmentStateService } from '../../services/enrolment-state.service';
import { IPreferredContactInput } from '@prime-prov/core/interfaces/ipreferred-contact-input';

@Component({
  selector: 'prov-self-declaration',
  template: `
    <common-page-framework layout="blank">
      <prov-page-header
        [title]="title"
        [helperText]="helperText"
      ></prov-page-header>
      <form [formGroup]="stateSvc.selfDeclarationForm">
        <label></label>
        <ng-container *ngFor="let control of controls">
          <label>{{ control.label }}</label>
          <prov-radio-control
            id="conviction"
            [controls]="control.radioOpts"
            (selection)="updateSelection($event, 'conviction')"
            formControlName="{{ control.fcName }}"
          ></prov-radio-control>
        </ng-container>
      </form>
    </common-page-framework>
  `,
  styleUrls: ['./self-declaration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelfDeclarationComponent implements OnInit {
  title = 'Self Declaration';
  helperText = 'Self Declaration - helper text';
  fg = this.stateSvc.selfDeclarationForm;
  controls: any;
  constructor(public stateSvc: EnrolmentStateService) {
    this.controls = [
      {
        radioOpts: [
          this.generateRadioOpts('c', true),
          this.generateRadioOpts('c', false)
        ],
        label:
          'Have you ever been the subject of an order or a conviction for an information contravention?',
        fcName: 'conviction'
      },
      {
        radioOpts: [
          this.generateRadioOpts('rs', true),
          this.generateRadioOpts('rs', false)
        ],
        label:
          'Have you ever had your registration with a governing body of a health profession suspended or cancelled?',
        fcName: 'regSuspension'
      },
      {
        radioOpts: [
          this.generateRadioOpts('rs', true),
          this.generateRadioOpts('rs', false)
        ],
        label:
          'Have you ever had Terms and Conditions imposed on your license as a result of disciplinary actions taken by a governing body?',
        fcName: 'tAndC'
      },
      {
        radioOpts: [
          this.generateRadioOpts('rs', true),
          this.generateRadioOpts('rs', false)
        ],
        label:
          'Have you ever had your access to PharmaNet Suspended or revoked?',
        fcName: 'pharmaSuspension'
      }
    ];
  }

  ngOnInit() {}

  updateSelection(itm: any, fcName: string) {
    console.log(fcName);
    console.log(itm);
    console.log(this.fg);
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
