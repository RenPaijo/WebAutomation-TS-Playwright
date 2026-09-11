import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../../support/fixtures';
import { LoadingImagesPage } from '../../pages/chapter3/loadingImages.page';

const { Given, When, Then } = createBdd(test);

Given('I open the Loading images page', async ({ page }) => {
  await new LoadingImagesPage(page).goto();
  await expect(page.getByRole('heading', { name: 'Loading images' })).toBeVisible();
});

When('I wait until all images are loaded', async ({ page }) => {
  await expect(new LoadingImagesPage(page).images).toHaveCount(4, { timeout: 25_000 });
});

Then('the compass, calendar, award, and landscape images are displayed', async ({ page }) => {
  const imagesPage = new LoadingImagesPage(page);
  for (const id of LoadingImagesPage.imageIds) {
    await expect(imagesPage.imageById(id)).toBeVisible();
  }
});

Then('the status text displays "Done!"', async ({ page }) => {
  await expect(new LoadingImagesPage(page).statusText).toHaveText('Done!', { timeout: 25_000 });
});

Then('the spinner is visible while images are not loaded yet', async ({ page }) => {
  await expect(new LoadingImagesPage(page).spinner).toBeVisible({ timeout: 5_000 });
});

