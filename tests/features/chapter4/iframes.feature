@chapter-4 @iframe
Feature: IFrame
  As a user of the IFrame page
  I want to interact with the content inside the iframe
  So that the iframe content is verified

  @iframe-loads-content
  Scenario: The iframe loads the content page
    Given I open the IFrame page
    Then the iframe is displayed
    And the content inside the iframe is loaded

  @iframe-read-text
  Scenario: Read the text inside the iframe
    Given I open the IFrame page
    When I read the content inside the iframe
    Then the iframe content text is displayed

  @iframe-back-to-main
  Scenario: Return to the main content after the iframe
    Given I open the IFrame page
    When I interact with the content inside the iframe
    And I return to the page's main content
    Then the "IFrame" heading is visible
