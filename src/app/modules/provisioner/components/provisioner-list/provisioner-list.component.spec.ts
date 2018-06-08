import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionerListComponent } from './provisioner-list.component';
import { ProvisionerRowComponent } from '../provisioner-row/provisioner-row.component';
import { CoreModule } from '../../../core/core.module';
import { InfoButtonComponent } from '../../../verifier/components/user-info-button/user-info-button.component';
import { EnrollmentProgressRowComponent } from '../../../../core/enrollment-progress-row/enrollment-progress-row.component';
import { FormsModule } from '@angular/forms';

describe('ProvisionerListComponent', () => {
  let component: ProvisionerListComponent;
  let fixture: ComponentFixture<ProvisionerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionerListComponent, ProvisionerRowComponent, InfoButtonComponent, EnrollmentProgressRowComponent ],
      imports: [ CoreModule, FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
