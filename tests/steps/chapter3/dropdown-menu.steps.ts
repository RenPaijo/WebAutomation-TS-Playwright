import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../../support/fixtures';
import { DropdownMenuPage } from '../../pages/chapter3/dropdownMenu.page';

const { Given, When, Then } = createBdd(test);

Given('I open the Dropdown menu page', async ({ page }) => {
  await new DropdownMenuPage(page).goto();
  await expect(page.getByRole('heading', { name: 'Dropdown menu' })).toBeVisible();
});

When('I left-click the "Use left-click here" button', async ({ page }) => {
  await new DropdownMenuPage(page).leftClickButton.click();
});

Then('the menu list is displayed', async ({ page }) => {
  await expect(new DropdownMenuPage(page).menuItems.first()).toBeVisible();
});

When('I select the "Action" menu item', async ({ page }) => {
  await new DropdownMenuPage(page).menuItem('Action').first().click();
});

Then('the menu list is closed', async ({ page }) => {
  await expect(new DropdownMenuPage(page).menuItems.first()).toBeHidden();
});

When('I right-click the "Use right-click here" button', async ({ page }) => {
  await new DropdownMenuPage(page).rightClickButton.click({ button: 'right' });
});

Then('the second context menu is displayed', async ({ page }) => {
  await expect(new DropdownMenuPage(page).contextMenu2).toBeVisible();
});

When('I double-click the "Use double-click here" button', async ({ page }) => {
  await new DropdownMenuPage(page).doubleClickButton.dblclick();
});

Then('the third context menu is displayed', async ({ page }) => {
  await expect(new DropdownMenuPage(page).contextMenu3).toBeVisible();
});

