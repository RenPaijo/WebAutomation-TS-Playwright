# Manual Test Cases — Chapter 3: WebDriver Fundamentals

| Information | Detail |
|---|---|
| Application | Hands-On Selenium WebDriver with Java (Practice Site) |
| Base URL | `https://bonigarcia.dev/selenium-webdriver-java/` |
| Chapter | 3 — WebDriver Fundamentals |
| Document Version | 1.0 |
| Date | 2026-09-11 |
| Status | Pass |

> Traceability: the **Auto Ref.** column maps each case to a Cucumber scenario tag in `tests/features/chapter3/`.

Status Legend: `Not Executed` | `Pass` | `Fail` | `Blocked` | `Skipped`

## 1. Web Form (`web-form.html`)

| TC ID | Scenario | Precondition | Test Steps | Test Data | Expected Result | Actual | Status | Auto Ref. |
|---|---|---|---|---|---|---|---|---|
| TC-CH03-WF-001 | Submit the complete form | Web form page is open | 1. Fill the text input<br>2. Fill password & textarea<br>3. Select "Two" from the select dropdown<br>4. Click Submit | Random name (faker), free password & text | Form is submitted to the submitted page | As expected | Pass | `@web-form-submit-complete` |
| TC-CH03-WF-002 | Select checkbox & radio | Web form page is open | 1. Check the Default checkbox<br>2. Select the Default radio | — | Default checkbox is checked, Default radio is selected | As expected | Pass | `@web-form-checkbox-radio` |
| TC-CH03-WF-003 | Disabled & readonly inputs | Web form page is open | 1. Try to fill the Disabled input<br>2. Inspect the Readonly input | Free text | Disabled input cannot be filled; Readonly shows "Readonly input" | As expected | Pass | `@web-form-disabled-readonly` |

## 2. Navigation (`navigation1/2/3.html`)

| TC ID | Scenario | Precondition | Test Steps | Test Data | Expected Result | Actual | Status | Auto Ref. |
|---|---|---|---|---|---|---|---|---|
| TC-CH03-NAV-001 | Go to page 2 via number | On Navigation 1 | 1. Click number "2" in pagination | — | On Navigation page 2 | As expected | Pass | `@navigation-to-page-2` |
| TC-CH03-NAV-002 | Go to next page via Next | On Navigation 1 | 1. Click the Next button | — | On Navigation page 2 | As expected | Pass | `@navigation-next` |
| TC-CH03-NAV-003 | Back to index | On Navigation 1 | 1. Click the "Back to index" link | — | Back on the index page | As expected | Pass | `@navigation-back-to-index` |

## 3. Dropdown Menu (`dropdown-menu.html`)

| TC ID | Scenario | Precondition | Test Steps | Test Data | Expected Result | Actual | Status | Auto Ref. |
|---|---|---|---|---|---|---|---|---|
| TC-CH03-DD-001 | Open menu with left-click | Dropdown menu page is open | 1. Left-click "Use left-click here"<br>2. Select the "Action" menu | — | Menu list appears, then closes after selection | As expected | Pass | `@dropdown-left-click` |
| TC-CH03-DD-002 | Open menu with right-click | Dropdown menu page is open | 1. Right-click "Use right-click here" | — | Second context menu appears | As expected | Pass | `@dropdown-right-click` |
| TC-CH03-DD-003 | Open menu with double-click | Dropdown menu page is open | 1. Double-click "Use double-click here" | — | Third context menu appears | As expected | Pass | `@dropdown-double-click` |

## 4. Mouse Over (`mouse-over.html`)

| TC ID | Scenario | Precondition | Test Steps | Test Data | Expected Result | Actual | Status | Auto Ref. |
|---|---|---|---|---|---|---|---|---|
| TC-CH03-MO-001 | Hover compass | Mouse over page is open | 1. Hover over the compass image | — | "Compass" caption appears | As expected | Pass | `@mouse-over-compass` |
| TC-CH03-MO-002 | Hover award | Mouse over page is open | 1. Hover over the award image | — | "Award" caption appears | As expected | Pass | `@mouse-over-award` |
| TC-CH03-MO-003 | All images displayed | Mouse over page is open | 1. Inspect all four images | — | compass, calendar, award, landscape images are displayed | As expected | Pass | `@mouse-over-all-images` |

## 5. Drag and Drop (`drag-and-drop.html`)

| TC ID | Scenario | Precondition | Test Steps | Test Data | Expected Result | Actual | Status | Auto Ref. |
|---|---|---|---|---|---|---|---|---|
| TC-CH03-DND-001 | Drag panel to target | Drag and drop page is open | 1. Drag the "Drag me" panel to the target area<br>2. Release | — | Panel is inside the target area | As expected | Pass | `@drag-drop-to-target` |
| TC-CH03-DND-002 | Panel & target visible | Drag and drop page is open | 1. Inspect the panel and target | — | "Drag me" panel is visible, target area is available | As expected | Pass | `@drag-drop-panel-visible` |
| TC-CH03-DND-003 | Partial drag (100px) | Drag and drop page is open | 1. Drag the panel 100px right<br>2. Release | — | Panel position changes from initial | As expected | Pass | `@drag-drop-partial` |

## 6. Draw in Canvas (`draw-in-canvas.html`)

| TC ID | Scenario | Precondition | Test Steps | Test Data | Expected Result | Actual | Status | Auto Ref. |
|---|---|---|---|---|---|---|---|---|
| TC-CH03-CNV-001 | Draw a line on canvas | Drawing in canvas page is open | 1. Click-drag on the canvas | — | Canvas is no longer empty | As expected | Pass | `@canvas-draw-line` |
| TC-CH03-CNV-002 | Canvas ready to draw | Drawing in canvas page is open | 1. Inspect canvas & instruction text | — | Canvas is displayed, "Click to draw." is visible | As expected | Pass | `@canvas-visible` |
| TC-CH03-CNV-003 | Draw at multiple points | Drawing in canvas page is open | 1. Draw at the left point<br>2. Draw at the right point | — | Canvas holds strokes from both points | As expected | Pass | `@canvas-multi-point` |

## 7. Loading Images (`loading-images.html`)

| TC ID | Scenario | Precondition | Test Steps | Test Data | Expected Result | Actual | Status | Auto Ref. |
|---|---|---|---|---|---|---|---|---|
| TC-CH03-LI-001 | All images displayed | Loading images page is open | 1. Wait until loading finishes | — | compass, calendar, award, landscape images are displayed | As expected | Pass | `@loading-all-images` |
| TC-CH03-LI-002 | Status becomes Done | Loading images page is open | 1. Wait until loading finishes | — | Status text "Done!" | As expected | Pass | `@loading-done-text` |
| TC-CH03-LI-003 | Spinner disappears | Loading images page is open | 1. Confirm spinner is visible<br>2. Wait until loading finishes | — | Spinner is no longer visible | As expected | Pass | `@loading-spinner-gone` |

## 8. Slow Calculator (`slow-calculator.html`)

| TC ID | Scenario | Precondition | Test Steps | Test Data | Expected Result | Actual | Status | Auto Ref. |
|---|---|---|---|---|---|---|---|---|
| TC-CH03-SC-001 | Addition with default delay | Slow calculator page is open | 1. Press 7 + 8 =<br>2. Wait for result | — | Screen displays "15" | As expected | Pass | `@slow-calc-addition` |
| TC-CH03-SC-002 | Change delay then calculate | Slow calculator page is open | 1. Change delay to 1 second<br>2. Press 9 − 4 =<br>3. Wait for result | Delay = 1 | Screen displays "5" | As expected | Pass | `@slow-calc-change-delay` |
| TC-CH03-SC-003 | Clear screen (C) | Slow calculator page is open | 1. Press 1 2 3<br>2. Press C | — | Screen is empty | As expected | Pass | `@slow-calc-clear` |

