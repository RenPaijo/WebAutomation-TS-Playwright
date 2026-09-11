@chapter-5 @console-logs
Feature: Console logs
  As a tester of the Console logs page
  I want to capture browser console messages
  So that log levels and errors are recorded

  @console-all-levels
  Scenario: Capture all console levels
    Given I open the Console logs page while recording the console
    Then the console contains log, info, warn, and error messages

  @console-forced-error
  Scenario: Capture the forced error from the page
    Given I open the Console logs page while recording the console
    Then the console contains the "This a forced error" error

  @console-page-visible
  Scenario: The page stays visible despite the JS error
    Given I open the Console logs page
    Then the "Console logs" heading is visible
