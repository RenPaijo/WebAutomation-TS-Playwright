import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../../support/fixtures';
import { GetUserMediaPage } from '../../pages/chapter5/getUserMedia.page';

const { Given, When, Then } = createBdd(test);

Given('I open the Get user media page', async ({ page }) => {
  await new GetUserMediaPage(page).goto();
  await expect(page.getByRole('heading', { name: 'Get user media' })).toBeVisible();
});

When('I click the "Start" button', async ({ page }) => {
  await new GetUserMediaPage(page).startButton.click();
});

Then('the video element plays the stream', async ({ page }) => {
  await expect
    .poll(
      async () =>
        new GetUserMediaPage(page).video.evaluate((video) => (video as HTMLVideoElement).readyState),
      { timeout: 20_000 },
    )
    .toBeGreaterThanOrEqual(2);
});

Then('the video device info text is displayed', async ({ page }) => {
  await expect(new GetUserMediaPage(page).videoDeviceText).not.toBeEmpty({ timeout: 20_000 });
});

Then('the video element is visible', async ({ page }) => {
  await expect(new GetUserMediaPage(page).video).toBeVisible();
});

Then('the "Start" button is visible', async ({ page }) => {
  await expect(new GetUserMediaPage(page).startButton).toBeVisible();
});

