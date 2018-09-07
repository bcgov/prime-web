import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule} from '@angular/forms';

import { RegLoginMfaComponent } from './reg-login-mfa.component';

fdescribe('RegLoginMfaComponent', () => {
  let component: RegLoginMfaComponent;
  let fixture: ComponentFixture<RegLoginMfaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegLoginMfaComponent
      ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegLoginMfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
