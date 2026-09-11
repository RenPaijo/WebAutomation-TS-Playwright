# Quickstart (5 Minutes)

## 1. Install

```bash
npm install
npx playwright install chromium firefox
```

## 2. Configure (optional)

```bash
cp .env.example .env   # Windows (PowerShell): Copy-Item .env.example .env
```

Defaults already target `https://bonigarcia.dev/selenium-webdriver-java/`. Override when needed:

```bash
# .env
BASE_URL=https://bonigarcia.dev/selenium-webdriver-java/
WORKERS=4
```

## 3. Run

```bash
npm run test
```

This regenerates Playwright tests from the `.feature` files (`bddgen`) and runs them on Chromium + Firefox.

## 4. View the Reports

```bash
npm run report:playwright          # Default Playwright HTML report
npm run report:allure:generate     # Build the Allure HTML report first…
npm run report:allure              # …then open it
```

## 5. Run a Subset

```bash
npx playwright test --grep @web-form        # One menu
npx playwright test --grep @chapter-4       # One chapter
npx playwright test --project=firefox       # One browser
```

## Notes

- Scenarios without step definitions yet are **skipped** by design (`missingSteps: 'skip-scenario'` in `playwright.config.ts`) — this is temporary until all steps are implemented.
- Screenshots/videos attach on failure; traces record every run — all visible in both reports.
- Manual test cases live in `testCase/` (Markdown, one file per chapter).
