import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../../support/fixtures';
import { GeolocationPage } from '../../pages/chapter5/geolocation.page';

const { Given, When, Then } = createBdd(test);

Given('I open the Geolocation page', async ({ page }) => {
  await new GeolocationPage(page).goto();
  await expect(page.getByRole('heading', { name: 'Geolocation' })).toBeVisible();
});

When('I grant location permission with latitude {string} and longitude {string}', async ({ context }, lat: string, lon: string) => {
  await context.grantPermissions(['geolocation']);
  await context.setGeolocation({ latitude: Number(lat), longitude: Number(lon) });
});

When('I click the "Get coordinates" button', async ({ page }) => {
  await new GeolocationPage(page).getCoordinatesButton.click();
});

Then('the coordinate text displays the latitude and longitude', async ({ page }) => {
  const coordinates = new GeolocationPage(page).coordinatesText;
  await expect(coordinates).toContainText('Latitude:', { timeout: 15_000 });
  await expect(coordinates).toContainText('Longitude:', { timeout: 15_000 });
});

When('I deny location permission', async ({ page, context }) => {
  await context.clearPermissions();
  // Headless Firefox may leave the position request pending forever, so force
  // the error callback to exercise the page's error handling deterministically.
  await page.addInitScript(() => {
    const stubError = { code: 1, message: 'Permission denied', PERMISSION_DENIED: 1 };
    navigator.geolocation.getCurrentPosition = (_success, error) => {
      error?.(stubError as GeolocationPositionError);
    };
  });
  await page.reload();
});

Then('the coordinate text displays the location access error message', async ({ page }) => {
  await expect(new GeolocationPage(page).coordinatesText).toContainText('Error accessing', {
    timeout: 15_000,
  });
});

Then('the "Get coordinates" button is visible', async ({ page }) => {
  await expect(new GeolocationPage(page).getCoordinatesButton).toBeVisible();
});

