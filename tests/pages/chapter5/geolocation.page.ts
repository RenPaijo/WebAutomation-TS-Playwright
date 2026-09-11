import type { Locator, Page } from '@playwright/test';

// Chapter 5 — Geolocation (geolocation.html)
export class GeolocationPage {
  static readonly url = 'geolocation.html';

  readonly heading: Locator;
  readonly getCoordinatesButton: Locator;
  readonly coordinatesText: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Geolocation' });
    this.getCoordinatesButton = page.locator('#get-coordinates');
    this.coordinatesText = page.locator('#coordinates');
  }

  async goto(): Promise<void> {
    await this.page.goto(GeolocationPage.url);
  }
}
