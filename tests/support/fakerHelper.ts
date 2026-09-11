import { faker } from '@faker-js/faker';

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
    phone: faker.phone.number(),
    address: faker.location.streetAddress({ useFullAddress: true }),
  };
}

export function randomSentence(wordCount = 6): string {
  return faker.lorem.sentence({ min: wordCount, max: wordCount + 4 });
}
