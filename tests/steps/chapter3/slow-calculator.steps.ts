import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../../support/fixtures';
import { SlowCalculatorPage } from '../../pages/chapter3/slowCalculator.page';

const { Given, When, Then } = createBdd(test);

Given('I open the Slow calculator page', async ({ page }) => {
  await new SlowCalculatorPage(page).goto();
  await expect(page.getByRole('heading', { name: 'Slow calculator' })).toBeVisible();
});

When('I change the delay to {string} second', async ({ page }, seconds: string) => {
  await new SlowCalculatorPage(page).delayInput.fill(seconds);
});

When('I press the {string} {string} {string} keys', async ({ page }, first: string, second: string, third: string) => {
  const calc = new SlowCalculatorPage(page);
  for (const key of [first, second, third]) {
    await calc.key(key).click();
  }
});

When('I press the {string} key', async ({ page }, key: string) => {
  await new SlowCalculatorPage(page).key(key).click();
});

Then('the screen is empty', async ({ page }) => {
  await expect(new SlowCalculatorPage(page).screen).toBeEmpty();
});

