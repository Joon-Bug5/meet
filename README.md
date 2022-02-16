This is a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

Features & Requirements Filter events by city. Show/hide event details. Specify number of events. Use the app when offline. Add an app shortcut to the home screen. View a chart showing the number of upcoming events by city.

User Stories
FEATURE 1: FILTER EVENTS BY CITY
As a user I should be able to filter events by city so that I can see the list of events in that city. Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities. GIVEN: user hasn’t searched for any city yet WHEN: when user opens the app THEN: the user will see a list of events from all cities
Scenario 2: User should see a list of suggestions when they search for a city. GIVEN: main page is open WHEN: user starts typing name of city THEN: user sees suggestions that match his search

Scenario 3: User can select a city from the suggested list. GIVEN: user sees suggestions that match his search WHEN: user clicks on the suggested name THEN: user is redirected to list of events particular to the city

FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS
As a user, I should be able to expand and collapse the event descriptions so that I can view and hide the additional details of the event. Scenario 1: An element is collapsed by default. GIVEN: user is on main page WHEN: the event information is collapsed THEN: user sees a list of relevant events
Scenario 2: User can expand an event to see its details GIVEN: User can see collapsed event element WHEN: user clicks on “View Details” THEN: element expand to display additional details

Scenario 3: User can collapse an event to hide its details GIVEN: user sees expanded element WHEN: user clicks on “Hide Details” THEN: element returns to its default collapsed state

FEATURE 3: SPECIFY NUMBER OF EVENTS
As a user I should be able to specify the number of events I would like to be displayed so that I can view the desired number of events. Scenario 1: When user hasn’t specified a number, 32 is the default number. GIVEN: user opens the app WHEN: user sees a list of events THEN: there are 32 events listed
Scenario 2: User can change the number of events they want to see. GIVEN: user opens the app WHEN: user enters number of events he wants to be displayed THEN: the corresponding number of events is displayed to the user

FEATURE 4: USE THE APP WHEN OFFLINE
As a user I should be able to use the app when offline so that I can view the app’s last accessed contents. Scenario 1: Show cached data when there’s no internet connection. GIVEN: user is offline WHEN: user opens the app in offline mode THEN: user is able to see the app’s contents while remaining offline
Scenario 2: Show error when user changes the settings (city, time range). GIVEN: user is offline WHEN: user enters different parameters like city name, time range, etc. THEN: app shows error

FEATURE 5: DATA VISUALIZATION
Scenario 1: Show a chart with the number of upcoming events in each city GIVEN: user is viewing event details WHEN: user clicks on the chart THEN: user can see a chart representing upcoming events in the city
Technical Requirements
The app must be a React application.
The app must be built using the TDD technique.
The app must use the Google Calendar API and OAuth2 authentication flow.
The app must use serverless functions (AWS lambda is preferred) for the authorization server instead of using a traditional server.
The app’s code must be hosted in a Git repository on GitHub.
The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as on IE11.
The app must display well on all screen sizes (including mobile and tablet) widths of 1920px and 320px.
The app must pass Lighthouse’s PWA checklist.
The app must work offline or in slow network conditions with the help of a service worker.
Users may be able to install the app on desktop and add the app to their home screen on mobile.
The app must be deployed on GitHub Pages.
The API call must use React axios and async/await.
The app must implement an alert system using an OOP approach to show information to the user.
The app must make use of data visualization (recharts preferred).
The app must be covered by tests with a coverage rate >= 90%.
The app must be monitored using an online monitoring tool.
