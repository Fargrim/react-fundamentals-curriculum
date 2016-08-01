import React, {Component, PropTypes} from 'react';

class Forecast extends Component {
  render() {
    /**
     * @todo For each forecast, produce a div with one day's forecast in it.
     */
    console.log('Forecast this:', this);
    return (
      <div>
        {this.props.forecast.map(
          function(day) {
            console.log('Day:', day);
            return (
              <div className='col-lg-12 text-center' key={day.dt}>
                {day.weather[0].description}
              </div>
            );
        })}
      </div>
    )
  }
}

Forecast.propTypes = {
  forecast: PropTypes.array.isRequired
};

export default Forecast;