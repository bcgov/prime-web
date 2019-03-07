// import { browser, by, element } from 'protractor';
import * as faker from 'faker';
// import { Registrant } from 'src/app/modules/registration/models/registrant.model';
// import { Registrant } from '../../src/app/modules/registration/models/registrant.model';

export class FakeData {

    // createRegistrant(): Registrant {
    //     const registrant = new Registrant();
    //     // name


    //     return registrant;
    // }

    randomProfileInfo() {
        return {
            firstName: faker.name.firstName(),
            // middleName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            birthDate: faker.date.past(),
            country: faker.address.country(),
            address: faker.address.streetAddress(),
            city: faker.address.city(),
            postal: faker.address.zipCode('?#? #?#')
        };

    }
}
