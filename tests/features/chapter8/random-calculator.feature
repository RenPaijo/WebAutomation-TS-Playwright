@chapter-8 @random-calculator
Feature: Random calculator
  As a user of the Random calculator page
  I want wrong results to appear per the percentage, then correct ones after retries
  So that the calculator's random behavior is verified

  @random-calc-wrong-then-correct
  Scenario: Wrong result first, then correct after retries
    Given I open the Random calculator page
    When I set the wrong-result chance to "100" percent and retries to "5"
    And I press the "1" "+" "1" "=" keys
    Then the first displayed result is wrong
    When I repeat the same operation until retries run out
    Then the screen displays "2"

  @random-calc-always-correct
  Scenario: Zero percent chance always gives the correct result
    Given I open the Random calculator page
    When I set the wrong-result chance to "0" percent
    And I press the "4" "x" "5" "=" keys
    And I wait for the calculation result to appear
    Then the screen displays "20"

  @random-calc-change-retries
  Scenario: Change the retry count to 1
    Given I open the Random calculator page
    When I set the wrong-result chance to "100" percent and retries to "1"
    And I press the "9" "-" "3" "=" keys
    And I repeat the same operation 1 time
    Then the screen displays "6"
