import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmanetAccessComponent } from './pharmanet-access.component';
import { SharedModule } from '../../../../shared/shared.module';

describe('PharmanetAccessComponent', () => {
  let component: PharmanetAccessComponent;
  let fixture: ComponentFixture<PharmanetAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [PharmanetAccessComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmanetAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
