import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MohConfirmationComponent } from './moh-confirmation.component';
import { RegistrationModule } from '../../../registration/registration.module';
import { SharedCoreModule } from '../../../../shared-core/shared-core.module';

describe('MohConfirmationComponent', () => {
  let component: MohConfirmationComponent;
  let fixture: ComponentFixture<MohConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MohConfirmationComponent ],
      imports: [
        RegistrationModule,
        SharedCoreModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MohConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
