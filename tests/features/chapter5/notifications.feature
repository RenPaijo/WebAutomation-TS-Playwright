@chapter-5 @notifications
Feature: Notifications
  As a user of the Notifications page
  I want to test browser permission and notification delivery
  So that notification behavior is verified

  @notifications-granted
  Scenario: Grant permission then request a notification
    Given I open the Notifications page
    When I grant notification permission
    And I click the "Notify me" button
    Then the browser notification is delivered

  @notifications-denied
  Scenario: Deny notification permission
    Given I open the Notifications page
    When I deny notification permission
    And I click the "Notify me" button
    Then no notification is delivered

  @notifications-button-present
  Scenario: The Notify me button is available
    Given I open the Notifications page
    Then the "Notify me" button is visible
