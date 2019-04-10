import { Injectable } from '@angular/core';
import { Registrant } from '../../registration/models/registrant.model';
import * as faker from 'faker';
import { UUID } from 'angular2-uuid';
import { RegistrationConstants } from '../../registration/models/registration-constants.model';
import { AssuranceLevel, ProviderCode } from '@prime-core/models/prime-constants';

/**
 * Dummy data for development purposes
 *
 * mocks out a response from BCSC, only for dev
 */

@Injectable({
  providedIn: 'root'
})
export class BCSCDummyResponseService {

    private accountTypes = ProviderCode.BCSC;
    private cities = ['Vancouver', 'Victoria', 'Langford'];

    constructor() {

    }

    /**
     * Generates a Registrant with pretend/random data from the BCSC login.
     */
    getBcscRegistrant(): Registrant {
        const data = this.getMockBCSCResponse();
        const reg = new Registrant();
        reg.firstName = data.firstname;
        reg.middleName = Math.random() > 0.5 ? faker.name.firstName() : undefined,
        reg.lastName = data.lastname;
        reg.dateOfBirth = {
          month: data.dateOfBirth.getMonth() + 1,
          day: data.dateOfBirth.getDay() + 1,
          year: data.dateOfBirth.getFullYear()
        };
        // Phone and email should be entered by user, not pre-genereated.
        // reg.emailAddress = data.email;
        // reg.smsPhone = data.mobile;
        reg.address.street = data.street;
        reg.address.city = data.city;
        reg.address.province = RegistrationConstants.BRITISH_COLUMBIA;
        reg.address.postal = data.postal;
        reg.address.country = data.country;
        reg.assuranceLevel = AssuranceLevel.LEVEL_3;
        reg.userAccountName = UUID.UUID().substring(0, 11);

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
            accountType: 'BCSC',
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
            province: RegistrationConstants.BRITISH_COLUMBIA,
            postal: faker.address.zipCode('?#? #?#'),
            country: RegistrationConstants.CANADA
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
