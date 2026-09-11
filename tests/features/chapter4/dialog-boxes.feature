@chapter-4 @dialog-boxes
Feature: Dialog boxes
  As a user of the Dialog boxes page
  I want to interact with the alert, confirm, prompt, and modal
  So that each dialog is handled correctly

  @dialog-alert
  Scenario: Handle the alert
    Given I open the Dialog boxes page
    When I click the "Launch alert" button
    Then the alert dialog appears with the "Hello world!" text
    When I accept the alert
    Then the alert is closed

  @dialog-confirm
  Scenario: Handle confirm by accepting and dismissing
    Given I open the Dialog boxes page
    When I click the "Launch confirm" button and accept the dialog
    Then the confirm text displays "You chose: true"
    When I click the "Launch confirm" button and dismiss the dialog
    Then the confirm text displays "You chose: false"

  @dialog-prompt
  Scenario: Fill the prompt with a name
    Given I open the Dialog boxes page
    When I click the "Launch prompt" button and enter "John"
    Then the prompt text displays "You typed: John"

  @dialog-modal
  Scenario: Choose an action on the modal
    Given I open the Dialog boxes page
    When I click the "Launch modal" button
    Then the modal with the "Modal title" heading is displayed
    When I click the "Save changes" button on the modal
    Then the modal text displays "You chose: Save changes"
