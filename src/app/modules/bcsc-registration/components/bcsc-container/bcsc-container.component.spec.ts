import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcscContainerComponent } from './bcsc-container.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedCoreModule } from 'moh-common-lib';

describe('MohContainerComponent', () => {
  let component: BcscContainerComponent;
  let fixture: ComponentFixture<BcscContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcscContainerComponent ],
      imports: [
        RouterTestingModule ,
        SharedCoreModule
      ]
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
