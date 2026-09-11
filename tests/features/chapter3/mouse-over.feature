@chapter-3 @mouse-over
Feature: Mouse over
  As a user of the Mouse over page
  I want to see captions when hovering over images
  So that image information is displayed correctly

  @mouse-over-compass
  Scenario: Hover over the compass image shows its caption
    Given I open the Mouse over page
    When I hover over the compass image
    Then the "Compass" caption is displayed

  @mouse-over-award
  Scenario: Hover over the award image shows its caption
    Given I open the Mouse over page
    When I hover over the award image
    Then the "Award" caption is displayed

  @mouse-over-all-images
  Scenario: All images are displayed on the page
    Given I open the Mouse over page
    Then the compass, calendar, award, and landscape images are displayed
