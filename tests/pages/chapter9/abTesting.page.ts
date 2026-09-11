import type { Locator, Page } from '@playwright/test';

// Chapter 9 — A/B Testing (ab-testing.html)
// Random content: variation-a.html ("This is variation A") or
// variation-b.html ("This is variation B"), loaded via AJAX into #content.
export class AbTestingPage {
  static readonly url = 'ab-testing.html';

  readonly heading: Locator;
  readonly content: Locator;
  readonly variationHeading: Locator;
  readonly variationText: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'A/B Testing' });
    this.content = page.locator('#content');
    this.variationHeading = page.locator('#content h6');
    this.variationText = page.locator('#content p.lead');
  }

  async goto(): Promise<void> {
    await this.page.goto(AbTestingPage.url);
  }
}
