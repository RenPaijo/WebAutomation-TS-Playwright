import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../../support/fixtures';
import { MouseOverPage } from '../../pages/chapter3/mouseOver.page';

const { Given, When, Then } = createBdd(test);

Given('I open the Mouse over page', async ({ page }) => {
  await new MouseOverPage(page).goto();
  await expect(page.getByRole('heading', { name: 'Mouse over' })).toBeVisible();
});

When('I hover over the compass image', async ({ page }) => {
  await page.locator('.figure img[src*="compass"]').hover();
});

Then('the "Compass" caption is displayed', async ({ page }) => {
  await expect(new MouseOverPage(page).captionByText('Compass')).toBeVisible();
});

When('I hover over the award image', async ({ page }) => {
  await page.locator('.figure img[src*="award"]').hover();
});

Then('the "Award" caption is displayed', async ({ page }) => {
  await expect(new MouseOverPage(page).captionByText('Award')).toBeVisible();
});

Then('all four figure images are displayed', async ({ page }) => {
  await expect(new MouseOverPage(page).figureImages).toHaveCount(4);
});

