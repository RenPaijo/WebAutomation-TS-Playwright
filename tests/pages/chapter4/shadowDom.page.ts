import type { Locator, Page } from '@playwright/test';

// Chapter 4 — Shadow DOM (shadow-dom.html)
// Host #content menempelkan open shadow root berisi <p>Hello Shadow DOM</p>.
export class ShadowDomPage {
  static readonly url = 'shadow-dom.html';
  static readonly shadowText = 'Hello Shadow DOM';

  readonly heading: Locator;
  readonly shadowHost: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Shadow DOM' });
    this.shadowHost = page.locator('#content');
  }

  async goto(): Promise<void> {
    await this.page.goto(ShadowDomPage.url);
  }
}
