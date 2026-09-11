@chapter-4 @web-storage
Feature: Web storage
  As a user of the Web storage page
  I want to read local and session storage
  So that browser storage data is verified

  @web-storage-session
  Scenario: Display the default session storage
    Given I open the Web storage page
    When I click the "Display session storage" button
    Then the session text displays the name "John" and "Doe"

  @web-storage-local
  Scenario: Add to and display local storage
    Given I open the Web storage page
    When I save "city=Jakarta" to local storage
    And I click the "Display local storage" button
    Then the local text displays "city" and "Jakarta"

  @web-storage-json-format
  Scenario: Storage content is displayed in JSON format
    Given I open the Web storage page
    When I click the "Display session storage" button
    Then the session text is in valid JSON format
