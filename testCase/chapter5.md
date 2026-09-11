# Manual Test Cases — Chapter 5: Browser-Specific Manipulation

| Information | Detail |
|---|---|
| Application | Hands-On Selenium WebDriver with Java (Practice Site) |
| Base URL | `https://bonigarcia.dev/selenium-webdriver-java/` |
| Chapter | 5 — Browser-Specific Manipulation |
| Document Version | 1.0 |
| Date | 2026-09-11 |
| Status | Pass |

> Traceability: the **Auto Ref.** column maps each case to a Cucumber scenario tag in `tests/features/chapter5/`.

Status Legend: `Not Executed` | `Pass` | `Fail` | `Blocked` | `Skipped`

## 1. Geolocation (`geolocation.html`)

| TC ID | Scenario | Precondition | Test Steps | Test Data | Expected Result | Actual | Status | Auto Ref. |
|---|---|---|---|---|---|---|---|---|
| TC-CH05-GEO-001 | Show coordinates (granted) | Geolocation page is open | 1. Grant location permission<br>2. Click "Get coordinates" | lat -6.2, lon 106.8 | Coordinate text shows latitude & longitude | As expected | Pass | `@geolocation-shown` |
| TC-CH05-GEO-002 | Denied permission → error | Geolocation page is open | 1. Deny location permission<br>2. Click "Get coordinates" | — | Location access error message appears | As expected | Pass | `@geolocation-denied` |
| TC-CH05-GEO-003 | Button available | Geolocation page is open | 1. Inspect the button | — | "Get coordinates" button is visible | As expected | Pass | `@geolocation-button-present` |

## 2. Notifications (`notifications.html`)

| TC ID | Scenario | Precondition | Test Steps | Test Data | Expected Result | Actual | Status | Auto Ref. |
|---|---|---|---|---|---|---|---|---|
| TC-CH05-NTF-001 | Granted → notification sent | Notifications page is open | 1. Grant notification permission<br>2. Click "Notify me" | — | Browser notification is delivered | As expected | Pass | `@notifications-granted` |
| TC-CH05-NTF-002 | Denied → no notification | Notifications page is open | 1. Deny notification permission<br>2. Click "Notify me" | — | No notification is delivered | As expected | Pass | `@notifications-denied` |
| TC-CH05-NTF-003 | Button available | Notifications page is open | 1. Inspect the button | — | "Notify me" button is visible | As expected | Pass | `@notifications-button-present` |

## 3. Get User Media (`get-user-media.html`)

| TC ID | Scenario | Precondition | Test Steps | Test Data | Expected Result | Actual | Status | Auto Ref. |
|---|---|---|---|---|---|---|---|---|
| TC-CH05-UM-001 | Start video (fake device) | Get user media page is open | 1. Click "Start" | Fake camera/mic | Video element plays the stream | As expected | Pass | `@user-media-start-video` |
| TC-CH05-UM-002 | Device info displayed | Get user media page is open | 1. Click "Start" | Fake camera/mic | Video device info text is displayed | As expected | Pass | `@user-media-info-device` |
| TC-CH05-UM-003 | Elements available | Get user media page is open | 1. Inspect video & button | — | Video element and "Start" button are visible | As expected | Pass | `@user-media-elements-present` |

## 4. Multilanguage (`multilanguage.html`)

| TC ID | Scenario | Precondition | Test Steps | Test Data | Expected Result | Actual | Status | Auto Ref. |
|---|---|---|---|---|---|---|---|---|
| TC-CH05-ML-001 | English text | Browser language is English | 1. Open the page | lang = en | Title "Multilanguage page"; menu Home/Content/About us/Contact us | As expected | Pass | `@multilanguage-english` |
| TC-CH05-ML-002 | Spanish text | Browser language is Spanish | 1. Open the page | lang = es | Title "Página multilenguage"; menu Inicio/Contenido/Acerca de/Contacto | As expected | Pass | `@multilanguage-spanish` |
| TC-CH05-ML-003 | Menu structure consistent | Browser language is English | 1. Open the page | lang = en | Menu list contains 4 items | As expected | Pass | `@multilanguage-structure` |

## 5. Console Logs (`console-logs.html`)

| TC ID | Scenario | Precondition | Test Steps | Test Data | Expected Result | Actual | Status | Auto Ref. |
|---|---|---|---|---|---|---|---|---|
| TC-CH05-CL-001 | Capture all log levels | Console recording is active | 1. Open the page | — | Console holds log, info, warn, error | As expected | Pass | `@console-all-levels` |
| TC-CH05-CL-002 | Capture the forced error | Console recording is active | 1. Open the page | — | Console holds "This a forced error" | As expected | Pass | `@console-forced-error` |
| TC-CH05-CL-003 | Page stays visible | Console logs page is open | 1. Inspect the heading | — | "Console logs" heading is visible | As expected | Pass | `@console-page-visible` |

