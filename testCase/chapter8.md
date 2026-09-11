# Manual Test Cases — Chapter 8: Testing Framework Specifics

| Information | Detail |
|---|---|
| Application | Hands-On Selenium WebDriver with Java (Practice Site) |
| Base URL | `https://bonigarcia.dev/selenium-webdriver-java/` |
| Chapter | 8 — Testing Framework Specifics |
| Document Version | 1.0 |
| Date | 2026-09-11 |
| Status | Not Executed |

> Traceability: the **Auto Ref.** column maps each case to a Cucumber scenario tag in `tests/features/chapter8/`.

Status Legend: `Not Executed` | `Pass` | `Fail` | `Blocked` | `Skipped`

## 1. Random Calculator (`random-calculator.html`)

The `#percent` field = wrong-result chance (%); the `#correct` field = retries until results are always correct.

| TC ID | Scenario | Precondition | Test Steps | Test Data | Expected Result | Actual | Status | Auto Ref. |
|---|---|---|---|---|---|---|---|---|
| TC-CH08-RC-001 | Wrong first, correct after retries | Random calculator page is open | 1. Set percent 100 & retries 5<br>2. Press 1 + 1 =<br>3. Repeat until retries run out | percent=100, correct=5 | First result is wrong; final screen shows "2" | | Not Executed | `@random-calc-wrong-then-correct` |
| TC-CH08-RC-002 | 0% is always correct | Random calculator page is open | 1. Set percent 0<br>2. Press 4 x 5 =<br>3. Wait for result | percent=0 | Screen displays "20" | | Not Executed | `@random-calc-always-correct` |
| TC-CH08-RC-003 | Change retries to 1 | Random calculator page is open | 1. Set percent 100 & retries 1<br>2. Press 9 − 3 =<br>3. Repeat 1 time | percent=100, correct=1 | Screen displays "6" | | Not Executed | `@random-calc-change-retries` |
