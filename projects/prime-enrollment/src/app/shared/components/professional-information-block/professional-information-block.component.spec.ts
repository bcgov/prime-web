import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalInformationBlockComponent } from './professional-information-block.component';

describe('ProfessionalInformationBlockComponent', () => {
  let component: ProfessionalInformationBlockComponent;
  let fixture: ComponentFixture<ProfessionalInformationBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalInformationBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalInformationBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
