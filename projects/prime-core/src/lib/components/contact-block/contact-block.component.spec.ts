import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBlockComponent } from './contact-block.component';

describe('ContactBlockComponent', () => {
  let component: ContactBlockComponent;
  let fixture: ComponentFixture<ContactBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
