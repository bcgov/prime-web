import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionerDashByUserComponent } from './provisioner-dash-by-user.component';
import { CoreModule } from '../../../../core/core.module';
import { VerifierModule } from '../../../../verifier/verifier.module';
import { PrimeDataService } from '../../../../../services/prime-data.service';
import { VerifierService } from '../../../../../services/verifier.service';
import { ProvisionerService } from '../../../../../services/provisioner.service';

describe('ProvisionerDashByUserComponent', () => {
  let component: ProvisionerDashByUserComponent;
  let fixture: ComponentFixture<ProvisionerDashByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionerDashByUserComponent ],
      imports: [ CoreModule, VerifierModule],
      providers: [ PrimeDataService, VerifierService, ProvisionerService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionerDashByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
