import { createBdd } from 'playwright-bdd';
import { expect, type Download, type Page } from '@playwright/test';
import { test } from '../../support/fixtures';
import { DownloadFilesPage } from '../../pages/chapter9/downloadFiles.page';

const { Given, When, Then } = createBdd(test);
const downloads = new Map<Page, Download>();

Given('I open the Download files page', async ({ page }) => {
  await new DownloadFilesPage(page).goto();
  await expect(page.getByRole('heading', { name: 'Download files' })).toBeVisible();
});

When('I click the "WebDriverManager logo" link', async ({ page }) => {
  const downloadPromise = page.waitForEvent('download', { timeout: 20_000 });
  await new DownloadFilesPage(page).webDriverManagerLogoLink.click();
  downloads.set(page, await downloadPromise);
});

Then('the "webdrivermanager.png" file is downloaded', async ({ page }) => {
  const download = downloads.get(page);
  expect(download, 'download was captured').toBeDefined();
  expect(download!.suggestedFilename()).toBe('webdrivermanager.png');
  const path = await download!.path();
  expect(path, 'download has a file path').toBeTruthy();
});

When('I click the "WebDriverManager doc" link', async ({ page }) => {
  const downloadPromise = page.waitForEvent('download', { timeout: 20_000 });
  await new DownloadFilesPage(page).webDriverManagerDocLink.click();
  downloads.set(page, await downloadPromise);
});

Then('the "webdrivermanager.pdf" file is downloaded', async ({ page }) => {
  const download = downloads.get(page);
  expect(download, 'download was captured').toBeDefined();
  expect(download!.suggestedFilename()).toBe('webdrivermanager.pdf');
  const path = await download!.path();
  expect(path, 'download has a file path').toBeTruthy();
});

Then('the WebDriverManager logo and doc download links are available', async ({ page }) => {
  const downloadPage = new DownloadFilesPage(page);
  await expect(downloadPage.webDriverManagerLogoLink).toBeVisible();
  await expect(downloadPage.webDriverManagerDocLink).toBeVisible();
});

Then('the Selenium-Jupiter logo and doc download links are available', async ({ page }) => {
  const downloadPage = new DownloadFilesPage(page);
  await expect(downloadPage.seleniumJupiterLogoLink).toBeVisible();
  await expect(downloadPage.seleniumJupiterDocLink).toBeVisible();
});

