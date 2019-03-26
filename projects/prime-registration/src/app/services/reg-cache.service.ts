import { Injectable } from '@angular/core';
import { DocumentType } from '@prime-core/models/documents.interface';
import { CacheService } from '../../../../../src/app/services/cache.service';
import { CacheApiService } from '@prime-core/services/cache-api.service';

/**
 * TODO: Set up service to store data returned from the cache service once
 *       determined how it will be configured/setup
 */

@Injectable({
  providedIn: 'root'
})
export class RegCacheService extends CacheService {

  /**
   * Security NFRs
   *  a) NFR-C: Security - UserID minimum 6 characters in length
   *  b) NFR-C-OCIO: Security - Password minimum 8 characters in length
   */
  public userIDMinLen: string = '6';
  public pwdMinLen: string = '8';


  constructor(protected cacheApiService: CacheApiService) {
    super(cacheApiService);
   }

  /**
   * TODO: Make calls to cache service to retrieve questions, or some other
   *       method that allows modification without changing source code
   *  a) NFR-Configurability - Available security questions
   *  b) NFR-Configurability - Number of security questions to setup
   *
   */
  public numSecQuestion: number = 3;
  public secQuestionList: string[] = [
    'What was your first pet\'s name?',
    'What was the make of your first car?',
    'What was the last name of your favorite teacher?',
    'What was the last name of your childhood best friend?',
    'What is your oldest cousin\'s first name',
    'What town was your father born in?',
    'What town was your mother born in?',
    'Where did you meet your spouse?',
    'What is the name of your favorite book?'
  ];

  DocumentTypes: DocumentType[] = [
    {
      name: 'Driver\'s License',
      tips: 'Scan the document or take a photo of it.  Make sure that it\'s: <br/>-test test'
    },
    {
      name: 'Passport',
      tips: 'passport tips etc etc etc',
    }
  ];
}
