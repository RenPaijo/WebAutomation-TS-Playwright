# Contributing

## Workflow

1. Create a branch from `main`: `feat/<chapter>-<menu>` or `fix/<short-description>`.
2. Follow the layer order when adding coverage: **Page Object → `.feature` → steps → (optional) manual case row**.
3. Run `npx tsc --noEmit` and `npx bddgen` before pushing — both must pass.
4. Open a PR against `main`. CI must be green (both reports upload as artifacts).

## Adding a New Menu (Page)

1. **Locator** — `tests/pages/chapterN/<menu>.page.ts`:
   - One class per page: `static url`, `goto()`, `readonly` Playwright `Locator` fields.
   - Prefer resilient selectors: `#id` / `[name=…]` first, then `getByRole`, avoid brittle positional selectors.
   - Re-export from `tests/pages/chapterN/index.ts`.
2. **Scenarios** — `tests/features/chapterN/<menu>.feature`:
   - One file per menu, minimum 3 scenarios, no duplicates across chapters.
   - Write steps in English, implementation-agnostic (no CSS/XPath in the text).
3. **Steps** — `tests/steps/chapterN/<menu>.steps.ts`:
   - Use `createBdd(test)` with `test` from `tests/support/fixtures.ts`, drive the matching Page Object.
   - Use faker helpers from `tests/support/fakerHelper.ts` for random data — never hardcode personal data.
4. **Manual case** — add rows to `testCase/chapterN.md` with the matching `@tag` in the Auto Ref. column.

## Tag Conventions

- `@chapter-N` — whole chapter (`@chapter-3`).
- `@<menu>` — whole menu/file, kebab-case (`@web-form`, `@dialog-boxes`).
- `@<menu>-<purpose>` — single scenario (`@web-form-submit-complete`).

Run subsets with `npx playwright test --grep @<tag>`.

## Manual Test Case IDs

`TC-CH<NN>-<MENU>-<SEQ>`, e.g. `TC-CH03-WF-001`. Keep the Auto Ref. tags in sync with `tests/features/` (all 82 tags must resolve — verify with a tag cross-check).

## Code Style

- TypeScript `strict`, no unused imports; comments in English.
- Feature files: `Feature` + narrative (`As a… / I want… / So that…`), scenario titles in Title-Case-free plain English.
- Do not commit generated or local artifacts: `.features-gen/`, `test-results/`, `playwright-report/`, `allure-results/`, `allure-report/`, `.env`.

## Definition of Done

- [ ] `npx tsc --noEmit` passes
- [ ] `npx bddgen` passes (no missing-step errors once steps exist)
- [ ] New scenarios run green on Chromium **and** Firefox
- [ ] Both reports generate (`playwright-report/`, `allure-report/`)
- [ ] Manual test case rows added with valid Auto Ref. tags
