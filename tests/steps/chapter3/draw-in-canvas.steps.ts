import { createBdd } from 'playwright-bdd';
import { expect, type Page } from '@playwright/test';
import { test } from '../../support/fixtures';
import { DrawInCanvasPage } from '../../pages/chapter3/drawInCanvas.page';

const { Given, When, Then } = createBdd(test);
const drawnPixels = new Map<Page, number>();

async function countDrawnPixels(page: Page): Promise<number> {
  return page.locator('#my-canvas').evaluate((canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return 0;
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let drawn = 0;
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] > 10) drawn += 1;
    }
    return drawn;
  });
}

async function stroke(page: Page, x1: number, y1: number, x2: number, y2: number): Promise<void> {
  await page.mouse.move(x1, y1);
  await page.mouse.down();
  await page.mouse.move(x2, y2, { steps: 10 });
  await page.mouse.up();
}

Given('I open the Drawing in canvas page', async ({ page }) => {
  await new DrawInCanvasPage(page).goto();
  await expect(page.getByRole('heading', { name: 'Drawing in canvas' })).toBeVisible();
  await expect(page.locator('#my-canvas')).toBeVisible();
});

When('I draw a line on the canvas', async ({ page }) => {
  const box = await page.locator('#my-canvas').boundingBox();
  expect(box, 'canvas box exists').not.toBeNull();
  await stroke(page, box!.x + 20, box!.y + 20, box!.x + box!.width - 20, box!.y + box!.height - 20);
});

Then('the canvas is no longer empty', async ({ page }) => {
  expect(await countDrawnPixels(page)).toBeGreaterThan(100);
});

Then('the canvas is displayed', async ({ page }) => {
  await expect(page.locator('#my-canvas')).toBeVisible();
});

Then('the "Click to draw." text is visible', async ({ page }) => {
  await expect(page.getByText('Click to draw.')).toBeVisible();
});

When('I draw at the left point of the canvas', async ({ page }) => {
  const box = await page.locator('#my-canvas').boundingBox();
  expect(box, 'canvas box exists').not.toBeNull();
  const x = box!.x + box!.width * 0.2;
  await stroke(page, x, box!.y + 20, x + 40, box!.y + box!.height - 20);
  drawnPixels.set(page, await countDrawnPixels(page));
});

When('I draw at the right point of the canvas', async ({ page }) => {
  const box = await page.locator('#my-canvas').boundingBox();
  expect(box, 'canvas box exists').not.toBeNull();
  const x = box!.x + box!.width * 0.8;
  await stroke(page, x, box!.y + 20, x - 40, box!.y + box!.height - 20);
});

Then('the canvas contains strokes from both points', async ({ page }) => {
  const before = drawnPixels.get(page) ?? 0;
  const after = await countDrawnPixels(page);
  expect(after).toBeGreaterThan(100);
  expect(after).toBeGreaterThan(before);
});

