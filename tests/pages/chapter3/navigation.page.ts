import type { Locator, Page } from '@playwright/test';

// Chapter 3 — Navigation (navigation1/2/3.html, struktur identik)
export class NavigationPage {
  static readonly urls = {
    page1: 'navigation1.html',
    page2: 'navigation2.html',
    page3: 'navigation3.html',
  } as const;

  readonly heading: Locator;
  readonly leadParagraph: Locator;
  readonly backToIndexLink: Locator;
  readonly pagination: Locator;
  readonly previousLink: Locator;
  readonly nextLink: Locator;
  readonly activePageItem: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Navigation example' });
    this.leadParagraph = page.locator('p.lead');
    this.backToIndexLink = page.getByRole('link', { name: 'Back to index' });
    this.pagination = page.locator('nav[aria-label="Page navigation example"]');
    this.previousLink = page.getByRole('link', { name: 'Previous' });
    this.nextLink = page.getByRole('link', { name: 'Next' });
    this.activePageItem = page.locator('.pagination .page-item.active');
  }

  async goto(pageNumber: 1 | 2 | 3 = 1): Promise<void> {
    await this.page.goto(NavigationPage.urls[`page${pageNumber}`]);
  }

  pageLink(pageNumber: number): Locator {
    return this.page.getByRole('link', { name: String(pageNumber), exact: true });
  }
}
