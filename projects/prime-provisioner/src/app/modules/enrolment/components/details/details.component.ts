import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'prov-details',
  template: `
    <common-page-section layout="tips">
      <div class="form-group border-top" *ngIf="fg" [formGroup]="fg">
        <label class="control-label" for="fc{{ random }}"></label>

        <textarea
          class="form-control"
          rows="5"
          id="fc{{ random }}"
          [formControlName]="fc"
          placeholder="Please provide details"
        ></textarea>
        <div class="p-3"></div>
        <common-file-uploader
          (imagesChange)="fg.controls[docFc].setValue($event)"
          [id]="random"
        >
        </common-file-uploader>
      </div>
      <aside>Tip</aside>

      <aside>
        <Label>Tip</Label>
        <p>
          Scan the document, or take a photo of it. Make sure that its:
        </p>
        <ul>
          <li>The Entire document, from corner to corner</li>
          <li>At least 1000 px wide x 1500 px tall</li>
          <li>Rotated correctly (not upside down or sideways)</li>
          <li>In focus and easy to read</li>
          <li>A JPG, PNG, GIF, or BMP file (not</li>
        </ul>
      </aside>
    </common-page-section>
  `,
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit {
  @Input() fg: FormGroup;
  @Input() fc: string;
  @Input() docFc: string;
  random: number;
  constructor() {
    this.random = Math.random();
  }

  ngOnInit() {}
}
