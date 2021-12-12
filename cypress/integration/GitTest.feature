Feature: We will verify the tests suggested for assignment

  Background:
    Given Open git home page

  @search
  Scenario Outline: Open git home page and verify search functionality
    Given Verify user on git home page
    When User type search repo by <name>
    Then User verify search page title should contains <name>
    And User verify search result for <name>
    Examples:
      | name     |
      | selenium |
      | rabbit   |

  @search
  Scenario Outline: Verify negative scenerio when wron search enters
    Given Verify user on git home page
    When User type search repo by <name>
    Then User verify search page title should contains <name>
    And Verify error message should be displayed
    Examples:
      | name   |
      | dhgsjd |