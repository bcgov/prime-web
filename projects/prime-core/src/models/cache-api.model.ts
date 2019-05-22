import { ServerPayload, PayloadInterface, StatusMsgInterface } from './api-base.model';
import { DocumentType } from './documents.interface';
import { CountryList , ProvinceList} from 'moh-common-lib';

export interface SysParamInterface {
  name: string;
  value: string;
}

/**
 * Get Cache
 */
export interface CacheInterface extends PayloadInterface {
  country?: CountryList[];
  province?: ProvinceList[];
  messages?: StatusMsgInterface[];
  secQues?: string[];
  documentType?: DocumentType[];
  sysParam?: SysParamInterface[];
}

export class CachePayLoad extends ServerPayload {
  country: CountryList[];
  province: ProvinceList[];
  messages: StatusMsgInterface[];
  secQues: string[];
  documentType: DocumentType[];
  sysParam: SysParamInterface[];

  constructor( payload: CacheInterface ) {
    super( payload );
    this.country = payload.country ? payload.country : undefined;
    this.province = payload.province ? payload.province : undefined;
    this.messages = payload.messages ? payload.messages : undefined;
    this.secQues = payload.secQues ? payload.secQues : undefined;
    this.documentType = payload.documentType ? payload.documentType : undefined;
    this.sysParam = payload.sysParam ? payload.sysParam : undefined;
  }
}

