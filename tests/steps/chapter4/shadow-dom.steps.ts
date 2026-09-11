import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../../support/fixtures';
import { ShadowDomPage } from '../../pages/chapter4/shadowDom.page';

const { Given, When, Then } = createBdd(test);

Given('I open the Shadow DOM page', async ({ page }) => {
  await new ShadowDomPage(page).goto();
  await expect(page.getByRole('heading', { name: 'Shadow DOM' })).toBeVisible();
});

Then('the "Hello Shadow DOM" text is displayed inside the shadow root', async ({ page }) => {
  // Playwright pierces open shadow DOM automatically.
  await expect(page.getByText(ShadowDomPage.shadowText)).toBeVisible();
});

Then('the content host element is available', async ({ page }) => {
  await expect(new ShadowDomPage(page).shadowHost).toBeVisible();
});

When('I access the shadow root from the host element', async ({ page }) => {
  const mode = await new ShadowDomPage(page).shadowHost.evaluate(
    (host) => (host.shadowRoot ? host.shadowRoot.mode : 'none'),
  );
  expect(mode).toBe('open');
});

Then('the shadow root is in open mode', async ({ page }) => {
  const mode = await new ShadowDomPage(page).shadowHost.evaluate(
    (host) => (host.shadowRoot ? host.shadowRoot.mode : 'none'),
  );
  expect(mode).toBe('open');
});

