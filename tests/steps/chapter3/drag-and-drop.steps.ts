import { createBdd } from 'playwright-bdd';
import { expect, type Page } from '@playwright/test';
import { test } from '../../support/fixtures';
import { DragAndDropPage } from '../../pages/chapter3/dragAndDrop.page';

const { Given, When, Then } = createBdd(test);
const initialX = new Map<Page, number>();

Given('I open the Drag and drop page', async ({ page }) => {
  await new DragAndDropPage(page).goto();
  await expect(page.getByRole('heading', { name: 'Drag and drop' })).toBeVisible();
});

When('I drag the "Drag me" panel into the target area', async ({ page }) => {
  const dragPage = new DragAndDropPage(page);
  await dragPage.draggable.dragTo(dragPage.dropTarget);
});

Then('the panel is inside the target area', async ({ page }) => {
  const dragPage = new DragAndDropPage(page);
  const panel = await dragPage.draggable.boundingBox();
  const target = await dragPage.dropTarget.boundingBox();
  expect(panel, 'panel box exists').not.toBeNull();
  expect(target, 'target box exists').not.toBeNull();
  const centerX = panel!.x + panel!.width / 2;
  const centerY = panel!.y + panel!.height / 2;
  expect(centerX).toBeGreaterThanOrEqual(target!.x);
  expect(centerX).toBeLessThanOrEqual(target!.x + target!.width);
  expect(centerY).toBeGreaterThanOrEqual(target!.y);
  expect(centerY).toBeLessThanOrEqual(target!.y + target!.height);
});

Then('the "Drag me" panel is visible', async ({ page }) => {
  await expect(new DragAndDropPage(page).draggable).toBeVisible();
});

Then('the target area is available', async ({ page }) => {
  await expect(new DragAndDropPage(page).dropTarget).toBeVisible();
});

When('I drag the "Drag me" panel 100 pixels to the right', async ({ page }) => {
  const panel = new DragAndDropPage(page).draggable;
  const box = await panel.boundingBox();
  expect(box, 'panel box exists').not.toBeNull();
  initialX.set(page, box!.x);
  const startX = box!.x + box!.width / 2;
  const startY = box!.y + box!.height / 2;
  await page.mouse.move(startX, startY);
  await page.mouse.down();
  await page.mouse.move(startX + 100, startY, { steps: 10 });
  await page.mouse.up();
});

Then('the panel position changes from its initial position', async ({ page }) => {
  const box = await new DragAndDropPage(page).draggable.boundingBox();
  expect(box, 'panel box exists').not.toBeNull();
  expect(initialX.has(page), 'initial position was recorded').toBe(true);
  expect(Math.abs(box!.x - initialX.get(page)!)).toBeGreaterThan(50);
});

