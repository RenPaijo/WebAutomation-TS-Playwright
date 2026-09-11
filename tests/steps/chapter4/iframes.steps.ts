import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../../support/fixtures';
import { IFramesPage } from '../../pages/chapter4/iframes.page';

const { Given, When, Then } = createBdd(test);

Given('I open the IFrame page', async ({ page }) => {
  await new IFramesPage(page).goto();
  await expect(page.getByRole('heading', { name: 'IFrame' })).toBeVisible();
});

Then('the iframe is displayed', async ({ page }) => {
  await expect(new IFramesPage(page).iframe).toBeVisible();
});

Then('the content inside the iframe is loaded', async ({ page }) => {
  await expect(new IFramesPage(page).iframeContent).not.toBeEmpty({ timeout: 20_000 });
});

When('I read the content inside the iframe', async ({ page }) => {
  await expect(new IFramesPage(page).iframeContent).toContainText('Lorem ipsum', { timeout: 20_000 });
});

Then('the iframe content text is displayed', async ({ page }) => {
  await expect(new IFramesPage(page).iframeContent).toContainText('Lorem ipsum', { timeout: 20_000 });
});

When('I interact with the content inside the iframe', async ({ page }) => {
  await expect(new IFramesPage(page).iframeContent).not.toBeEmpty({ timeout: 20_000 });
});

When("I return to the page's main content", async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'IFrame' })).toBeVisible();
});

