@chapter-9 @data-types
Feature: Data types
  As a user of the Data types page
  I want to fill in personal data and submit the form
  So that the data is submitted correctly

  @data-types-complete
  Scenario: Fill all fields with random data and submit
    Given I open the Data types page
    When I fill all fields with random user data
    And I press the Submit button
    Then the form is submitted to the submitted page

  @data-types-partial
  Scenario: Filling partial fields can still submit
    Given I open the Data types page
    When I fill only the first name and last name
    And I press the Submit button
    Then the form is submitted to the submitted page

  @data-types-email-phone
  Scenario: Fill a valid email and phone number
    Given I open the Data types page
    When I fill a valid random email and phone number
    And I press the Submit button
    Then the form is submitted to the submitted page
