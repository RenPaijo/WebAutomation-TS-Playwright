@chapter-4 @shadow-dom
Feature: Shadow DOM
  As a user of the Shadow DOM page
  I want to read the text inside the shadow root
  So that the shadow DOM content is verified

  @shadow-dom-text-displayed
  Scenario: The text inside the shadow root is displayed
    Given I open the Shadow DOM page
    Then the "Hello Shadow DOM" text is displayed inside the shadow root

  @shadow-dom-host-present
  Scenario: The shadow host element is available
    Given I open the Shadow DOM page
    Then the content host element is available

  @shadow-dom-mode-open
  Scenario: The open-mode shadow root is accessible
    Given I open the Shadow DOM page
    When I access the shadow root from the host element
    Then the shadow root is in open mode
