import type { Locator, Page } from '@playwright/test';

// Chapter 5 — Console logs (console-logs.html, tanpa elemen interaktif)
export class ConsoleLogsPage {
  static readonly url = 'console-logs.html';

  readonly heading: Locator;
  readonly descriptionText: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Console logs' });
    this.descriptionText = page.getByText("This page makes call to JavaScript's console");
  }

  async goto(): Promise<void> {
    await this.page.goto(ConsoleLogsPage.url);
  }
}
