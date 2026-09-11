import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../../support/fixtures';
import { FramesPage } from '../../pages/chapter4/frames.page';

const { Given, When, Then } = createBdd(test);

type FrameName = (typeof FramesPage.frameNames)[keyof typeof FramesPage.frameNames];

function frameName(value: string): FrameName {
  expect(Object.values(FramesPage.frameNames)).toContain(value);
  return value as FrameName;
}

Given('I open the Frames page', async ({ page }) => {
  await new FramesPage(page).goto();
});

When('I switch to the {string} frame', async ({ page }, name: string) => {
  const frame = new FramesPage(page).frame(frameName(name));
  expect(frame, `frame "${name}" exists`).not.toBeNull();
});

Then('the header content is displayed', async ({ page }) => {
  const frame = new FramesPage(page).frame(FramesPage.frameNames.header);
  expect(frame, 'header frame exists').not.toBeNull();
  await expect(frame!.locator('body')).not.toBeEmpty();
});

Then('the body content is displayed', async ({ page }) => {
  const frame = new FramesPage(page).frame(FramesPage.frameNames.body);
  expect(frame, 'body frame exists').not.toBeNull();
  await expect(frame!.locator('body')).not.toBeEmpty({ timeout: 20_000 });
});

Then('the footer content is displayed', async ({ page }) => {
  const frame = new FramesPage(page).frame(FramesPage.frameNames.footer);
  expect(frame, 'footer frame exists').not.toBeNull();
  await expect(frame!.locator('body')).not.toBeEmpty();
});

