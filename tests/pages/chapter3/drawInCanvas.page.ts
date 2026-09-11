import type { Locator, Page } from '@playwright/test';

// Chapter 3 — Draw in canvas (draw-in-canvas.html)
export class DrawInCanvasPage {
  static readonly url = 'draw-in-canvas.html';

  readonly heading: Locator;
  readonly instructionText: Locator;
  readonly canvas: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Drawing in canvas' });
    this.instructionText = page.getByText('Click to draw.');
    this.canvas = page.locator('#my-canvas');
  }

  async goto(): Promise<void> {
    await this.page.goto(DrawInCanvasPage.url);
  }
}
