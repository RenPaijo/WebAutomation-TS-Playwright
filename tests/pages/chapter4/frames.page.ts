import type { Frame, Page } from '@playwright/test';

// Chapter 4 — Frames (frames.html, frameset: header / body / footer)
export class FramesPage {
  static readonly url = 'frames.html';
  static readonly frameNames = {
    header: 'frame-header',
    body: 'frame-body',
    footer: 'frame-footer',
  } as const;

  constructor(private readonly page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto(FramesPage.url);
  }

  frame(name: (typeof FramesPage.frameNames)[keyof typeof FramesPage.frameNames]): Frame | null {
    return this.page.frame({ name });
  }
}
