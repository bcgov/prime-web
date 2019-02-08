import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MohContainerComponent } from './moh-container.component';

describe('MohContainerComponent', () => {
  let component: MohContainerComponent;
  let fixture: ComponentFixture<MohContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MohContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MohContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
