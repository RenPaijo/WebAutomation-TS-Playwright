import type { Locator, Page } from '@playwright/test';

// Chapter 5 — Get user media (get-user-media.html)
export class GetUserMediaPage {
  static readonly url = 'get-user-media.html';

  readonly heading: Locator;
  readonly video: Locator;
  readonly startButton: Locator;
  readonly videoDeviceText: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Get user media' });
    this.video = page.locator('#my-video');
    this.startButton = page.locator('#start');
    this.videoDeviceText = page.locator('#video-device');
  }

  async goto(): Promise<void> {
    await this.page.goto(GetUserMediaPage.url);
  }
}
