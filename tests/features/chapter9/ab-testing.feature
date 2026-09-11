@chapter-9 @ab-testing
Feature: A/B Testing
  As a user of the A/B Testing page
  I want one of the content variants to appear at random
  So that the displayed variant is always valid

  @ab-testing-valid-variant
  Scenario: A valid variant appears on page open
    Given I open the A/B Testing page
    When I wait for the variant content to load
    Then the variant heading displays "This is variation A" or "This is variation B"

  @ab-testing-structure
  Scenario: The variant content structure is complete
    Given I open the A/B Testing page
    When I wait for the variant content to load
    Then the variant heading is displayed
    And the variant description text is displayed

  @ab-testing-reload
  Scenario: Reloading still shows a valid variant
    Given I open the A/B Testing page
    When I reload the page
    And I wait for the variant content to load
    Then the variant heading displays "This is variation A" or "This is variation B"
