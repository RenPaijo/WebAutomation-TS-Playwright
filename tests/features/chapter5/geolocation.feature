@chapter-5 @geolocation
Feature: Geolocation
  As a user of the Geolocation page
  I want to read the browser's location coordinates
  So that the geographic position is displayed correctly

  @geolocation-shown
  Scenario: Display coordinates with location permission granted
    Given I open the Geolocation page
    When I grant location permission with latitude "-6.2" and longitude "106.8"
    And I click the "Get coordinates" button
    Then the coordinate text displays the latitude and longitude

  @geolocation-denied
  Scenario: Denied location permission shows an error message
    Given I open the Geolocation page
    When I deny location permission
    And I click the "Get coordinates" button
    Then the coordinate text displays the location access error message

  @geolocation-button-present
  Scenario: The Get coordinates button is available
    Given I open the Geolocation page
    Then the "Get coordinates" button is visible
