import type { Locator, Page } from '@playwright/test';

// Chapter 4 — Dialog boxes (dialog-boxes.html)
export class DialogBoxesPage {
  static readonly url = 'dialog-boxes.html';

  readonly heading: Locator;
  readonly alertButton: Locator;
  readonly confirmButton: Locator;
  readonly confirmText: Locator;
  readonly promptButton: Locator;
  readonly promptText: Locator;
  readonly modalButton: Locator;
  readonly modal: Locator;
  readonly modalTitle: Locator;
  readonly modalBody: Locator;
  readonly modalActionButtons: Locator;
  readonly modalText: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Dialog boxes' });
    this.alertButton = page.locator('#my-alert');
    this.confirmButton = page.locator('#my-confirm');
    this.confirmText = page.locator('#confirm-text');
    this.promptButton = page.locator('#my-prompt');
    this.promptText = page.locator('#prompt-text');
    this.modalButton = page.locator('#my-modal');
    this.modal = page.locator('#example-modal');
    this.modalTitle = page.locator('#exampleModalLabel');
    this.modalBody = page.locator('#example-modal .modal-body');
    this.modalActionButtons = page.locator('#example-modal .model-button');
    this.modalText = page.locator('#modal-text');
  }

  async goto(): Promise<void> {
    await this.page.goto(DialogBoxesPage.url);
  }

  modalActionButton(name: string): Locator {
    return this.page.locator('#example-modal .model-button', { hasText: name });
  }
}
