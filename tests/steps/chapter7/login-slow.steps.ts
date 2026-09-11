import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../../support/fixtures';
import { LoginSlowPage } from '../../pages/chapter7/loginSlow.page';

const { Given, When, Then } = createBdd(test);

Given('I open the Slow login form page', async ({ page }) => {
  await new LoginSlowPage(page).goto();
  await expect(page.getByRole('heading', { name: 'Slow login form' })).toBeVisible();
});

Then('the spinner is displayed during the login process', async ({ page }) => {
  await expect(new LoginSlowPage(page).spinner).toBeVisible({ timeout: 10_000 });
});

Then('the spinner appears then disappears', async ({ page }) => {
  const spinner = new LoginSlowPage(page).spinner;
  await expect(spinner).toBeVisible({ timeout: 10_000 });
  await expect(spinner).toBeHidden({ timeout: 15_000 });
});

When('I wait for the login process to finish', async ({ page }) => {
  await expect(new LoginSlowPage(page).spinner).toBeHidden({ timeout: 15_000 });
});

