import type { Locator, Page } from '@playwright/test';

// Chapter 9 — Download files (download.html)
export class DownloadFilesPage {
  static readonly url = 'download.html';

  readonly heading: Locator;
  readonly webDriverManagerLogoLink: Locator;
  readonly webDriverManagerDocLink: Locator;
  readonly seleniumJupiterLogoLink: Locator;
  readonly seleniumJupiterDocLink: Locator;
  readonly downloadLinks: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Download files' });
    this.webDriverManagerLogoLink = page.locator('a[download="webdrivermanager.png"]');
    this.webDriverManagerDocLink = page.locator('a[download="webdrivermanager.pdf"]');
    this.seleniumJupiterLogoLink = page.locator('a[download="selenium-jupiter.png"]');
    this.seleniumJupiterDocLink = page.locator('a[download="selenium-jupiter.pdf"]');
    this.downloadLinks = page.locator('a[download]');
  }

  async goto(): Promise<void> {
    await this.page.goto(DownloadFilesPage.url);
  }
}
