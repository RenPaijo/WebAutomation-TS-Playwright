import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../../support/fixtures';
import { LoginFormPage } from '../../pages/chapter7/loginForm.page';

const { Given, When, Then } = createBdd(test);

Given('I open the Login form page', async ({ page }) => {
  await new LoginFormPage(page).goto();
  await expect(page.getByRole('heading', { name: 'Login form' })).toBeVisible();
});

Then('the "Login successful" text is displayed', async ({ page }) => {
  await expect(page.locator('#success')).toContainText('Login successful');
});

Then('I stay on the Login form page', async ({ page }) => {
  await expect(page).toHaveURL(/login-form/);
  await expect(page.locator('#invalid')).toBeVisible();
});

When('I press the Submit button without entering a username and password', async ({ page }) => {
  await page.getByRole('button', { name: 'Submit' }).click();
});

