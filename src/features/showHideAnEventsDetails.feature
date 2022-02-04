Feature: Show/hide event details

  Scenario: An event element is collapsed by default
    Given the user has searched for events by city
    When user has list of suggested events
    Then event elements should be displayed collapsed

  Scenario: User can expand an event to see its details
    Given the user had list of suggested events
    When user clicks Show Details button for a given event element
    Then the user should see more information for an event

  Scenario: User can collapse an event to hide its details
    Given the user has an expanded event details
    When user clicks Hide Details button for a given event element
    Then the user should see a collapsed event element hiding its details