@chapter-3 @draw-in-canvas
Feature: Draw in canvas
  As a user of the Drawing in canvas page
  I want to draw on the canvas
  So that strokes are stored on the canvas

  @canvas-draw-line
  Scenario: Draw a line on the canvas
    Given I open the Drawing in canvas page
    When I draw a line on the canvas
    Then the canvas is no longer empty

  @canvas-visible
  Scenario: The canvas is displayed and ready to draw on
    Given I open the Drawing in canvas page
    Then the canvas is displayed
    And the "Click to draw." text is visible

  @canvas-multi-point
  Scenario: Draw at multiple canvas points
    Given I open the Drawing in canvas page
    When I draw at the left point of the canvas
    And I draw at the right point of the canvas
    Then the canvas contains strokes from both points
