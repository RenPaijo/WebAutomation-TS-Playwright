@chapter-3 @drag-and-drop
Feature: Drag and drop
  As a user of the Drag and drop page
  I want to drag the panel into the target area
  So that the panel moves position

  @drag-drop-to-target
  Scenario: Drag the draggable panel into the target area
    Given I open the Drag and drop page
    When I drag the "Drag me" panel into the target area
    Then the panel is inside the target area

  @drag-drop-panel-visible
  Scenario: The draggable panel is displayed correctly
    Given I open the Drag and drop page
    Then the "Drag me" panel is visible
    And the target area is available

  @drag-drop-partial
  Scenario: Drag the panel partially then release
    Given I open the Drag and drop page
    When I drag the "Drag me" panel 100 pixels to the right
    Then the panel position changes from its initial position
