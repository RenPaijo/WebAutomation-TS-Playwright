import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../../support/fixtures';
import { AbTestingPage } from '../../pages/chapter9/abTesting.page';

const { Given, When, Then } = createBdd(test);
const VARIANT_PATTERN = /This is variation [AB]/;

Given(/^I open the A\/B Testing page$/, async ({ page }) => {
  await new AbTestingPage(page).goto();
  await expect(page.getByRole('heading', { name: 'A/B Testing' })).toBeVisible();
});

When('I wait for the variant content to load', async ({ page }) => {
  await expect(new AbTestingPage(page).variationHeading).toBeVisible({ timeout: 20_000 });
});

Then('the variant heading displays "This is variation A" or "This is variation B"', async ({ page }) => {
  await expect(new AbTestingPage(page).variationHeading).toHaveText(VARIANT_PATTERN, {
    timeout: 20_000,
  });
});

Then('the variant heading is displayed', async ({ page }) => {
  await expect(new AbTestingPage(page).variationHeading).toBeVisible({ timeout: 20_000 });
});

Then('the variant description text is displayed', async ({ page }) => {
  await expect(new AbTestingPage(page).variationText).not.toBeEmpty({ timeout: 20_000 });
});

When('I reload the page', async ({ page }) => {
  await page.reload();
});

