import type { FrameLocator, Locator, Page } from '@playwright/test';

// Chapter 4 — IFrame (iframes.html, iframe #my-iframe memuat content.html)
export class IFramesPage {
  static readonly url = 'iframes.html';

  readonly heading: Locator;
  readonly iframe: Locator;
  readonly frameLocator: FrameLocator;
  readonly iframeContent: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'IFrame' });
    this.iframe = page.locator('#my-iframe');
    this.frameLocator = page.frameLocator('#my-iframe');
    this.iframeContent = this.frameLocator.locator('#content');
  }

  async goto(): Promise<void> {
    await this.page.goto(IFramesPage.url);
  }
}
