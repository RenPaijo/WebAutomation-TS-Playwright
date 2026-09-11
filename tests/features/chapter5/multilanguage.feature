@chapter-5 @multilanguage
Feature: Multilanguage
  As a user of the Multilanguage page
  I want the text to follow the browser language
  So that translations are displayed correctly

  @multilanguage-english
  Scenario: The English text is displayed
    Given I open the Multilanguage page with language "en"
    Then the title displays "Multilanguage page"
    And the menu displays "Home", "Content", "About us", and "Contact us"

  @multilanguage-spanish
  Scenario: The Spanish text is displayed
    Given I open the Multilanguage page with language "es"
    Then the title displays "Página multilenguage"
    And the menu displays "Inicio", "Contenido", "Acerca de", and "Contacto"

  @multilanguage-structure
  Scenario: The menu list structure stays the same across languages
    Given I open the Multilanguage page with language "en"
    Then the menu list contains 4 items
