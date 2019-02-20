import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcscConfirmationComponent } from './bcsc-confirmation.component';
import { RegistrationModule } from '../../../registration/registration.module';
import { SharedCoreModule } from '../../../../shared-core/shared-core.module';

describe('BcscConfirmationComponent', () => {
  let component: BcscConfirmationComponent;
  let fixture: ComponentFixture<BcscConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcscConfirmationComponent ],
      imports: [
        RegistrationModule,
        SharedCoreModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcscConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
