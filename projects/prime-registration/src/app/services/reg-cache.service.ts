import { Injectable } from '@angular/core';
import {
  DocumentType,
  CacheService,
  CacheApiService
 } from 'prime-core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

/**
 * Store data retrieved from cache service
 */
@Injectable()
export class RegCacheService extends CacheService {

  /**
   * Security/Configurable NFRs
   *  a) NFR-C: Security - UserID minimum 6 characters in length
   *  b) NFR-C-OCIO: Security - Password minimum 8 characters in length
   *  c) NFR-Configurability - Available security questions
   *
   *  TODO retrive sysParams from cache service
   */
  public userIDMinLen: string = '6';
  public pwdMinLen: string = '8';

  // We use private BehaviorSubjects to cache results instead of having repeat
  // HTTP requests. This way the response is cached for the lifetime of the
  // session.
  private $secQuestionListSubject: BehaviorSubject<string[]> = new BehaviorSubject([]);
  private $documentTypeListSubject: BehaviorSubject<DocumentType[]> = new BehaviorSubject([]);

  constructor( protected cacheApiService: CacheApiService ) {
    super( cacheApiService );

    this.setupBehaviorSubject( 'securityQues', 'secQues', this.$secQuestionListSubject );
    this.setupBehaviorSubject( 'docTypes', 'documentType', this.$documentTypeListSubject );
   }

  /**
   * Security Question List
   * Populated via call to reg/rest/getCache?param=securityQues
   */
  public $secQuestionList: Observable<string[]> = this.$secQuestionListSubject.asObservable();

  /**
   * Document Type List
   * Populated via call to reg/rest/getCache?param=securityQues
   */
  public $documentTypeList: Observable<DocumentType[]> = this.$documentTypeListSubject.asObservable();
}
