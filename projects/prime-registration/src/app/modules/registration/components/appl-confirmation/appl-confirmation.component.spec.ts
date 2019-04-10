import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplConfirmationComponent } from './appl-confirmation.component';
import { RegistrationModule } from '../../registration.module';
import { SharedCoreModule } from 'moh-common-lib';

describe('MohConfirmationComponent', () => {
  let component: ApplConfirmationComponent;
  let fixture: ComponentFixture<ApplConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplConfirmationComponent ],
      imports: [
        RegistrationModule,
        SharedCoreModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
