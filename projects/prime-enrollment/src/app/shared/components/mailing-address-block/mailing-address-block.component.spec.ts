import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailingAddressBlockComponent } from './mailing-address-block.component';

describe('MailingAddressBlockComponent', () => {
  let component: MailingAddressBlockComponent;
  let fixture: ComponentFixture<MailingAddressBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailingAddressBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailingAddressBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
