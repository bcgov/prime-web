import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfDeclarationComponent } from './self-declaration.component';
import { PrimeFormFooterComponent } from '../../core/prime-form-footer/prime-form-footer.component'
import { PrimeToggleComponent } from '../../core//prime-toggle/prime-toggle.component';

import { FileUploaderComponent } from '../../core/file-uploader/file-uploader.component'

import { FormsModule } from '@angular/forms';

describe('SelfDeclarationComponent', () => {
  let component: SelfDeclarationComponent;
  let fixture: ComponentFixture<SelfDeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ SelfDeclarationComponent, PrimeFormFooterComponent, PrimeToggleComponent, FileUploaderComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
