@chapter-4 @cookies
Feature: Cookies
  As a user of the Cookies page
  I want to view and manage browser cookies
  So that cookie values are verified

  @cookies-show-default
  Scenario: Display the page's default cookies
    Given I open the Cookies page
    When I click the "Display cookies" button
    Then the cookie list displays "username=John Doe"
    And the cookie list displays "date=10/07/2018"

  @cookies-add-new
  Scenario: Add a new cookie then display it
    Given I open the Cookies page
    When I add the "testcookie=hello" cookie via the browser
    And I click the "Display cookies" button
    Then the cookie list displays "testcookie=hello"

  @cookies-empty-before-click
  Scenario: The cookie list is empty before the button is clicked
    Given I open the Cookies page
    Then the cookie list is still empty
