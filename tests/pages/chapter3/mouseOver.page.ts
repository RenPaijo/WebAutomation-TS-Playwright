import type { Locator, Page } from '@playwright/test';

// Chapter 3 — Mouse over (mouse-over.html)
export class MouseOverPage {
  static readonly url = 'mouse-over.html';

  readonly heading: Locator;
  readonly figures: Locator;
  readonly figureImages: Locator;
  readonly captions: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Mouse over' });
    this.figures = page.locator('.figure');
    this.figureImages = page.locator('.figure img.img-fluid');
    this.captions = page.locator('.figure .caption');
  }

  async goto(): Promise<void> {
    await this.page.goto(MouseOverPage.url);
  }

  // Caption hanya tampil setelah hover (CSS :hover), mis. "Compass".
  captionByText(text: string): Locator {
    return this.page.locator('.figure .caption p', { hasText: text });
  }
}
