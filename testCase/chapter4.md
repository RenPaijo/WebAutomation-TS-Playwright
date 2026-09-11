# Manual Test Cases — Chapter 4: Browser-Agnostic Features

| Information | Detail |
|---|---|
| Application | Hands-On Selenium WebDriver with Java (Practice Site) |
| Base URL | `https://bonigarcia.dev/selenium-webdriver-java/` |
| Chapter | 4 — Browser-Agnostic Features |
| Document Version | 1.0 |
| Date | 2026-09-11 |
| Status | Pass |

> Traceability: the **Auto Ref.** column maps each case to a Cucumber scenario tag in `tests/features/chapter4/`.

Status Legend: `Not Executed` | `Pass` | `Fail` | `Blocked` | `Skipped`

## 1. Long Page (`long-page.html`)

| TC ID | Scenario | Precondition | Test Steps | Test Data | Expected Result | Actual | Status | Auto Ref. |
|---|---|---|---|---|---|---|---|---|
| TC-CH04-LP-001 | Content displayed after load | Long page is open | 1. Wait for content to load | — | Lorem ipsum content is displayed | As expected | Pass | `@long-page-content-displayed` |
| TC-CH04-LP-002 | Scroll to page bottom | Long page is open | 1. Scroll to the bottom | — | Bottom of the content is visible | As expected | Pass | `@long-page-scroll-bottom` |
| TC-CH04-LP-003 | Heading displayed | Long page is open | 1. Inspect the heading | — | "This is a long page" heading is visible | As expected | Pass | `@long-page-heading` |

## 2. Infinite Scroll (`infinite-scroll.html`)

| TC ID | Scenario | Precondition | Test Steps | Test Data | Expected Result | Actual | Status | Auto Ref. |
|---|---|---|---|---|---|---|---|---|
| TC-CH04-IS-001 | Initial content displayed | Infinite scroll page is open | 1. Wait for content to load | — | Initial content is displayed | As expected | Pass | `@infinite-scroll-initial-content` |
| TC-CH04-IS-002 | Scrolling adds content | Infinite scroll page is open | 1. Scroll to the bottom | — | Content count increases | As expected | Pass | `@infinite-scroll-add-content` |
| TC-CH04-IS-003 | Repeated scrolling 3x | Infinite scroll page is open | 1. Scroll down 3 times | — | Content count grows 3 times from the start | As expected | Pass | `@infinite-scroll-repeated` |

## 3. Shadow DOM (`shadow-dom.html`)

| TC ID | Scenario | Precondition | Test Steps | Test Data | Expected Result | Actual | Status | Auto Ref. |
|---|---|---|---|---|---|---|---|---|
| TC-CH04-SD-001 | Shadow text displayed | Shadow DOM page is open | 1. Inspect the shadow root content | — | "Hello Shadow DOM" text is displayed | As expected | Pass | `@shadow-dom-text-displayed` |
| TC-CH04-SD-002 | Host available | Shadow DOM page is open | 1. Inspect the host element | — | Content host element is available | As expected | Pass | `@shadow-dom-host-present` |
| TC-CH04-SD-003 | Shadow open mode | Shadow DOM page is open | 1. Access the shadow root from the host | — | Shadow root is in open mode | As expected | Pass | `@shadow-dom-mode-open` |

## 4. Cookies (`cookies.html`)

| TC ID | Scenario | Precondition | Test Steps | Test Data | Expected Result | Actual | Status | Auto Ref. |
|---|---|---|---|---|---|---|---|---|
| TC-CH04-CK-001 | Show default cookies | Cookies page is open | 1. Click "Display cookies" | — | List shows "username=John Doe" and "date=10/07/2018" | As expected | Pass | `@cookies-show-default` |
| TC-CH04-CK-002 | Add a new cookie | Cookies page is open | 1. Add a cookie via the browser<br>2. Click "Display cookies" | `testcookie=hello` | List shows "testcookie=hello" | As expected | Pass | `@cookies-add-new` |
| TC-CH04-CK-003 | List empty before click | Cookies page is open | 1. Inspect the list without clicking | — | Cookie list is still empty | As expected | Pass | `@cookies-empty-before-click` |

## 5. Frames (`frames.html`)

| TC ID | Scenario | Precondition | Test Steps | Test Data | Expected Result | Actual | Status | Auto Ref. |
|---|---|---|---|---|---|---|---|---|
| TC-CH04-FR-001 | Read the header frame | Frames page is open | 1. Switch to the "frame-header" frame | — | Header content is displayed | As expected | Pass | `@frames-header` |
| TC-CH04-FR-002 | Read the body frame | Frames page is open | 1. Switch to the "frame-body" frame | — | Body content is displayed | As expected | Pass | `@frames-body` |
| TC-CH04-FR-003 | Read the footer frame | Frames page is open | 1. Switch to the "frame-footer" frame | — | Footer content is displayed | As expected | Pass | `@frames-footer` |

## 6. IFrame (`iframes.html`)

| TC ID | Scenario | Precondition | Test Steps | Test Data | Expected Result | Actual | Status | Auto Ref. |
|---|---|---|---|---|---|---|---|---|
| TC-CH04-IF-001 | Iframe loads content | IFrame page is open | 1. Inspect the iframe | — | Iframe is displayed, content is loaded | As expected | Pass | `@iframe-loads-content` |
| TC-CH04-IF-002 | Read iframe text | IFrame page is open | 1. Read the content inside the iframe | — | Iframe content text is displayed | As expected | Pass | `@iframe-read-text` |
| TC-CH04-IF-003 | Back to main content | IFrame page is open | 1. Interact inside the iframe<br>2. Return to the main content | — | "IFrame" heading is visible | As expected | Pass | `@iframe-back-to-main` |

## 7. Dialog Boxes (`dialog-boxes.html`)

| TC ID | Scenario | Precondition | Test Steps | Test Data | Expected Result | Actual | Status | Auto Ref. |
|---|---|---|---|---|---|---|---|---|
| TC-CH04-DB-001 | Handle the alert | Dialog boxes page is open | 1. Click "Launch alert"<br>2. Accept the alert | — | "Hello world!" alert appears, then closes | As expected | Pass | `@dialog-alert` |
| TC-CH04-DB-002 | Confirm accept & dismiss | Dialog boxes page is open | 1. Click confirm + accept<br>2. Click confirm + dismiss | — | Text "You chose: true" then "You chose: false" | As expected | Pass | `@dialog-confirm` |
| TC-CH04-DB-003 | Fill the prompt | Dialog boxes page is open | 1. Click "Launch prompt"<br>2. Enter a name | `John` | Text "You typed: John" | As expected | Pass | `@dialog-prompt` |
| TC-CH04-DB-004 | Act on the modal | Dialog boxes page is open | 1. Click "Launch modal"<br>2. Click "Save changes" | — | "Modal title" modal appears; text "You chose: Save changes" | As expected | Pass | `@dialog-modal` |

## 8. Web Storage (`web-storage.html`)

| TC ID | Scenario | Precondition | Test Steps | Test Data | Expected Result | Actual | Status | Auto Ref. |
|---|---|---|---|---|---|---|---|---|
| TC-CH04-WS-001 | Show default session | Web storage page is open | 1. Click "Display session storage" | — | Text shows "John" and "Doe" | As expected | Pass | `@web-storage-session` |
| TC-CH04-WS-002 | Add & show local | Web storage page is open | 1. Save to local storage<br>2. Click "Display local storage" | `city=Jakarta` | Local text shows "city" and "Jakarta" | As expected | Pass | `@web-storage-local` |
| TC-CH04-WS-003 | Valid JSON format | Web storage page is open | 1. Click "Display session storage" | — | Session text is in valid JSON format | As expected | Pass | `@web-storage-json-format` |

