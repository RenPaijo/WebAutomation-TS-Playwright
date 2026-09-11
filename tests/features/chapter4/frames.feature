@chapter-4 @frames
Feature: Frames
  As a user of the Frames page
  I want to switch between the header, body, and footer frames
  So that each frame's content is verified

  @frames-header
  Scenario: Read the header frame content
    Given I open the Frames page
    When I switch to the "frame-header" frame
    Then the header content is displayed

  @frames-body
  Scenario: Read the body frame content
    Given I open the Frames page
    When I switch to the "frame-body" frame
    Then the body content is displayed

  @frames-footer
  Scenario: Read the footer frame content
    Given I open the Frames page
    When I switch to the "frame-footer" frame
    Then the footer content is displayed
