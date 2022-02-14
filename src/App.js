import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css'
import { WarningAlert } from './Alert';
import { Container, Row, Col } from 'react-bootstrap';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location = 'all', number = this.state.numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events.slice(0, number) :
        events.filter((event) => event.location === location).slice(0, number);
      this.setState({
        events: locationEvents.slice(0, number),
        location
      });
    });
  }

  updateNumberOfEvents = (eventCount) => {
    const { currentLocation } = this.state;
    this.setState({
      numberOfEvents: eventCount
    });
    this.updateEvents(currentLocation, eventCount);
  }
  render() {
    return (
      <Container className='app-container' fluid>
      <div className='App'>
      {!navigator.onLine ? (<WarningAlert text="You are offline! No new updates!" />) : (<WarningAlert text=''  />)}
        <Row>
          <Col>
          <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
          </Col>
          
          <Col>
          <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />
          </Col>

          <Col>
          <EventList events={this.state.events} />
          </Col>
        </Row>
        </div>
      </Container>
    );
  }
}

export default App;