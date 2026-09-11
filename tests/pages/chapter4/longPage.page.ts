import type { Locator, Page } from '@playwright/test';

// Chapter 4 — Long page (long-page.html, konten lorem-ipsum dimuat via AJAX)
export class LongPage {
  static readonly url = 'long-page.html';

  readonly heading: Locator;
  readonly content: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'This is a long page' });
    this.content = page.locator('#content');
  }

  async goto(): Promise<void> {
    await this.page.goto(LongPage.url);
  }
}
