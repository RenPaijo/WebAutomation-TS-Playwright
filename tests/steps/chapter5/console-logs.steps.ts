import { createBdd } from 'playwright-bdd';
import { expect, type Page } from '@playwright/test';
import { test } from '../../support/fixtures';
import { ConsoleLogsPage } from '../../pages/chapter5/consoleLogs.page';

const { Given, Then } = createBdd(test);

// Console + page-error messages captured per test page.
const consoleMessages = new Map<Page, string[]>();

Given('I open the Console logs page while recording the console', async ({ page }) => {
  consoleMessages.set(page, []);
  page.on('console', (message) => {
    consoleMessages.get(page)?.push(`${message.type()}: ${message.text()}`);
  });
  page.on('pageerror', (error) => {
    consoleMessages.get(page)?.push(`pageerror: ${error.message}`);
  });
  await new ConsoleLogsPage(page).goto();
  await page.waitForTimeout(2_000);
});

Then('the console contains log, info, warn, and error messages', async ({ page }) => {
  const messages = consoleMessages.get(page) ?? [];
  // NOTE: Playwright reports console.warn as type "warning".
  const expected: Array<[string, string]> = [
    ['log', 'log:'],
    ['info', 'info:'],
    ['warn', 'warning:'],
    ['error', 'error:'],
  ];
  for (const [label, prefix] of expected) {
    expect(
      messages.some((message) => message.startsWith(prefix)),
      `console has ${label}`,
    ).toBe(true);
  }
});

Then('the console contains the "This a forced error" error', async ({ page }) => {
  const messages = consoleMessages.get(page) ?? [];
  expect(
    messages.some((message) => message.includes('This a forced error')),
    'console has the forced error',
  ).toBe(true);
});

Given('I open the Console logs page', async ({ page }) => {
  await new ConsoleLogsPage(page).goto();
  await expect(page.getByRole('heading', { name: 'Console logs' })).toBeVisible();
});

