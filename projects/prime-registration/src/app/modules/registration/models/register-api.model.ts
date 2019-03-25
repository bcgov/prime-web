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
  userIDMatch: SearchResult;
  emailMatch: SearchResult;
  mobileMatch: SearchResult;
}

export class UserAttrPayload extends ServerPayload {
  userIDMatch: SearchResult;
  emailMatch: SearchResult;
  mobileMatch: SearchResult;

  constructor( payload: UserAttrInterface ) {
    super( payload );
    this.userIDMatch = payload.userIDMatch;
    this.emailMatch = payload.emailMatch;
    this.mobileMatch = payload.mobileMatch;
  }
}

