import type { Locator, Page } from '@playwright/test';

// Chapter 7 — Slow login form (login-slow.html)
// Sama seperti login-form, tapi submit tertunda ~3 detik (spinner #spinner).
export class LoginSlowPage {
  static readonly url = 'login-slow.html';
  static readonly validUsername = 'user';
  static readonly validPassword = 'user';

  readonly heading: Locator;
  readonly form: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly spinner: Locator;
  readonly invalidAlert: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Slow login form' });
    this.form = page.locator('#form');
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.spinner = page.locator('#spinner');
    this.invalidAlert = page.locator('#invalid');
  }

  async goto(): Promise<void> {
    await this.page.goto(LoginSlowPage.url);
  }
}
