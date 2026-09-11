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
npm run report:allure              # …then open it (served over HTTP)
```

> Do not double-click `allure-report/index.html` directly: browsers block its data
> files over `file://`, so every widget shows "Failed to fetch". The `report:allure`
> and `report:allure:serve` scripts serve it correctly. CI also publishes it to
> GitHub Pages on every push to `main`/`master`.

## 5. Run a Subset

```bash
npx playwright test --grep @web-form        # One menu
npx playwright test --grep @chapter-4       # One chapter
npx playwright test --project=firefox       # One browser
```

## Notes

- All 82 scenarios have step definitions and run green on Chromium and Firefox (164 tests).
- Screenshots/videos attach on failure; traces record every run — all visible in both reports.
- Manual test cases live in `testCase/` (Markdown, one file per chapter).
