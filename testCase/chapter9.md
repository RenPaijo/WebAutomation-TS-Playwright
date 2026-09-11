# Manual Test Cases — Chapter 9: Third-Party Integrations

| Information | Detail |
|---|---|
| Application | Hands-On Selenium WebDriver with Java (Practice Site) |
| Base URL | `https://bonigarcia.dev/selenium-webdriver-java/` |
| Chapter | 9 — Third-Party Integrations |
| Document Version | 1.0 |
| Date | 2026-09-11 |
| Status | Pass |

> Traceability: the **Auto Ref.** column maps each case to a Cucumber scenario tag in `tests/features/chapter9/`.

Status Legend: `Not Executed` | `Pass` | `Fail` | `Blocked` | `Skipped`

## 1. Download Files (`download.html`)

| TC ID | Scenario | Precondition | Test Steps | Test Data | Expected Result | Actual | Status | Auto Ref. |
|---|---|---|---|---|---|---|---|---|
| TC-CH09-DL-001 | Download the PNG logo | Download files page is open | 1. Click "WebDriverManager logo" | — | `webdrivermanager.png` is downloaded | As expected | Pass | `@download-logo-png` |
| TC-CH09-DL-002 | Download the PDF doc | Download files page is open | 1. Click "WebDriverManager doc" | — | `webdrivermanager.pdf` is downloaded | As expected | Pass | `@download-doc-pdf` |
| TC-CH09-DL-003 | All links available | Download files page is open | 1. Inspect all four download links | — | WebDriverManager and Selenium-Jupiter logo & doc links are available | As expected | Pass | `@download-all-links` |

## 2. A/B Testing (`ab-testing.html`)

| TC ID | Scenario | Precondition | Test Steps | Test Data | Expected Result | Actual | Status | Auto Ref. |
|---|---|---|---|---|---|---|---|---|
| TC-CH09-AB-001 | Valid variant appears | A/B Testing page is open | 1. Wait for content to load | — | Heading "This is variation A" or "This is variation B" | As expected | Pass | `@ab-testing-valid-variant` |
| TC-CH09-AB-002 | Complete variant structure | A/B Testing page is open | 1. Wait for content to load | — | Variant heading and description text appear | As expected | Pass | `@ab-testing-structure` |
| TC-CH09-AB-003 | Reload stays valid | A/B Testing page is open | 1. Reload the page<br>2. Wait for content to load | — | A valid variant heading appears again | As expected | Pass | `@ab-testing-reload` |

## 3. Data Types (`data-types.html`)

| TC ID | Scenario | Precondition | Test Steps | Test Data | Expected Result | Actual | Status | Auto Ref. |
|---|---|---|---|---|---|---|---|---|
| TC-CH09-DT-001 | Fill complete + submit | Data types page is open | 1. Fill 10 fields with random data<br>2. Click Submit | faker (name, address, email, etc.) | Form is submitted to the submitted page | As expected | Pass | `@data-types-complete` |
| TC-CH09-DT-002 | Partial fill still submits | Data types page is open | 1. Fill first & last name<br>2. Click Submit | Names only | Form is submitted to the submitted page | As expected | Pass | `@data-types-partial` |
| TC-CH09-DT-003 | Valid email & phone | Data types page is open | 1. Fill a valid email & phone<br>2. Click Submit | Random email & phone | Form is submitted to the submitted page | As expected | Pass | `@data-types-email-phone` |

