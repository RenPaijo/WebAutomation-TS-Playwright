@chapter-9 @download-files
Feature: Download files
  As a user of the Download files page
  I want to download the WebDriverManager and Selenium-Jupiter logos and docs
  So that files download correctly

  @download-logo-png
  Scenario: Download the WebDriverManager PNG logo
    Given I open the Download files page
    When I click the "WebDriverManager logo" link
    Then the "webdrivermanager.png" file is downloaded

  @download-doc-pdf
  Scenario: Download the WebDriverManager PDF doc
    Given I open the Download files page
    When I click the "WebDriverManager doc" link
    Then the "webdrivermanager.pdf" file is downloaded

  @download-all-links
  Scenario: All download links are available with correct attributes
    Given I open the Download files page
    Then the WebDriverManager logo and doc download links are available
    And the Selenium-Jupiter logo and doc download links are available
