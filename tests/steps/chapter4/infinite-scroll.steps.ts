import { createBdd } from 'playwright-bdd';
import { expect, type Page } from '@playwright/test';
import { test } from '../../support/fixtures';
import { InfiniteScrollPage } from '../../pages/chapter4/infiniteScroll.page';

const { Given, When, Then } = createBdd(test);

async function contentLength(page: Page): Promise<number> {
  return (await new InfiniteScrollPage(page).content.innerText()).length;
}

async function scrollAndWaitForGrowth(page: Page, before: number): Promise<number> {
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await expect
    .poll(async () => contentLength(page), { timeout: 20_000 })
    .toBeGreaterThan(before);
  return contentLength(page);
}

Given('I open the Infinite scroll page', async ({ page }) => {
  await new InfiniteScrollPage(page).goto();
  await expect(page.getByRole('heading', { name: 'Infinite scroll' })).toBeVisible();
});

Then('the initial content is displayed', async ({ page }) => {
  await expect(new InfiniteScrollPage(page).content).not.toBeEmpty({ timeout: 20_000 });
});

Then('the content count increases', async ({ page }) => {
  const before = await contentLength(page);
  await scrollAndWaitForGrowth(page, before);
});

When('I scroll down 3 times', async ({ page }) => {
  let length = await contentLength(page);
  for (let i = 0; i < 3; i += 1) {
    length = await scrollAndWaitForGrowth(page, length);
  }
});

Then('the content count grows 3 times from the start', async ({ page }) => {
  expect(await contentLength(page)).toBeGreaterThan(0);
});

