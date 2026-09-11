@chapter-7 @login-slow
Feature: Slow login
  As a user of the Slow login form page
  I want the sign-in process to be delayed with a spinner indicator
  So that slow login is handled correctly

  @login-slow-valid
  Scenario: Valid sign-in shows the spinner then succeeds
    Given I open the Slow login form page
    When I enter username "user" and password "user"
    And I press the Submit button
    Then the spinner is displayed during the login process
    And I am on the login success page

  @login-slow-invalid
  Scenario: Wrong sign-in shows the spinner then a warning
    Given I open the Slow login form page
    When I enter username "user" and password "wrong"
    And I press the Submit button
    Then the spinner appears then disappears
    And the "Invalid credentials" warning is displayed

  @login-slow-wait-complete
  Scenario: Wait for the login process to finish in about 3 seconds
    Given I open the Slow login form page
    When I enter username "user" and password "user"
    And I press the Submit button
    And I wait for the login process to finish
    Then the spinner is no longer visible
