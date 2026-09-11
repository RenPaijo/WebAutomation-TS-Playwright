import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../../support/fixtures';
import { LongPage } from '../../pages/chapter4/longPage.page';

const { Given, When, Then } = createBdd(test);

Given('I open the Long page', async ({ page }) => {
  await new LongPage(page).goto();
  await expect(page.getByRole('heading', { name: 'This is a long page' })).toBeVisible();
});

Then('the lorem ipsum content is displayed', async ({ page }) => {
  await expect(new LongPage(page).content).toContainText('Lorem ipsum', { timeout: 20_000 });
});

Then('the bottom of the content is visible', async ({ page }) => {
  await expect
    .poll(
      async () =>
        page.evaluate(
          () => window.scrollY + window.innerHeight >= document.body.scrollHeight - 100,
        ),
      { timeout: 15_000 },
    )
    .toBe(true);
});

