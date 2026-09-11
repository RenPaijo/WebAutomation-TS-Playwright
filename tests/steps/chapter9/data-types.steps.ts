import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { faker, fakerID_ID } from '@faker-js/faker';
import { test } from '../../support/fixtures';
import { DataTypesPage } from '../../pages/chapter9/dataTypes.page';
import { randomUser } from '../../support/fakerHelper';

const { Given, When, Then } = createBdd(test);

Given('I open the Data types page', async ({ page }) => {
  await new DataTypesPage(page).goto();
  await expect(page.getByRole('heading', { name: 'Data types' })).toBeVisible();
});

When('I fill all fields with random user data', async ({ page }) => {
  const user = randomUser();
  const form = new DataTypesPage(page);
  await form.firstNameInput.fill(user.firstName);
  await form.lastNameInput.fill(user.lastName);
  await form.addressInput.fill(user.address);
  await form.zipCodeInput.fill(fakerID_ID.location.zipCode());
  await form.cityInput.fill(fakerID_ID.location.city());
  await form.countryInput.fill('Indonesia');
  await form.emailInput.fill(user.email);
  await form.phoneInput.fill(user.phone);
  await form.jobPositionInput.fill(faker.person.jobTitle());
  await form.companyInput.fill(faker.company.name());
});

When('I fill only the first name and last name', async ({ page }) => {
  const form = new DataTypesPage(page);
  await form.firstNameInput.fill(faker.person.firstName());
  await form.lastNameInput.fill(faker.person.lastName());
});

When('I fill a valid random email and phone number', async ({ page }) => {
  const user = randomUser();
  const form = new DataTypesPage(page);
  await form.emailInput.fill(user.email);
  await form.phoneInput.fill(user.phone);
});
