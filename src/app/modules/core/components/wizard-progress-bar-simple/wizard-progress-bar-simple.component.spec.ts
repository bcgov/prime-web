import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardProgressBarSimpleComponent } from './wizard-progress-bar-simple.component';
import { AlertModule, ProgressbarModule } from 'ngx-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';

describe('WizardProgressBarComponent', () => {
  let component: WizardProgressBarSimpleComponent;
  let fixture: ComponentFixture<WizardProgressBarSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardProgressBarSimpleComponent ],
      imports: [AlertModule.forRoot(), ProgressbarModule.forRoot(), RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardProgressBarSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
