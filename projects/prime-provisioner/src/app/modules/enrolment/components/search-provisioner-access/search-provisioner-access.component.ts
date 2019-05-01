import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'prov-search-provisioner-access',
  template: `
    <div class="row">
      <div class="form-group col-4">
        <label for="searchFc" class="control-label">Provisioner Group</label>
        <input
          class="form-control"
          name="searchFc"
          id="searchFc"
          [formControl]="searchFc"
        />
      </div>
      <div class="form-group col-3">
        <label for="provisionerFc" class="control-label"
          >Search Organization</label
        >
        <ng-select
          name="provisionerFc"
          [formControl]="provisionerFc"
          [items]="orgOptions"
        >
        </ng-select>
      </div>
    </div>
  `,
  styleUrls: ['./search-provisioner-access.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchProvisionerAccessComponent implements OnInit {
  @Input() searchFc: FormControl;
  @Input() provisionerFc: FormControl;
  @Input() orgOptions = [];
  constructor() {}

  ngOnInit() {}
}
