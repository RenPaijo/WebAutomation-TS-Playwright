@chapter-4 @long-page
Feature: Long page
  As a user of the Long page
  I want to scroll through the long page
  So that the entire content can be read

  @long-page-content-displayed
  Scenario: The lorem ipsum content is displayed after loading
    Given I open the Long page
    When I wait for the page content to load
    Then the lorem ipsum content is displayed

  @long-page-scroll-bottom
  Scenario: Scroll to the bottom of the page
    Given I open the Long page
    When I scroll to the bottom of the page
    Then the bottom of the content is visible

  @long-page-heading
  Scenario: The page heading is displayed
    Given I open the Long page
    Then the "This is a long page" heading is visible
