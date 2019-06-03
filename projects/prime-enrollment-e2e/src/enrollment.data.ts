import * as faker from 'faker';

export class FakeDataEnrollment {

    private seedVal: number = Math.floor(Math.random() * Math.floor(1000));

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
            postal: faker.address.zipCode('?#? #?#'),
        };
    }

    contactInfo(): ContactPageTest {
        return {
            email: faker.internet.email(),
            mobile: faker.phone.phoneNumberFormat(2),
            extension: faker.random.number(3)
        };
    }

    getSeed() {
        return this.seedVal;
    }

    setSeed() {
        faker.seed(this.seedVal);
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

export interface ContactPageTest {
    email: string;
    mobile: string;
    extension: number;
}
