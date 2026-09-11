import type { Locator, Page } from '@playwright/test';

// Chapter 3 — Drag and drop (drag-and-drop.html)
export class DragAndDropPage {
  static readonly url = 'drag-and-drop.html';

  readonly heading: Locator;
  readonly draggable: Locator;
  readonly dropTarget: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Drag and drop' });
    this.draggable = page.locator('#draggable');
    this.dropTarget = page.locator('#target');
  }

  async goto(): Promise<void> {
    await this.page.goto(DragAndDropPage.url);
  }
}
