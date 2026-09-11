@chapter-3 @navigation
Feature: Navigation
  As a user of the Navigation page
  I want to move between pages via pagination
  So that navigation works correctly

  @navigation-to-page-2
  Scenario: Go to page 2 via the pagination number
    Given I open Navigation page 1
    When I click pagination number "2"
    Then I am on Navigation page 2

  @navigation-next
  Scenario: Go to the next page via the Next button
    Given I open Navigation page 1
    When I click the Next button
    Then I am on Navigation page 2

  @navigation-back-to-index
  Scenario: Go back to the index page
    Given I open Navigation page 1
    When I click the "Back to index" link
    Then I am back on the index page
