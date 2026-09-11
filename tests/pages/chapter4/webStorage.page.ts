import type { Locator, Page } from '@playwright/test';

// Chapter 4 — Web storage (web-storage.html, session preset: name=John, lastname=Doe)
export class WebStoragePage {
  static readonly url = 'web-storage.html';

  readonly heading: Locator;
  readonly displayLocalButton: Locator;
  readonly localStorageText: Locator;
  readonly displaySessionButton: Locator;
  readonly sessionStorageText: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Web storage' });
    this.displayLocalButton = page.locator('#display-local');
    this.localStorageText = page.locator('#local-storage');
    this.displaySessionButton = page.locator('#display-session');
    this.sessionStorageText = page.locator('#session-storage');
  }

  async goto(): Promise<void> {
    await this.page.goto(WebStoragePage.url);
  }
}
