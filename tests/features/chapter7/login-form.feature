@chapter-7 @login-form
Feature: Login form
  As a user of the Login form page
  I want to sign in with valid credentials and be rejected when wrong
  So that authentication works correctly

  @login-form-valid
  Scenario: Sign in with valid credentials succeeds
    Given I open the Login form page
    When I enter username "user" and password "user"
    And I press the Submit button
    Then I am on the login success page
    And the "Login successful" text is displayed

  @login-form-invalid
  Scenario: Sign in with a wrong password shows a warning
    Given I open the Login form page
    When I enter username "user" and password "wrong"
    And I press the Submit button
    Then the "Invalid credentials" warning is displayed
    And I stay on the Login form page

  @login-form-empty
  Scenario: Sign in with an empty form shows a warning
    Given I open the Login form page
    When I press the Submit button without entering a username and password
    Then the "Invalid credentials" warning is displayed
