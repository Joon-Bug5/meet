import React from 'react';
import { loadFeature, defineFeature } from "jest-cucumber";
import Event from '../Event';
import EventList from "../EventList";
import { mockData } from "../mock-data";
import { shallow } from 'enzyme';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  test('An event element is collapsed by default', ({ given, when, then }) => {
    
    let EventListWrapper;
    given('the user has searched for events by city', () => {
      EventListWrapper = shallow(<EventList events={mockData} />);

    });

  
    when('user has list of suggested events', () => {
      EventListWrapper = shallow(<EventList events={mockData} />);
      expect(EventListWrapper.find('.EventList')).toHaveLength(1);
    });

    let EventWrapper;
    then('event elements should be displayed collapsed', () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      expect(EventWrapper.state('collapsed')).toEqual(true);

    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    
    let EventWrapper;
    given('the user had list of suggested events', () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      expect(EventWrapper.state("collapsed")).toEqual(true);

    });

    when('user clicks Show Details button for a given event element', () => {
      const showDetails = EventWrapper.find(".show-details");
      showDetails.simulate("click");

    });

    then('the user should see more information for an event', () => {
      expect(EventWrapper.state("collapsed")).toEqual(false);

    });
  });

  test('User can collapse an event to hide its details', ({ given, and, when, then }) => {
    
    let EventWrapper;
    given('the user has an expanded event details', async () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      EventWrapper.setState({ collapsed: false });

    });

    when('user clicks Hide Details button for a given event element', () => {
      EventWrapper.find(".hide-details").simulate("click");

    });

    then('the user should see a collapsed event element hiding its details', () => {
      expect(EventWrapper.state("collapsed")).toBe(true);
    });

  });

});