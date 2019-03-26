import { ServerPayload, PayloadInterface, StatusMsgInterface } from './api-base.model';
import { DocumentType } from '@prime-core/models/documents.interface';
import { CountryList, ProvinceList } from '@prime-core/prime-shared/components/address/address.component';

export interface SysParamInterface {
  paramCode: string;
  paramValue: string;
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
  sysParm: SysParamInterface[];

  constructor( payload: CacheInterface ) {
    super( payload );
    this.country = payload.country ? payload.country : undefined;
    this.province = payload.province ? payload.province : undefined;
    this.messages = payload.messages ? payload.messages : undefined;
    this.secQues = payload.secQues ? payload.secQues : undefined;
    this.documentType = payload.documentType ? payload.documentType : undefined;
    this.sysParm = payload.sysParam ? payload.sysParam : undefined;
  }
}

