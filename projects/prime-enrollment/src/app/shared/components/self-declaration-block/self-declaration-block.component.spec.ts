import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfDeclarationBlockComponent } from './self-declaration-block.component';

describe('SelfDeclarationBlockComponent', () => {
  let component: SelfDeclarationBlockComponent;
  let fixture: ComponentFixture<SelfDeclarationBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfDeclarationBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfDeclarationBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
