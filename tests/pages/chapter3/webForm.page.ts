import type { Locator, Page } from '@playwright/test';

// Chapter 3 — Web form (web-form.html)
export class WebFormPage {
  static readonly url = 'web-form.html';

  readonly heading: Locator;
  readonly textInput: Locator;
  readonly passwordInput: Locator;
  readonly textarea: Locator;
  readonly disabledInput: Locator;
  readonly readonlyInput: Locator;
  readonly selectDropdown: Locator;
  readonly datalistInput: Locator;
  readonly datalistOptions: Locator;
  readonly fileInput: Locator;
  readonly checkedCheckbox: Locator;
  readonly defaultCheckbox: Locator;
  readonly checkedRadio: Locator;
  readonly defaultRadio: Locator;
  readonly colorPicker: Locator;
  readonly datePicker: Locator;
  readonly rangeSlider: Locator;
  readonly submitButton: Locator;
  readonly returnToIndexLink: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Web form' });
    this.textInput = page.locator('#my-text-id');
    this.passwordInput = page.locator('[name="my-password"]');
    this.textarea = page.locator('[name="my-textarea"]');
    this.disabledInput = page.locator('[name="my-disabled"]');
    this.readonlyInput = page.locator('[name="my-readonly"]');
    this.selectDropdown = page.locator('[name="my-select"]');
    this.datalistInput = page.locator('[name="my-datalist"]');
    this.datalistOptions = page.locator('#my-options option');
    this.fileInput = page.locator('[name="my-file"]');
    this.checkedCheckbox = page.locator('#my-check-1');
    this.defaultCheckbox = page.locator('#my-check-2');
    this.checkedRadio = page.locator('#my-radio-1');
    this.defaultRadio = page.locator('#my-radio-2');
    this.colorPicker = page.locator('[name="my-colors"]');
    this.datePicker = page.locator('[name="my-date"]');
    this.rangeSlider = page.locator('[name="my-range"]');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.returnToIndexLink = page.getByRole('link', { name: 'Return to index' });
  }

  async goto(): Promise<void> {
    await this.page.goto(WebFormPage.url);
  }
}
