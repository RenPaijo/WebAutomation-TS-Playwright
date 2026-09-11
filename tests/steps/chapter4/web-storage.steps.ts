import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../../support/fixtures';
import { WebStoragePage } from '../../pages/chapter4/webStorage.page';

const { Given, When, Then } = createBdd(test);

Given('I open the Web storage page', async ({ page }) => {
  await new WebStoragePage(page).goto();
  await expect(page.getByRole('heading', { name: 'Web storage' })).toBeVisible();
});

When('I click the "Display session storage" button', async ({ page }) => {
  await new WebStoragePage(page).displaySessionButton.click();
});

Then('the session text displays the name "John" and "Doe"', async ({ page }) => {
  const storage = new WebStoragePage(page).sessionStorageText;
  await expect(storage).toContainText('John');
  await expect(storage).toContainText('Doe');
});

When('I save "city=Jakarta" to local storage', async ({ page }) => {
  await page.evaluate(() => localStorage.setItem('city', 'Jakarta'));
});

When('I click the "Display local storage" button', async ({ page }) => {
  await new WebStoragePage(page).displayLocalButton.click();
});

Then('the local text displays "city" and "Jakarta"', async ({ page }) => {
  const storage = new WebStoragePage(page).localStorageText;
  await expect(storage).toContainText('city');
  await expect(storage).toContainText('Jakarta');
});

Then('the session text is in valid JSON format', async ({ page }) => {
  const text = await new WebStoragePage(page).sessionStorageText.innerText();
  expect(() => JSON.parse(text), 'session text is valid JSON').not.toThrow();
});

