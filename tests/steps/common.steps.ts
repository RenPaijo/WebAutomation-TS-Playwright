import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../support/fixtures';

// Shared steps used by more than one menu. Menu-specific steps live in
// tests/steps/chapterN/<menu>.steps.ts — never redefine these strings there.
const { When, Then } = createBdd(test);

When('I press the Submit button', async ({ page }) => {
  await page.getByRole('button', { name: 'Submit' }).click();
});

Then('the form is submitted to the submitted page', async ({ page }) => {
  await expect(page).toHaveURL(/submitted/);
});

Then('the screen displays {string}', async ({ page }, value: string) => {
  await expect(page.locator('#calculator .screen')).toHaveText(value);
});

When('I press the {string} {string} {string} {string} keys', async ({ page }, first: string, second: string, third: string, fourth: string) => {
  for (const key of [first, second, third, fourth]) {
    await page.locator('#calculator .keys span', { hasText: key }).first().click();
  }
});

When('I wait for the calculation result to appear', async ({ page }) => {
  await expect(page.locator('#calculator .screen')).not.toBeEmpty({ timeout: 20_000 });
});

When('I wait for the page content to load', async ({ page }) => {
  await expect(page.locator('#content')).not.toBeEmpty({ timeout: 20_000 });
});

When('I scroll to the bottom of the page', async ({ page }) => {
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
});

Then('the spinner is no longer visible', async ({ page }) => {
  await expect(page.locator('#spinner')).toBeHidden({ timeout: 20_000 });
});

Then('I am on the login success page', async ({ page }) => {
  await expect(page).toHaveURL(/login-sucess/);
  await expect(page.locator('#success')).toContainText('Login successful');
});

Then('the {string} warning is displayed', async ({ page }, text: string) => {
  await expect(page.locator('#invalid')).toContainText(text);
});

When('I enter username {string} and password {string}', async ({ page }, username: string, password: string) => {
  await page.locator('#username').fill(username);
  await page.locator('#password').fill(password);
});

