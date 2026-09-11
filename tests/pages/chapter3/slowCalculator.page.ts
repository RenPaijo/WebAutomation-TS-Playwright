import type { Locator, Page } from '@playwright/test';

// Chapter 3 — Slow calculator (slow-calculator.html)
export class SlowCalculatorPage {
  static readonly url = 'slow-calculator.html';

  readonly heading: Locator;
  readonly delayInput: Locator;
  readonly spinner: Locator;
  readonly calculator: Locator;
  readonly screen: Locator;
  readonly clearButton: Locator;
  readonly keys: Locator;
  readonly operatorButtons: Locator;
  readonly equalsButton: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Slow calculator' });
    this.delayInput = page.locator('#delay');
    this.spinner = page.locator('#spinner');
    this.calculator = page.locator('#calculator');
    this.screen = page.locator('#calculator .screen');
    this.clearButton = page.locator('#calculator .clear');
    this.keys = page.locator('#calculator .keys span');
    this.operatorButtons = page.locator('#calculator .keys span.operator');
    this.equalsButton = page.locator('#calculator .keys span', { hasText: '=' });
  }

  async goto(): Promise<void> {
    await this.page.goto(SlowCalculatorPage.url);
  }

  key(label: string): Locator {
    // NOTE: the "C" key lives in .top, not .keys — search all calculator spans.
    return this.page.locator('#calculator span', { hasText: label });
  }
}
