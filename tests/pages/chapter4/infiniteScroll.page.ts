import type { Locator, Page } from '@playwright/test';

// Chapter 4 — Infinite scroll (infinite-scroll.html, konten bertambah saat scroll)
export class InfiniteScrollPage {
  static readonly url = 'infinite-scroll.html';

  readonly heading: Locator;
  readonly content: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Infinite scroll' });
    this.content = page.locator('#content');
  }

  async goto(): Promise<void> {
    await this.page.goto(InfiniteScrollPage.url);
  }
}
