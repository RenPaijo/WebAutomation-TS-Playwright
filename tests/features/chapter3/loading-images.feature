@chapter-3 @loading-images
Feature: Loading images
  As a user of the Loading images page
  I want to wait for images to load gradually
  So that all images are displayed and the status completes

  @loading-all-images
  Scenario: Wait until all images are displayed
    Given I open the Loading images page
    When I wait until all images are loaded
    Then the compass, calendar, award, and landscape images are displayed

  @loading-done-text
  Scenario: The status text changes to Done
    Given I open the Loading images page
    When I wait until all images are loaded
    Then the status text displays "Done!"

  @loading-spinner-gone
  Scenario: The spinner disappears after loading finishes
    Given I open the Loading images page
    Then the spinner is visible while images are not loaded yet
    When I wait until all images are loaded
    Then the spinner is no longer visible
