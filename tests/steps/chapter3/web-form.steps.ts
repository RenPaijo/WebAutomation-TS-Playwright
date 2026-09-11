import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../../support/fixtures';
import { WebFormPage } from '../../pages/chapter3/webForm.page';
import { randomUser } from '../../support/fakerHelper';

const { Given, When, Then } = createBdd(test);

Given('I open the Web form page', async ({ page }) => {
  await new WebFormPage(page).goto();
  await expect(page.getByRole('heading', { name: 'Web form' })).toBeVisible();
});

When('I fill the text input with a random name', async ({ page }) => {
  await new WebFormPage(page).textInput.fill(randomUser().fullName);
});

When('I fill the password and textarea', async ({ page }) => {
  const form = new WebFormPage(page);
  await form.passwordInput.fill('Secret123!');
  await form.textarea.fill('Sample text for the textarea');
});

When('I select the {string} option from the select dropdown', async ({ page }, option: string) => {
  await new WebFormPage(page).selectDropdown.selectOption({ label: option });
});

When('I check the Default checkbox', async ({ page }) => {
  const checkbox = new WebFormPage(page).defaultCheckbox;
  if (!(await checkbox.isChecked())) await checkbox.check();
});

When('I select the Default radio', async ({ page }) => {
  await new WebFormPage(page).defaultRadio.check();
});

Then('the Default checkbox is checked', async ({ page }) => {
  await expect(new WebFormPage(page).defaultCheckbox).toBeChecked();
});

Then('the Default radio is selected', async ({ page }) => {
  await expect(new WebFormPage(page).defaultRadio).toBeChecked();
});

Then('the Disabled input cannot be filled', async ({ page }) => {
  await expect(new WebFormPage(page).disabledInput).toBeDisabled();
});

Then('the Readonly input displays {string}', async ({ page }, value: string) => {
  await expect(new WebFormPage(page).readonlyInput).toHaveValue(value);
});

