import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcscAccountComponent } from './bcsc-account.component';
import { RegistrationModule } from '../../../registration/registration.module';
import { SharedCoreModule } from '../../../../shared-core/shared-core.module';

describe('BcscAccountComponent', () => {
  let component: BcscAccountComponent;
  let fixture: ComponentFixture<BcscAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcscAccountComponent ],
      imports: [
        RegistrationModule,
        SharedCoreModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcscAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
