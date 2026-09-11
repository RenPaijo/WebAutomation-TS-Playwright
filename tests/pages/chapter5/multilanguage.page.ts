import type { Locator, Page } from '@playwright/test';

// Chapter 5 — Multilanguage (multilanguage.html)
// Teks di-render dari JS sesuai bahasa browser (en/es), key: _title/_home/_content/_about/_contact.
export class MultilanguagePage {
  static readonly url = 'multilanguage.html';

  readonly titleHeading: Locator;
  readonly languageItems: Locator;
  readonly contentList: Locator;

  constructor(private readonly page: Page) {
    this.titleHeading = page.locator('h1.lang[key="_title"]');
    this.languageItems = page.locator('li.lang');
    this.contentList = page.locator('#content ul');
  }

  async goto(): Promise<void> {
    await this.page.goto(MultilanguagePage.url);
  }

  itemByKey(key: '_home' | '_content' | '_about' | '_contact'): Locator {
    return this.page.locator(`li.lang[key="${key}"]`);
  }
}
