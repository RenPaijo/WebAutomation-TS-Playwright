import type { Locator, Page } from '@playwright/test';

// Chapter 3 — Dropdown menu (dropdown-menu.html)
export class DropdownMenuPage {
  static readonly url = 'dropdown-menu.html';

  readonly heading: Locator;
  readonly leftClickButton: Locator;
  readonly rightClickButton: Locator;
  readonly doubleClickButton: Locator;
  readonly contextMenu2: Locator;
  readonly contextMenu3: Locator;
  readonly menuItems: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Dropdown menu' });
    this.leftClickButton = page.locator('#my-dropdown-1');
    this.rightClickButton = page.locator('#my-dropdown-2');
    this.doubleClickButton = page.locator('#my-dropdown-3');
    this.contextMenu2 = page.locator('#context-menu-2');
    this.contextMenu3 = page.locator('#context-menu-3');
    this.menuItems = page.locator('.dropdown-menu a.dropdown-item');
  }

  async goto(): Promise<void> {
    await this.page.goto(DropdownMenuPage.url);
  }

  menuItem(name: string): Locator {
    return this.page.locator('.dropdown-menu a.dropdown-item', { hasText: name });
  }
}
