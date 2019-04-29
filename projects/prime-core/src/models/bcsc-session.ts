

export interface BCSCSessionInterface {
  authTrxId: string;      // BCSC Authentication Transaction Identifier related to login session identifier
  authPartyId: string;    // BCSC Authoritative Party Identifier related to login session
  authPartyName: string;  // BCSC Authoritative Party Name related to login session
  userIdType: string;     // BCSC User Identifier Type related to login session
  userType: string;       // BCSC User Identifier Type related to login session
}

/**
 * Class to store the BCSC session information
 */
export class BcscSession {

  public authTrxId: string;
  public authPartyId: string;
  public authPartyName: string;
  public userIdType: string;
  public userType: string;

  /**
   * Note: Once object type is know set the parameter to be as such
   * @param obj
   */
  setSessionData( obj: BCSCSessionInterface ) {

    this.authTrxId = obj.authTrxId;
    this.authPartyId = obj.authPartyId;
    this.authPartyName = obj.authPartyName;
    this.userIdType = obj.userIdType;
    this.userType = obj.userType;
  }

  isEmpty(): boolean {
    return !( this.authPartyId && this.authPartyName &&
              this.userIdType && this.userType && this.authTrxId );
  }
}
