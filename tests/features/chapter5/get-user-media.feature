@chapter-5 @get-user-media
Feature: Get user media
  As a user of the Get user media page
  I want to access the virtual camera and view device info
  So that video streaming works

  @user-media-start-video
  Scenario: Start the video with a fake device
    Given I open the Get user media page
    When I click the "Start" button
    Then the video element plays the stream

  @user-media-info-device
  Scenario: The video device info is displayed
    Given I open the Get user media page
    When I click the "Start" button
    Then the video device info text is displayed

  @user-media-elements-present
  Scenario: The video elements are available on the page
    Given I open the Get user media page
    Then the video element is visible
    And the "Start" button is visible
