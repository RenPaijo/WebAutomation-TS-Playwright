import type { Locator, Page } from '@playwright/test';

// Chapter 7 — Login form (login-form.html, POM)
// Kredensial valid: user / user. Gagal -> alert #invalid, sukses -> login-sucess.html.
export class LoginFormPage {
  static readonly url = 'login-form.html';
  static readonly validUsername = 'user';
  static readonly validPassword = 'user';

  readonly heading: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly invalidAlert: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Login form' });
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.invalidAlert = page.locator('#invalid');
  }

  async goto(): Promise<void> {
    await this.page.goto(LoginFormPage.url);
  }
}
