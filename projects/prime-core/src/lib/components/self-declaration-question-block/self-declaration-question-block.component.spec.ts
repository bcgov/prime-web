import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfDeclarationQuestionBlockComponent } from './self-declaration-question-block.component';

describe('SelfDeclarationQuestionBlockComponent', () => {
  let component: SelfDeclarationQuestionBlockComponent;
  let fixture: ComponentFixture<SelfDeclarationQuestionBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfDeclarationQuestionBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfDeclarationQuestionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
