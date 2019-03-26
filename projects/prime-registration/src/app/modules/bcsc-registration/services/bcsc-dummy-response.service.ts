import { Injectable } from '@angular/core';
import { Registrant } from '../../../modules/registration/models/registrant.model';
import { Address } from 'moh-common-lib/models/public_api';
import * as faker from 'faker';
import { UUID } from 'angular2-uuid';

/**
 * Dummy data for development purposes
 *
 * mocks out a response from BCSC, only for dev
 */

@Injectable({
  providedIn: 'root'
})
export class BCSCDummyResponseService {

    private accountTypes = ['BCSC', 'MOH'];
    private cities = ['Vancouver', 'Victoria', 'Langford'];

    constructor() {

    }

    /**
     * Generates a Registrant with pretend/random data from the BCSC login.
     */
    getBcscRegistrant(): Registrant {
        const data = this.getMockBCSCResponse();
        const reg = new Registrant();
        const dob = data.dateOfBirth;

        reg.firstName = data.firstname;
        reg.middleName = Math.random() > 0.5 ? faker.name.firstName() : undefined,
        reg.lastName = data.lastname;
        reg.dateOfBirth = { month: dob.getMonth(), day: dob.getDay(), year: dob.getFullYear() };
        reg.emailAddress = data.email;
        reg.smsPhone = data.mobile;
        reg.address.street = data.street;
        reg.address.city = data.city;
        reg.address.province = 'BC';
        reg.address.postal = data.postal;
        reg.address.country = data.country;
        reg.assuranceLevel = data.assuranceLevel;
        return reg;
    }

    /**
     * The idea is that this response if from BCSC after a successful OAuth
     * login.  However, we don't have BCSC OAuth setup yet, so we're just
     * mocking the response.
     *
     * Note: Some fields are not on the actual BCSC Response, like eventUUID and
     * clientName, but we'll be POSTING them up so they're generated here for
     * convenience.
     */
    getMockBCSCResponse(): IBCSCResponse {
        return {
            eventUUID: UUID.UUID(),
            clientName: 'regweb',
            processDate: faker.date.past(),
            accountType: this.generateFakeAccountType(),
            pdid: UUID.UUID().substring(0, 11),
            assuranceLevel: faker.random.number(),
            email: faker.internet.email(),
            mobile: faker.phone.phoneNumberFormat(2),
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
            givennames: faker.name.findName(),
            dateOfBirth: faker.date.between('1959-01-01', '1999-01-01'),
            street: faker.address.streetAddress(),
            city: this.generateFakeCity(),
            province: 'BC',
            postal: faker.address.zipCode('?#? #?#'),
            country: 'CAN'
        };
    }

    private generateFakeAccountType() {
        const index = Math.floor(Math.random() * Math.floor(this.accountTypes.length));
        return this.accountTypes[index];
    }

    private generateFakeCity() {
        const index = Math.floor(Math.random() * Math.floor(this.cities.length));
        return this.cities[index];
    }

}

export interface IBCSCResponse {
    eventUUID: string;
    clientName: string;
    processDate: Date;
    accountType: string;
    pdid: string;
    assuranceLevel: number;
    email: string;
    mobile: string;
    firstname: string;
    lastname: string;
    givennames: string;
    dateOfBirth: Date;
    street: string;
    city: string;
    province: string;
    postal: string;
    country: string;
}
