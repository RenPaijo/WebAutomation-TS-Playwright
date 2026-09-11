# Web Automation — Playwright + BDD + Allure

Web UI test automation for the [Hands-On Selenium WebDriver with Java practice site](https://bonigarcia.dev/selenium-webdriver-java/), built with **Playwright (TypeScript)**, **playwright-bdd (Cucumber)**, **Allure reporting**, and **Faker** test data. Both the default Playwright HTML report and the Allure report are generated on every run.

> New here? Start with [QUICKSTART.md](QUICKSTART.md) (5 minutes). Want to contribute? Read [CONTRIBUTING.md](CONTRIBUTING.md).

## Tech Stack

| Tool | Purpose |
|---|---|
| `@playwright/test` | Browser automation + test runner (Chromium, Firefox) |
| `playwright-bdd` | BDD layer — `.feature` files become Playwright tests |
| `allure-playwright` + `allure-commandline` | Allure results + HTML report generation |
| `@faker-js/faker` | Random test data (names, emails, addresses, …) |
| `dotenv` | Environment-based configuration (`BASE_URL`, `WORKERS`) |

## Project Structure

```
├── playwright.config.ts        # Test config: browsers, workers, dual reporters, artifacts
├── tsconfig.json
├── .env.example                # Copy to .env and adjust (BASE_URL, WORKERS)
├── .github/workflows/          # CI: install → test → publish both reports as artifacts
├── testCase/                   # Manual test cases (Markdown, one file per chapter)
│   ├── chapter3.md … chapter9.md
└── tests/
    ├── features/chapterN/      # Cucumber scenarios, one file per menu (page)
    ├── steps/                  # Step definitions (BDD glue code)
    ├── pages/chapterN/         # Page Objects / locators, one file per menu
    └── support/                # Shared fixtures, faker helpers
```

Coverage: Chapters 3, 4, 5, 7, 8, 9 — 82 scenarios, 27 feature files, 27 page objects.

## Prerequisites

- Node.js 20+ and npm
- Browsers installed via `npx playwright install chromium firefox`

## Common Commands

| Command | Description |
|---|---|
| `npm run test` | Generate BDD tests (`bddgen`) + run Playwright |
| `npm run test:ci` | Same as `test` (used by CI) |
| `npm run test:headed` | Run with a visible browser |
| `npm run bddgen` | Regenerate Playwright tests from `.feature` files only |
| `npm run report:playwright` | Open the Playwright HTML report |
| `npm run report:allure:generate` | Build `allure-report/` from `allure-results/` |
| `npm run report:allure` | Open the Allure HTML report |
| `npm run report:allure:serve` | Serve Allure results live |

## Running Subsets

```bash
# One menu / chapter / single case (tags are defined per .feature file)
npx playwright test --grep @web-form
npx playwright test --grep @chapter-4
npx playwright test --grep @dialog-confirm

# One browser only
npx playwright test --project=chromium
npx playwright test --project=firefox

# Control parallelism
WORKERS=4 npx playwright test
```

## Reports

Every run produces **two** reports:

1. **Playwright HTML** → `playwright-report/index.html`
2. **Allure** → raw data in `allure-results/`, then `npm run report:allure:generate` builds `allure-report/index.html`

Artifacts: screenshot + video on failure, trace always on (pass and fail) — all attached to both reports automatically.

> **Viewing the Allure report:** never double-click `index.html` — browsers block its data
> files over `file://` and every widget shows "Failed to fetch". Always serve it over HTTP:
> `npm run report:allure:serve`, `npm run report:allure`, or open the GitHub Pages URL
> published by CI (`https://<user>.github.io/<repo>/`).
>
> **Trace viewer:** `npm run report:allure:generate` automatically swaps Allure's bundled
> (older) Playwright trace viewer with the installed version via
> `scripts/patch-allure-trace-viewer.cjs`, so traces open directly inside the report
> instead of showing a version-mismatch error.

## Configuration

| Variable | Default | Description |
|---|---|---|
| `BASE_URL` | `https://bonigarcia.dev/selenium-webdriver-java/` | Site under test |
| `WORKERS` | auto locally / `2` on CI | Parallel worker count |
| `CI` | unset | Set by CI; enables retries + `forbidOnly` |

## Manual Test Cases & Traceability

`testCase/chapterN.md` holds the manual test cases (one file per chapter, tables per menu). Every manual case links to its automated scenario via the **Auto Ref.** tag column, e.g. `@web-form-submit-complete`. A cross-check (`Select-String` over both folders) keeps the mapping at 82/82.

## BDD Notes

- Step patterns: `tests/steps/**/*.ts`, `tests/support/**/*.ts`. Page Objects live in `tests/pages/` so `bddgen` ignores them.
- Shared steps used by multiple menus live in `tests/steps/common.steps.ts` — never redefine the same step text twice (generation fails on duplicates or missing steps).
- Tag conventions: `@chapter-N` per chapter, `@<menu>` per file, `@<menu>-<purpose>` per scenario (see [CONTRIBUTING.md](CONTRIBUTING.md)).

## CI

`.github/workflows/playwright.yml` runs on push/PR to `main`/`master`: `npm ci` → install browsers → `npm run test:ci` → generate Allure → upload both reports as artifacts (7-day retention) → deploy Allure to GitHub Pages (requires Pages source set to "GitHub Actions" in repo settings).
