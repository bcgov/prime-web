import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcscContainerComponent } from './bcsc-container.component';

describe('MohContainerComponent', () => {
  let component: BcscContainerComponent;
  let fixture: ComponentFixture<BcscContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcscContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcscContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
