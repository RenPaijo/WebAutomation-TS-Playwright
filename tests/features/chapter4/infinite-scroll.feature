@chapter-4 @infinite-scroll
Feature: Infinite scroll
  As a user of the Infinite scroll page
  I want content to grow as I scroll
  So that follow-up content loads automatically

  @infinite-scroll-initial-content
  Scenario: The initial content is displayed on page open
    Given I open the Infinite scroll page
    When I wait for the page content to load
    Then the initial content is displayed

  @infinite-scroll-add-content
  Scenario: Scrolling down adds more content
    Given I open the Infinite scroll page
    When I scroll to the bottom of the page
    Then the content count increases

  @infinite-scroll-repeated
  Scenario: Repeated scrolling adds content multiple times
    Given I open the Infinite scroll page
    When I scroll down 3 times
    Then the content count grows 3 times from the start
