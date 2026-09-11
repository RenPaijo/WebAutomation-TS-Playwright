import type { Locator, Page } from '@playwright/test';

// Chapter 4 — Cookies (cookies.html, preset: username=John Doe, date=10/07/2018)
export class CookiesPage {
  static readonly url = 'cookies.html';

  readonly heading: Locator;
  readonly displayCookiesButton: Locator;
  readonly cookiesList: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Cookies' });
    this.displayCookiesButton = page.locator('#refresh-cookies');
    this.cookiesList = page.locator('#cookies-list');
  }

  async goto(): Promise<void> {
    await this.page.goto(CookiesPage.url);
  }
}
