import { Injectable } from '@angular/core';
import { Registrant } from '../../../modules/registration/models/registrant.model';
import { Address } from 'moh-common-lib/models/public_api';

/**
 * Dummy data for development purposes
 * 
 * mocks out a response from BCSC, only for dev
 */

@Injectable({
  providedIn: 'root'
})
export class BCSCDummyResponseService {

    constructor() { }

    getBcscRegistrant(): Registrant {
        const data = this.getMockBCSCResponse();
        const reg = new Registrant();
        // TODO - Set all the values in reg with those from data
        reg.firstName = data.firstname;
        reg.lastName = data.lastname;
        reg.dateOfBirth = { month: 2, day: 3, year: 1999 };
        reg.emailAddress = data.email;
        reg.smsPhone = data.mobile;
        reg.address.street = data.street;
        reg.address.city = data.city;
        reg.address.province = data.street;
        reg.address.postal = data.postal;
        reg.address.country = data.country;
        return reg;
    }

    getMockBCSCResponse(): IBCSCResponse {
        return {
            processDate: '123456',
            accountType: "BCSC",
            pdid: '123456',
            assuranceLevel: 3,
            email: 'cfgauss@domain.com',
            mobile: '12221234567', // not sure if leave it blank or put a fake mobile num
            firstname: 'Carl',
            lastname: 'Gauss',
            givennames: 'Carl Fredrich',
            /*
            address: [{street: "123 Leafy Ave",
                        city: "Victoria",
                        province: "BC",
                        postal: "V8C 2P4",
                        country: "CAN"}]
            */
            street: "123 Leafy Ave",
            city: "Victoria",
            province: "BC",
            postal: "V8C 2P4",
            country: "CAN"
        };
        }

    // not sure if i'll use this method since i'm getting the data for city in getMockBCSCResponse()
    /*
    private generateFakeCity(){
        // return 1 of ['Vancouver', 'Victoria', 'Langford']
    }*/
}

export interface IBCSCResponse {
    processDate: string;
    accountType: "BCSC";
    pdid: string;
    assuranceLevel: number;
    email: string;
    mobile: string;
    firstname: string;
    lastname: string;
    givennames: string;
    //address: Address; 
    street: string,
    city: string,
    province: string,
    postal: string,
    country: string
}