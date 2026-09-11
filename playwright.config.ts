import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import * as dotenv from 'dotenv';

dotenv.config();

const testDir = defineBddConfig({
  features: 'tests/features/**/*.feature',
  steps: ['tests/steps/**/*.ts', 'tests/support/**/*.ts'],
  outputDir: '.features-gen',
});

export default defineConfig({
  testDir,
  timeout: 30_000,
  expect: { timeout: 10_000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  // Worker count: via the WORKERS env var, defaults to 2 on CI, auto (50% of CPU cores) locally.
  workers: process.env.WORKERS ? Number(process.env.WORKERS) : process.env.CI ? 2 : undefined,
  outputDir: 'test-results',

  use: {
    baseURL: process.env.BASE_URL || 'https://bonigarcia.dev/selenium-webdriver-java/',
    headless: true,
    // Screenshot + video on failure only; trace is always on (pass and fail).
    // All three are attached automatically to the HTML report and the Allure report.
    trace: 'on',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    acceptDownloads: true,
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // Fake camera/mic so Get User Media tests run headless.
        launchOptions: {
          args: ['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream'],
        },
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        launchOptions: {
          firefoxUserPrefs: {
            'media.navigator.streams.fake': true,
            'media.navigator.permission.disabled': true,
          },
        },
      },
    },
  ],

  reporter: [
    // Concise console output
    ['list'],
    // Default Playwright report (HTML) -> playwright-report/
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
    // Allure report -> allure-results/ (generate into allure-report/)
    [
      'allure-playwright',
      {
        outputFolder: 'allure-results',
        detail: true,
        suiteTitle: true,
      },
    ],
  ],
});
