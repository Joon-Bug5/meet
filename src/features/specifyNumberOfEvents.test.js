import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount, shallow } from "enzyme";
import { mockData } from "../mock-data";
import App from "../App";
import EventList from "../EventList";
import NumberOfEvents from "../NumberOfEvents";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

  test('When user hasn’t specified a number. 32 is the default number.', ({ given, when, then }) => {
    given('the user is on the main page.', () => {

    });

    let NumberOfEventsWrapper;
    when('the user hasn’t specified a number of the events.', () => {
      NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    then('the search result will display the default number.', () => {
      NumberOfEventsWrapper.setState({ numberOfEvents: 32 });
    });
  });


  test('User can change the number of events they want to see.', ({ given, when, then }) => {
    let AppWrapper;
    let NumberOfEventsWrapper;
    given('the user is on the main page.', () => {
      AppWrapper = mount(<App />);
      NumberOfEventsWrapper = shallow(<NumberOfEvents />);
      NumberOfEventsWrapper.setState({ numberOfEvents: 32});
    });

    when('the user put a number of events they want to see in the “Number of events” box.', () => {
      const inputEventsNumber = { target: { value: 5 }};
      AppWrapper.find('.number-of-events').simulate('change', inputEventsNumber);
      AppWrapper.update(); 
    });

    then('the specified number of events is displayed.', () => {
      expect(AppWrapper.state('numberOfEvents')).toEqual(5);
    });
  });
}); 