@chapter-3 @dropdown-menu
Feature: Dropdown menu
  As a user of the Dropdown menu page
  I want to open menus with left, right, and double click
  So that each click type shows its menu

  @dropdown-left-click
  Scenario: Open the menu with left-click
    Given I open the Dropdown menu page
    When I left-click the "Use left-click here" button
    Then the menu list is displayed
    When I select the "Action" menu item
    Then the menu list is closed

  @dropdown-right-click
  Scenario: Open the menu with right-click
    Given I open the Dropdown menu page
    When I right-click the "Use right-click here" button
    Then the second context menu is displayed

  @dropdown-double-click
  Scenario: Open the menu with double-click
    Given I open the Dropdown menu page
    When I double-click the "Use double-click here" button
    Then the third context menu is displayed
