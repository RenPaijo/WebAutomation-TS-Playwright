import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../../support/fixtures';
import { RandomCalculatorPage } from '../../pages/chapter8/randomCalculator.page';

const { Given, When, Then } = createBdd(test);

Given('I open the Random calculator page', async ({ page }) => {
  await new RandomCalculatorPage(page).goto();
  await expect(page.getByRole('heading', { name: 'Random calculator' })).toBeVisible();
});

When('I set the wrong-result chance to {string} percent and retries to {string}', async ({ page }, percent: string, retries: string) => {
  const calc = new RandomCalculatorPage(page);
  await calc.percentInput.fill(percent);
  await calc.correctInput.fill(retries);
});

Then('the first displayed result is wrong', async ({ page }) => {
  await expect(new RandomCalculatorPage(page).screen).not.toHaveText('2', { timeout: 20_000 });
});

When('I repeat the same operation until retries run out', async ({ page }) => {
  const calc = new RandomCalculatorPage(page);
  for (let i = 0; i < 5; i += 1) {
    await calc.key('C').click();
    for (const key of ['1', '+', '1', '=']) {
      await calc.key(key).click();
    }
    await page.waitForTimeout(500);
  }
});

When('I set the wrong-result chance to {string} percent', async ({ page }, percent: string) => {
  await new RandomCalculatorPage(page).percentInput.fill(percent);
});

When('I repeat the same operation 1 time', async ({ page }) => {
  const calc = new RandomCalculatorPage(page);
  await calc.key('C').click();
  for (const key of ['9', '-', '3', '=']) {
    await calc.key(key).click();
  }
  await page.waitForTimeout(500);
});

