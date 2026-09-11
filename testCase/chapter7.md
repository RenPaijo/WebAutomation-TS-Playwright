# Manual Test Cases — Chapter 7: The Page Object Model (POM)

| Information | Detail |
|---|---|
| Application | Hands-On Selenium WebDriver with Java (Practice Site) |
| Base URL | `https://bonigarcia.dev/selenium-webdriver-java/` |
| Chapter | 7 — The Page Object Model (POM) |
| Document Version | 1.0 |
| Date | 2026-09-11 |
| Status | Not Executed |

> Traceability: the **Auto Ref.** column maps each case to a Cucumber scenario tag in `tests/features/chapter7/`.

Status Legend: `Not Executed` | `Pass` | `Fail` | `Blocked` | `Skipped`

## 1. Login Form (`login-form.html`)

Valid credentials: username `user` / password `user`.

| TC ID | Scenario | Precondition | Test Steps | Test Data | Expected Result | Actual | Status | Auto Ref. |
|---|---|---|---|---|---|---|---|---|
| TC-CH07-LF-001 | Valid sign-in succeeds | Login form page is open | 1. Enter username & password<br>2. Click Submit | user / user | Lands on success page; "Login successful" is displayed | | Not Executed | `@login-form-valid` |
| TC-CH07-LF-002 | Wrong password → warning | Login form page is open | 1. Enter wrong username & password<br>2. Click Submit | user / wrong | "Invalid credentials" warning appears; stays on login page | | Not Executed | `@login-form-invalid` |
| TC-CH07-LF-003 | Empty form → warning | Login form page is open | 1. Click Submit without entering anything | Empty | "Invalid credentials" warning appears | | Not Executed | `@login-form-empty` |

## 2. Slow Login (`login-slow.html`)

Sign-in is delayed ~3 seconds with the `#spinner` indicator; same valid credentials (`user` / `user`).

| TC ID | Scenario | Precondition | Test Steps | Test Data | Expected Result | Actual | Status | Auto Ref. |
|---|---|---|---|---|---|---|---|---|
| TC-CH07-SL-001 | Valid sign-in: spinner then success | Slow login page is open | 1. Enter username & password<br>2. Click Submit<br>3. Wait for completion | user / user | Spinner shows during the process; ends on success page | | Not Executed | `@login-slow-valid` |
| TC-CH07-SL-002 | Wrong sign-in: spinner then warning | Slow login page is open | 1. Enter wrong credentials<br>2. Click Submit<br>3. Wait for completion | user / wrong | Spinner appears then disappears; "Invalid credentials" appears | | Not Executed | `@login-slow-invalid` |
| TC-CH07-SL-003 | Spinner gone after ~3s | Slow login page is open | 1. Enter valid credentials<br>2. Click Submit<br>3. Wait for completion | user / user | Spinner is no longer visible | | Not Executed | `@login-slow-wait-complete` |
