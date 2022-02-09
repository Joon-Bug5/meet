import React, {Component} from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  constructor() {
    super();
    this.state = {
      numberOfEvents: 32,
      errorText: '',
    };
  }


  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 32) {
      this.setState({
        numberOfEvents: '',
        errorText: 'Please enter a number between 1 and 32',
      })
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: '',
      });
    }
    this.props.updateNumberOfEvents(event.target.value);
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <ErrorAlert text={this.state.errorText} />
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