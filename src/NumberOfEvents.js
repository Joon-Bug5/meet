import React, {Component} from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 32) {
      this.setState({
        numberOfEvents: '',
      })
    } else {
      this.setState({
        numberOfEvents: value,
      });
    }
    this.props.updateNumberOfEvents(event.target.value);
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <p><b>Number of Events:</b></p>
        <input
        type="text"
        name="number"
        className="number-of-events"
        value={this.props.numberOfEvents}
        onChange={(e) => this.handleInputChanged(e)}
        />
      </div>
    );
  }
}

export default NumberOfEvents;