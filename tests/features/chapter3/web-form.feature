@chapter-3 @web-form
Feature: Web form
  As a user of the Web form page
  I want to fill in and submit the form
  So that the data is submitted correctly

  @web-form-submit-complete
  Scenario: Fill in the complete form and submit
    Given I open the Web form page
    When I fill the text input with a random name
    And I fill the password and textarea
    And I select the "Two" option from the select dropdown
    And I press the Submit button
    Then the form is submitted to the submitted page

  @web-form-checkbox-radio
  Scenario: Select checkbox and radio button
    Given I open the Web form page
    When I check the Default checkbox
    And I select the Default radio
    Then the Default checkbox is checked
    And the Default radio is selected

  @web-form-disabled-readonly
  Scenario: Disabled and readonly inputs behave correctly
    Given I open the Web form page
    Then the Disabled input cannot be filled
    And the Readonly input displays "Readonly input"
