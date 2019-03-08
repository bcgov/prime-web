import * as faker from 'faker';

export class FakeDataMohReg {

    profileInfo() {
        return {
            firstName: faker.name.firstName(),
            middleName: Math.random() > 0.5 ? faker.name.firstName() : undefined,
            lastName: faker.name.lastName(),
            birthDate: faker.date.past(),
            country: faker.address.country(),
            address: faker.address.streetAddress(),
            city: faker.address.city(),
            postal: faker.address.zipCode('?#? #?#')
        };
    }
}

// Create interfaces automatically based off the method return types.
// const data = new FakeDataMohReg();
// export type TestProfileInfo = typeof data.randomProfileInfo();

// export interface ProfileDataFields
