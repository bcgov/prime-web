import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationQuestionComponent } from './declaration-question.component';

describe('DeclarationQuestionComponent', () => {
  let component: DeclarationQuestionComponent;
  let fixture: ComponentFixture<DeclarationQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
