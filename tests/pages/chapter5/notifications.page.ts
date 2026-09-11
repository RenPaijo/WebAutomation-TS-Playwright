import type { Locator, Page } from '@playwright/test';

// Chapter 5 — Notifications (notifications.html)
export class NotificationsPage {
  static readonly url = 'notifications.html';

  readonly heading: Locator;
  readonly notifyMeButton: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Notifications' });
    this.notifyMeButton = page.locator('#notify-me');
  }

  async goto(): Promise<void> {
    await this.page.goto(NotificationsPage.url);
  }
}
