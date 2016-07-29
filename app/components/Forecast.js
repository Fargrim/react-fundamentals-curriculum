import React, {Component, PropTypes} from 'react';

class Forecast extends Component {
  render() {
    /**
     * @todo For each forecast, produce a div with one day's forecast in it.
     */
    return this.props.weather.map(function(day) {
      return (
        <div>
          <h1>{this.props.date}</h1>
          {this.props.city} <br></br>
        </div>
      )
    });
  }
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  weather: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired
};

export default Forecast;