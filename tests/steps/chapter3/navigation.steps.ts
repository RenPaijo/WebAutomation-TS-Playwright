import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../../support/fixtures';
import { NavigationPage } from '../../pages/chapter3/navigation.page';

const { Given, When, Then } = createBdd(test);

Given('I open Navigation page 1', async ({ page }) => {
  await new NavigationPage(page).goto(1);
  await expect(page.getByRole('heading', { name: 'Navigation example' })).toBeVisible();
});

When('I click pagination number {string}', async ({ page }, number: string) => {
  await new NavigationPage(page).pageLink(Number(number)).click();
});

Then('I am on Navigation page 2', async ({ page }) => {
  await expect(page).toHaveURL(/navigation2/);
});

When('I click the Next button', async ({ page }) => {
  await new NavigationPage(page).nextLink.click();
});

When('I click the "Back to index" link', async ({ page }) => {
  await new NavigationPage(page).backToIndexLink.click();
});

Then('I am back on the index page', async ({ page }) => {
  await expect(page).toHaveURL(/index\.html/);
});
