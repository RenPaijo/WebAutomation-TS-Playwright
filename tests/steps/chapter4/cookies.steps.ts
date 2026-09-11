import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../../support/fixtures';
import { CookiesPage } from '../../pages/chapter4/cookies.page';

const { Given, When, Then } = createBdd(test);

Given('I open the Cookies page', async ({ page }) => {
  await new CookiesPage(page).goto();
  await expect(page.getByRole('heading', { name: 'Cookies' })).toBeVisible();
});

When('I click the "Display cookies" button', async ({ page }) => {
  await new CookiesPage(page).displayCookiesButton.click();
});

Then('the cookie list displays {string}', async ({ page }, value: string) => {
  await expect(new CookiesPage(page).cookiesList).toContainText(value);
});

When('I add the "testcookie=hello" cookie via the browser', async ({ page, context }) => {
  const origin = new URL(page.url()).origin;
  await context.addCookies([{ name: 'testcookie', value: 'hello', url: origin }]);
});

Then('the cookie list is still empty', async ({ page }) => {
  await expect(new CookiesPage(page).cookiesList).toBeEmpty();
});

