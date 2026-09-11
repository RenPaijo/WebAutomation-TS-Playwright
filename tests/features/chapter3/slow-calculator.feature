@chapter-3 @slow-calculator
Feature: Slow calculator
  As a user of the Slow calculator page
  I want to perform arithmetic operations with a delay
  So that calculation results are displayed correctly

  @slow-calc-addition
  Scenario: Addition with the default delay
    Given I open the Slow calculator page
    When I press the "7" "+" "8" "=" keys
    And I wait for the calculation result to appear
    Then the screen displays "15"

  @slow-calc-change-delay
  Scenario: Change the delay then calculate
    Given I open the Slow calculator page
    When I change the delay to "1" second
    And I press the "9" "-" "4" "=" keys
    And I wait for the calculation result to appear
    Then the screen displays "5"

  @slow-calc-clear
  Scenario: Clear the screen with the C key
    Given I open the Slow calculator page
    When I press the "1" "2" "3" keys
    And I press the "C" key
    Then the screen is empty
