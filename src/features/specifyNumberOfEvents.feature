Feature: Specify number of events

  Scenario: When user hasn’t specified a number. 32 is the default number.
    Given the user is on the main page.
    When the user hasn’t specified a number of the events.
    Then the search result will display the default number.

  Scenario: User can change the number of events they want to see.
    Given the user is on the main page.
    When the user put a number of events they want to see in the “Number of events” box.
    Then the specified number of events is displayed.