import { faker, fakerID_ID } from '@faker-js/faker';

export interface RandomUser {
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

export function randomUser(): RandomUser {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  return {
    fullName: `${firstName} ${lastName}`,
    firstName,
    lastName,
    email: faker.internet.email({ firstName, lastName }).toLowerCase(),
    // Indonesian locale for phone and address (e.g. +62 numbers, Indonesian streets/cities).
    phone: fakerID_ID.phone.number(),
    address: fakerID_ID.location.streetAddress({ useFullAddress: true }),
  };
}
