import type { Locator, Page } from '@playwright/test';

// Chapter 9 — Data types (data-types.html, submit ke data-types-submitted.html)
export class DataTypesPage {
  static readonly url = 'data-types.html';

  readonly heading: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly addressInput: Locator;
  readonly zipCodeInput: Locator;
  readonly cityInput: Locator;
  readonly countryInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly jobPositionInput: Locator;
  readonly companyInput: Locator;
  readonly submitButton: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Data types' });
    this.firstNameInput = page.locator('[name="first-name"]');
    this.lastNameInput = page.locator('[name="last-name"]');
    this.addressInput = page.locator('[name="address"]');
    this.zipCodeInput = page.locator('[name="zip-code"]');
    this.cityInput = page.locator('[name="city"]');
    this.countryInput = page.locator('[name="country"]');
    this.emailInput = page.locator('[name="e-mail"]');
    this.phoneInput = page.locator('[name="phone"]');
    this.jobPositionInput = page.locator('[name="job-position"]');
    this.companyInput = page.locator('[name="company"]');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
  }

  async goto(): Promise<void> {
    await this.page.goto(DataTypesPage.url);
  }
}
