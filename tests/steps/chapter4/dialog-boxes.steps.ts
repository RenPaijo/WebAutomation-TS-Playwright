import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../../support/fixtures';
import { DialogBoxesPage } from '../../pages/chapter4/dialogBoxes.page';

const { Given, When, Then } = createBdd(test);

Given('I open the Dialog boxes page', async ({ page }) => {
  await new DialogBoxesPage(page).goto();
  await expect(page.getByRole('heading', { name: 'Dialog boxes' })).toBeVisible();
});

When('I click the "Launch alert" button', async ({ page }) => {
  page.once('dialog', async (dialog) => {
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toBe('Hello world!');
    await dialog.accept();
  });
  await new DialogBoxesPage(page).alertButton.click();
});

Then('the alert dialog appears with the "Hello world!" text', async () => {
  // Verified inside the dialog handler above.
});

When('I accept the alert', async () => {
  // The alert was already accepted in the dialog handler above.
});

Then('the alert is closed', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Dialog boxes' })).toBeVisible();
});

When('I click the "Launch confirm" button and accept the dialog', async ({ page }) => {
  page.once('dialog', async (dialog) => {
    expect(dialog.type()).toBe('confirm');
    await dialog.accept();
  });
  await new DialogBoxesPage(page).confirmButton.click();
});

Then('the confirm text displays "You chose: true"', async ({ page }) => {
  await expect(new DialogBoxesPage(page).confirmText).toHaveText('You chose: true');
});

When('I click the "Launch confirm" button and dismiss the dialog', async ({ page }) => {
  page.once('dialog', async (dialog) => {
    expect(dialog.type()).toBe('confirm');
    await dialog.dismiss();
  });
  await new DialogBoxesPage(page).confirmButton.click();
});

Then('the confirm text displays "You chose: false"', async ({ page }) => {
  await expect(new DialogBoxesPage(page).confirmText).toHaveText('You chose: false');
});

When('I click the "Launch prompt" button and enter "John"', async ({ page }) => {
  page.once('dialog', async (dialog) => {
    expect(dialog.type()).toBe('prompt');
    await dialog.accept('John');
  });
  await new DialogBoxesPage(page).promptButton.click();
});

Then('the prompt text displays "You typed: John"', async ({ page }) => {
  await expect(new DialogBoxesPage(page).promptText).toHaveText('You typed: John');
});

When('I click the "Launch modal" button', async ({ page }) => {
  await new DialogBoxesPage(page).modalButton.click();
});

Then('the modal with the "Modal title" heading is displayed', async ({ page }) => {
  const dialogPage = new DialogBoxesPage(page);
  await expect(dialogPage.modal).toBeVisible();
  await expect(dialogPage.modalTitle).toHaveText('Modal title');
});

When('I click the "Save changes" button on the modal', async ({ page }) => {
  await new DialogBoxesPage(page).modalActionButton('Save changes').click();
});

Then('the modal text displays "You chose: Save changes"', async ({ page }) => {
  await expect(new DialogBoxesPage(page).modalText).toHaveText('You chose: Save changes');
});

