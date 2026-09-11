import type { Locator, Page } from '@playwright/test';

// Chapter 7 — Halaman sukses login (login-sucess.html, perhatikan typo "sucess" di URL asli)
export class LoginSuccessPage {
  static readonly url = 'login-sucess.html';

  readonly heading: Locator;
  readonly successAlert: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Login form' });
    this.successAlert = page.locator('#success');
  }

  async goto(): Promise<void> {
    await this.page.goto(LoginSuccessPage.url);
  }
}
