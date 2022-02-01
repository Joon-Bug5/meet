import React, {Component} from 'react';

class NumberOfEvents extends Component {

  render() {
    return (
      <div className="NumberOfEvents">
        <p><b>Number of Events:</b></p>
        <input
        type="text"
        name="number"
        className="number-of-events"
        value={this.props.numberOfEvents}
        onChange={this.props.updateEventCount}
        />
      </div>
    );
  }
}

export default NumberOfEvents;