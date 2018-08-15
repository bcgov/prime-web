import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdProofingComponent } from './id-proofing.component';

describe('DashboardComponent', () => {
  let component: IdProofingComponent;
  let fixture: ComponentFixture<IdProofingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdProofingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdProofingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
