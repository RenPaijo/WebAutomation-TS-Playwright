import type { Locator, Page } from '@playwright/test';

// Chapter 8 — Random calculator (random-calculator.html)
// Layout tombol identik dengan slow-calculator; #percent mengatur peluang
// hasil salah, #correct mengatur jumlah retry hingga selalu benar.
export class RandomCalculatorPage {
  static readonly url = 'random-calculator.html';

  readonly heading: Locator;
  readonly percentInput: Locator;
  readonly correctInput: Locator;
  readonly spinner: Locator;
  readonly calculator: Locator;
  readonly screen: Locator;
  readonly clearButton: Locator;
  readonly keys: Locator;
  readonly operatorButtons: Locator;
  readonly equalsButton: Locator;

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Random calculator' });
    this.percentInput = page.locator('#percent');
    this.correctInput = page.locator('#correct');
    this.spinner = page.locator('#spinner');
    this.calculator = page.locator('#calculator');
    this.screen = page.locator('#calculator .screen');
    this.clearButton = page.locator('#calculator .clear');
    this.keys = page.locator('#calculator .keys span');
    this.operatorButtons = page.locator('#calculator .keys span.operator');
    this.equalsButton = page.locator('#calculator .keys span', { hasText: '=' });
  }

  async goto(): Promise<void> {
    await this.page.goto(RandomCalculatorPage.url);
  }

  key(label: string): Locator {
    return this.page.locator('#calculator .keys span', { hasText: label });
  }
}
