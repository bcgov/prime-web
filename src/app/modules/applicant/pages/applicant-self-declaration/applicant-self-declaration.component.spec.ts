import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantSelfDeclarationComponent } from './applicant-self-declaration.component';
import {ApplicantBreadcrumbsComponent} from '../../components/applicant-breadcrumbs/applicant-breadcrumbs.component';
import {RouterTestingModule} from '@angular/router/testing';
import { CoreModule } from '../../../core/core.module';
import { AlertModule } from 'ngx-bootstrap';
import { APP_BASE_HREF } from '@angular/common';
import { ApplicantDataService } from '../../../../services/applicant-data.service';

describe('ApplicantSelfDeclarationComponent', () => {
  let component: ApplicantSelfDeclarationComponent;
  let fixture: ComponentFixture<ApplicantSelfDeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantSelfDeclarationComponent, ApplicantBreadcrumbsComponent],
      imports: [RouterTestingModule, CoreModule, AlertModule.forRoot()],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}, ApplicantDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantSelfDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
