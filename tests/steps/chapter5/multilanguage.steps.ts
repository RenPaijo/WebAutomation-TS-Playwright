import { createBdd } from 'playwright-bdd';
import { expect, type Browser, type Page } from '@playwright/test';
import { test } from '../../support/fixtures';
import { MultilanguagePage } from '../../pages/chapter5/multilanguage.page';

const { Given, Then } = createBdd(test);

// The fixture page shares one browser context per worker, so locale-specific
// pages get their own context. Mapped per test via the fixture page.
const localePages = new Map<Page, Page>();

async function openWithLocale(page: Page, browser: Browser, lang: string): Promise<Page> {
  const locale = lang === 'es' ? 'es-ES' : 'en-US';
  const context = await browser.newContext({ locale });
  const langPage = await context.newPage();
  await langPage.goto(MultilanguagePage.url);
  localePages.set(page, langPage);
  return langPage;
}

Given('I open the Multilanguage page with language {string}', async ({ page, browser }, lang: string) => {
  const langPage = await openWithLocale(page, browser, lang);
  await expect(langPage.locator('h1.lang')).not.toBeEmpty({ timeout: 15_000 });
});

function langPageFor(page: Page): Page {
  const langPage = localePages.get(page);
  expect(langPage, 'locale page was opened first').toBeDefined();
  return langPage!;
}

Then('the title displays {string}', async ({ page }, title: string) => {
  await expect(new MultilanguagePage(langPageFor(page)).titleHeading).toHaveText(title, {
    timeout: 15_000,
  });
});

Then('the menu displays {string}, {string}, {string}, and {string}', async ({ page }, first: string, second: string, third: string, fourth: string) => {
  const texts = await new MultilanguagePage(langPageFor(page)).languageItems.allTextContents();
  for (const item of [first, second, third, fourth]) {
    expect(texts, `menu contains "${item}"`).toContain(item);
  }
});

Then('the menu list contains 4 items', async ({ page }) => {
  await expect(new MultilanguagePage(langPageFor(page)).languageItems).toHaveCount(4);
});

