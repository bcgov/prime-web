import * as faker from 'faker';

export class FakeDataMohReg {

    profileInfo(): ProfilePageTest {
        return {
            firstName: faker.name.firstName(),
            middleName: Math.random() > 0.5 ? faker.name.firstName() : undefined,
            lastName: faker.name.lastName(),
            preferredFirstName: faker.name.firstName(),
            preferredMiddleName: Math.random() > 0.5 ? faker.name.firstName() : undefined,
            preferredLastName: faker.name.lastName(),
            birthDate: faker.date.past(),
            country: faker.address.country(),
            address: faker.address.streetAddress(),
            city: faker.address.city(),
            postal: faker.address.zipCode('?#? #?#')
        };
    }

    setSeed(number){
         faker.seed(number);
    }
}

// TODO - Refactor and improve this so we can create interfaces / types automatically at compiletime based off the return type.
// Create interfaces automatically based off the method return types.
// const data = new FakeDataMohReg();
// export type TestProfileInfo = typeof data.profileInfo();

export interface ProfilePageTest {
  firstName: string;
  middleName: string;
  lastName: string;
  preferredFirstName: string;
  preferredMiddleName: string;
  preferredLastName: string;
  birthDate: Date;
  country: string;
  address: string;
  city: string;
  postal: string;

  /** Currently province is not auto-generated and is manually added during tests. */
  province?: string;
}
