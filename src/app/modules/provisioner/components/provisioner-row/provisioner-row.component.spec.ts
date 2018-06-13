import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionerRowComponent } from '../provisioner-row/provisioner-row.component';
import {AlertModule, ProgressbarModule, TooltipModule} from 'ngx-bootstrap';
import { CoreModule } from '../../../core/core.module';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ProgressBarComponent} from '../../../../core/progress-bar/progress-bar.component';
import {PillBadgeComponent} from '../../../../core/pill-badge/pill-badge.component';
import {DatepickerComponent} from '../../../../core/datepicker/datepicker.component';
import {NgxMyDatePickerModule} from 'ngx-mydatepicker';
import {PrimeDataService} from '../../../../services/prime-data.service';

describe('ProvisionerRowComponent', () => {
  let component: ProvisionerRowComponent;
  let fixture: ComponentFixture<ProvisionerRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionerRowComponent ],
      imports: [ AlertModule, CoreModule, FormsModule, RouterTestingModule, NoopAnimationsModule ],
      providers: [PrimeDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionerRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
