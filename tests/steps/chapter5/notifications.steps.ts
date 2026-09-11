import { createBdd } from 'playwright-bdd';
import { expect, type Page } from '@playwright/test';
import { test } from '../../support/fixtures';
import { NotificationsPage } from '../../pages/chapter5/notifications.page';

const { Given, When, Then } = createBdd(test);

interface RecordedNotification {
  title: string;
  options?: NotificationOptions;
}

// Headless browsers handle real notifications inconsistently, so the
// Notification API is stubbed: permission is fixed and constructor calls
// are recorded for assertions.
interface NotificationStub {
  permission: NotificationPermission;
  requestPermission: () => Promise<NotificationPermission>;
  new (title: string, options?: NotificationOptions): Notification;
}

async function stubNotifications(page: Page, permission: NotificationPermission): Promise<void> {
  await page.addInitScript((perm) => {
    (window as unknown as { __notifications: RecordedNotification[] }).__notifications = [];
    const StubNotification = function (
      this: unknown,
      title: string,
      options?: NotificationOptions,
    ): void {
      (window as unknown as { __notifications: RecordedNotification[] }).__notifications.push({
        title,
        options,
      });
    } as unknown as NotificationStub;
    StubNotification.permission = perm;
    StubNotification.requestPermission = async () => perm;
    (window as unknown as { Notification: unknown }).Notification = StubNotification;
  }, permission);
}

async function recordedNotifications(page: Page): Promise<RecordedNotification[]> {
  return page.evaluate(
    () => (window as unknown as { __notifications: RecordedNotification[] }).__notifications ?? [],
  );
}

Given('I open the Notifications page', async ({ page }) => {
  await new NotificationsPage(page).goto();
  await expect(page.getByRole('heading', { name: 'Notifications' })).toBeVisible();
});

When('I grant notification permission', async ({ page, context }) => {
  await context.grantPermissions(['notifications']);
  await stubNotifications(page, 'granted');
  await page.reload();
});

When('I click the "Notify me" button', async ({ page }) => {
  await new NotificationsPage(page).notifyMeButton.click();
});

Then('the browser notification is delivered', async ({ page }) => {
  const notifications = await recordedNotifications(page);
  expect(notifications, 'one notification was sent').toHaveLength(1);
  expect(notifications[0].title).toBe('This is a notification');
});

When('I deny notification permission', async ({ page, context }) => {
  await context.clearPermissions();
  await stubNotifications(page, 'denied');
  await page.reload();
});

Then('no notification is delivered', async ({ page }) => {
  expect(await recordedNotifications(page), 'no notification was sent').toHaveLength(0);
});

Then('the "Notify me" button is visible', async ({ page }) => {
  await expect(new NotificationsPage(page).notifyMeButton).toBeVisible();
});
