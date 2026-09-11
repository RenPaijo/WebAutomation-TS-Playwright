import type { Locator, Page } from '@playwright/test';

// Chapter 3 — Loading images (loading-images.html)
// Gambar compass/calendar/award/landscape muncul bertahap via JS (delay 2s–8s).
export class LoadingImagesPage {
  static readonly url = 'loading-images.html';
  static readonly imageIds = ['compass', 'calendar', 'award', 'landscape'] as const;

  readonly heading: Locator;
  readonly statusText: Locator;
  readonly spinner: Locator;
  readonly imageContainer: Locator;
  readonly images: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Loading images' });
    this.statusText = page.locator('#text');
    this.spinner = page.locator('#spinner');
    this.imageContainer = page.locator('#image-container');
    this.images = page.locator('#image-container img');
  }

  async goto(): Promise<void> {
    await this.page.goto(LoadingImagesPage.url);
  }

  imageById(id: (typeof LoadingImagesPage.imageIds)[number]): Locator {
    return this.page.locator(`#${id}`);
  }
}
