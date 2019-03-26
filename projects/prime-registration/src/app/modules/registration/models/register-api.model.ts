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

