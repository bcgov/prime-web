import { PayloadInterface, ServerPayload } from '@prime-core/models/api-base.model';

/**
 * Return structure for searches return from back-end
 */
export interface SearchResult {
  matchFound: boolean;
  msgID: string;
  msgText: string;
}

/**
 * Message structure for request to verify user based on attributes
 * i.e email, userID, mobile phone number
 * MOH_REG_10_RQ/MOH_REG_10_RS
 */
export interface UserAttrInterface extends PayloadInterface {
  userIDMatch?: SearchResult;
  pdidMatch?: SearchResult;
  emailMatch: SearchResult;
  mobileMatch: SearchResult;
}

export class UserAttrPayload extends ServerPayload {
  userIDMatch: SearchResult;
  pdidMatch: SearchResult;
  emailMatch: SearchResult;
  mobileMatch: SearchResult;

  constructor( payload: UserAttrInterface ) {
    super( payload );
    this.userIDMatch = payload.userIDMatch ? payload.userIDMatch : undefined;
    this.pdidMatch = payload.pdidMatch ? payload.pdidMatch : undefined;
    this.emailMatch = payload.emailMatch;
    this.mobileMatch = payload.mobileMatch;
  }
}

export interface SecurityQuestionsAnswers {
  name: string;
  value: string;
}

export interface AddressInterface {
  street: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
}

export interface RegRequestInterface {
  clientName: string;
  processDate: string;
  providerCode: string;   // BCSC (MoH is on-hold until further notice)

  // BCSC information
  authPartyId?: string;    // BCSC Authoritative Party Identifier related to login session
  authPartyName?: string;  // BCSC Authoritative Party Name related to login session
  userIdType?: string;     // BCSC User Identifier Type related to login session
  userType?: string;       // BCSC User Identifier Type related to login session
}

export interface CheckUserAttr extends RegRequestInterface {
  userId?: string;
  pdid?: string;
  email: string;
  mobile: string;
}

export interface RegisterUser extends RegRequestInterface {
  assuranceLevel: string;           // BCSC assurance level = 3
  pdid?: string;
  userId?: string;                  // Currently unused (MoH is on-hold until further notice)
  email: string;
  mobile: string;
  securityQuestions: SecurityQuestionsAnswers[];
  firstname: string;
  lastname: string;
  givennames: string;                // Concatenation of First and middle names
  dateOfBirth: string;               // DOB format 'YYYYMMDD'
  preffirstname: string;             // Field must be present in message, but data can be null
  preflastname: string;              // Field must be present in message, but data can be null
  prefmiddlename: string;            // Field must be present in message, but data can be null
  address: AddressInterface;
  mailingAddress: AddressInterface; // Field must be present in message, but data can be null
}


